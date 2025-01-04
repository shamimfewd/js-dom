// const test = document.getElementsByTagName("h1");
// for (const t of test) {
//   console.log(t.innerText);
// }
// const fruits = document.getElementById("fruits-title");
// // console.log((fruits.innerText = "change text"));
// console.log(fruits);

// const important = document.getElementsByClassName("important");
// console.log(important);
//===================================================
// const test = document.querySelectorAll(".important");

// for (const item of test) {
//   console.log(item.innerText);
// }

// const one = document.querySelector(".important");
// console.log(one.innerText);

// ========================================================

// const sections = document.querySelectorAll("section");
// console.log(sections);
// for (const section of sections) {
//   section.style.border = "5px solid red";
//   section.style.margin = "5px";
//   section.style.padding = "20px";
//   console.log(section);
// }

// const uniqueId = document.getElementById("uniqueId");
// uniqueId.classList.add("myClass");
// uniqueId.classList.remove("myClass");

// =================================================================

// const serialList = document.getElementById("serialList");
// const li = document.createElement("li");
// const p = document.createElement("p");

// li.innerText = "dynamic li";
// p.innerText = "dynamic p";
// serialList.appendChild(p);
// serialList.appendChild(li);

// console.log(serialList);

const main = document.getElementById("main");
const section = document.createElement("section");
section.style.border = "5px solid red";
const h1 = document.createElement("h1");
h1.innerText = "dynamic h1";
section.appendChild(h1);

const ul = document.createElement("ul");
const li = document.createElement("li");
li.innerText = "dynamic li";
ul.appendChild(li);

section.appendChild(ul);
main.appendChild(section);

// innerHTML

const sectionDress = document.createElement("section");
sectionDress.innerHTML = `
<h1>this si my dress</h1>
<ul>
<li>dress one</li>
<li>dress four</li>
<li>dress three</li>
</ul>



`;

main.appendChild(sectionDress);
console.log(main);
