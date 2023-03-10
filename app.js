// // Examine the document object
// // console.dir(document)
// // console.log(document.domain);
// // console.log(document.URL);
// // console.log(document);
// // console.log(document.title);
// // console.log(document.doctype);
// // console.log(document.head);
// // console.log(document.all);
// // console.log(document.all[10]);
// // document.all[10].textContent = "Hello";
// // console.log(document.forms);
// // console.log(document.links);
// // console.log(document.images);

// // Get Element by ID

// // const headerTitle = document.getElementById("header-title");
// // const header = document.getElementById("main-header");

// // headerTitle.textContent = "Hello";
// // headerTitle.innerText = "Goodbye";
// // console.log(headerTitle.innerText);
// // headerTitle.innerHTML = "<h3>Hello</h3>";
// // header.style.borderBottom = "solid 3px #000";
// // Get Elements by class name
// // const items = document.getElementsByClassName("list-group-item");
// // console.log(items);
// // console.log(items[1]);
// // items[1].textContent = "Hello 2";
// // items[1].style.fontWeight = "bold";
// // items[1].style.color = "green";
// // for (let i = 0; i < items.length; i++) {
// //   items[i].style.fontWeight = "bold";
// //   items[i].style.backgroundColor = "green";
// // }

// // const li = document.getElementsByTagName("li");
// // console.log(li);
// // console.log(li[1]);
// // li[1].textContent = "Hello 2";
// // li[1].style.fontWeight = "bold";
// // // li[1].style.color = "green";
// // for (let i = 0; i < li.length; i++) {
// //   li[i].style.fontWeight = "bold";
// //   li[i].style.backgroundColor = "green";
// // }

// // document.querySelector("list-group-item");
// // let secoundItem = document.querySelector(".list-group-item:nth-child(2)");

// // let secoundItem = document.querySelector(".list-group-item:nth-child(2)");
// // secoundItem.style.backgroundColor = "green";
// // let thirdItem = document.querySelector(".list-group-item:nth-child(3)");
// // // thirdItem.style.display = "none";

// // let odd = document.querySelectorAll("li:nth-child(odd)");
// // for (let i = 0; i < odd.length; i++) {
// //   odd[i].style.backgroundColor = "green";
// // }

// // let secoundColor = document.querySelectorAll("li");
// // secoundColor.style.color = "green";
// // secoundColor[1].style.color = "green";
// // console.log(secoundColor);

// var itemList = document.querySelector("#items");

// // console.log(itemList.parentNode);
// // itemList.parentNode.style.backgroundColor = "#f4f4f4";

// // parentElement
// // console.log(itemList.parentElement);
// // itemList.parentElement.style.backgroundColor = "#f4f4f4";

// // childNodes
// // console.log(itemList.childNodes);

// // children
// // console.log(itemList.children);
// // console.log(itemList.children[1]);
// // itemList.children[1].style.backgroundColor = "yellow";
// // first child
// // console.log(itemList.firstChild);

// // firstElement child
// // console.log(itemList.firstElementChild);
// // itemList.firstElementChild.textContent = "Hello 1";
// // child;
// // last child
// // console.log(itemList.lastChild);
// // lastElement child

// // console.log(itemList.lastElementChild);
// // itemList.lastElementChild.textContent = "Hello 1";

// // next sibling
// // console.log(itemList.nextSibling);

// // next element sibling
// // console.log(itemList.nextElementSibling);

// // prev sibling
// // console.log(itemList.previousSibling);
// // previous element sibling
// // console.log(itemList.previousElementSibling);
// // itemList.previousElementSibling.style.color = "green";

// // createElement

// // create a div
// let newDiv = document.createElement("div");
// // add class
// newDiv.className = "hello";
// // add id
// newDiv.id = "hello1";
// // add attr
// newDiv.setAttribute("title", "Hello div");
// // create a text node
// let newDivText = document.createTextNode("Hello World");
// // add text to div
// newDiv.appendChild(newDivText);

// let container = document.querySelector("header .container");
// let h1 = document.querySelector("header h1");
// container.insertBefore(newDiv, h1);
// newDiv.style.fontSize = "30px";
// // itemList.insertBefore(newDiv, h1);
// let ul = document.querySelector(" .list-group");
// let li = document.querySelector(".list-group-item");
// ul.insertBefore(newDiv, li);
// console.log(ul);

let form = document.getElementById("addForm");
let itemList = document.getElementById("items");
let filter = document.getElementById("filter");
// let description = document.getElementById("description");

form.addEventListener("submit", addItem);

// delete Event
itemList.addEventListener("click", removeItem);
// filter event
filter.addEventListener("keyup", filterItems);

// Add item function
function addItem(e) {
  e.preventDefault();
  //   Get Input value
  let newItem = document.getElementById("item").value;
  // get a descriton value
  let descInput = document.getElementById("description").value;
  // console.log(descInput);
  //   Create new li element
  let li = document.createElement("li");
  li.className = "list-group-item";
  //   Add text node with input value
  li.appendChild(document.createTextNode(newItem));
  li.appendChild(document.createTextNode(" "));
  // add description
  li.appendChild(document.createTextNode(descInput));
  // create delete buttion
  let deleteBtn = document.createElement("button");
  //   add classes to delete button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  //   Append text node
  deleteBtn.appendChild(document.createTextNode("X"));
  //   Append butiton to li
  li.appendChild(deleteBtn);

  //   create a edit button
  let editBtn = document.createElement("button");
  editBtn.className = "btn btn-info btn-sm float-right edit mx-auto";
  editBtn.appendChild(document.createTextNode("Edit"));
  console.log(editBtn);
  li.appendChild(editBtn);
  itemList.appendChild(li);
}

function removeItem(e) {
  //   e.preventDefault();
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}
// filter Item
function filterItems(e) {
  // convert text to lowercase
  let text = e.target.value.toLowerCase();
  //   Get list
  let items = itemList.getElementsByTagName("li");
  //   convert to an array
  Array.from(items).forEach(function (item) {
    let itemName = item.firstChild.textContent;
    let itemdesc = item.childNodes[1].textContent;

    if (
      (itemName.toLowerCase().indexOf(text) ||
        itemdesc.toLowerCase().indexOf(text) != -1) != -1
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
