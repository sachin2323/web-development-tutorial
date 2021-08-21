// console.log(document);

// // select elements
// let del_option = document.querySelector("#bmw");
// let ele = document.querySelector(".select-cars");

// console.log(ele.classList.remove("abc"));
// console.log(ele.classList);
// console.log(ele.children);

// let ele2 = document.querySelector(
//   "body > select.select-cars > option:nth-child(2)"
// );

// console.log(ele2);

// // let ele = document.querySelector(".select-cars");
// console.log(ele);

// // create Elements

// let p = document.createElement("p");
// p.style = "color:white";
// // p.textContent = "Please";

// p.innerHTML = "<b>hello</b><b>hello2</b>";
// console.log(p.setAttribute("style", "width:150px"));
// console.log(p);
// let option = document.createElement("option");
// option.value = "rolls";
// option.text = "rolls";
// ele.appendChild(option);

// // remove elements

// // let del_option = document.querySelector("#bmw");
// console.log(del_option);

// ele.removeChild(del_option);

let num = 0;

let number_ele = document.querySelector("#number");
console.log(number_ele);
number_ele.innerHTML = `${num}`;

let increment_btn = document.querySelector("#increment");
// console.log(increment_btn);

increment_btn.addEventListener("click", (event) => {
  num += 1;
  number_ele.innerHTML = `${num}`; //changing the dom as it is incrementing
  console.log(number_ele);
  if (num > 10) {
    number_ele.style = "color:green";
  } else {
    number_ele.style = "color:red";
  }
});

let decrement_btn = document.querySelector("#decrement");

decrement_btn.addEventListener("click", (event) => {
  num -= 1;
  number_ele.innerHTML = `${num}`;
  console.log(number_ele);

  if (num > 10) {
    number_ele.style = "color:green";
  } else {
    number_ele.style = "color:red";
  }
});
