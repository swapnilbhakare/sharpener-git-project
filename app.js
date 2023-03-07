// Examine the document object
// console.dir(document)
// console.log(document.domain);
// console.log(document.URL);
// console.log(document);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = "Hello";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// Get Element by ID

const headerTitle = document.getElementById("header-title");
const header = document.getElementById("main-header");

// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodbye";
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = "<h3>Hello</h3>";
// header.style.borderBottom = "solid 3px #000";
// Get Elements by class name
// const items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "bold";
// items[1].style.color = "green";
// for (let i = 0; i < items.length; i++) {
//   items[i].style.fontWeight = "bold";
//   items[i].style.backgroundColor = "green";
// }

const li = document.getElementsByTagName("li");
console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.color = "green";
for (let i = 0; i < li.length; i++) {
  li[i].style.fontWeight = "bold";
  li[i].style.backgroundColor = "green";
}
