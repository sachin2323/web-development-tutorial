//object literals

// pass by value eg
// [(30,x1) , (10,x2) ] imaginary stack

// let x1 = 10;
// let x2 = x1; // pass by value
// console.log(x1, x2);

// x1 = 30;

// console.log(x1, x2);

// pass by reference eg

// imaginary stack [(7000h,user1), (7000h,user2)]  imaginary heap [ (7000h, user_obj)]

// let user1 = { name: "abhishek", age: 30 };
// let user2 = user1; // pass by reference
// console.log(user1, user2);

// user1.age = 32;

// console.log(user1, user2);

// let x = 50;

let fn = () => {
  let x = 20;
  let inner_fn = function () {
    let x = 30;
    console.log("x in inner fn ", x);
  };
  inner_fn();
  console.log("x in fn", x);
};
fn();
// console.log("x in module scope", x);

// let this_fn = () => {
//   console.log(this);
// };

// let user = {
//   name: "sachin",
//   email: "sachin@gmail.com",
//   blogs: ["i love js", "macs are beautiful"],

//   login: () => {
//     console.log("user is logged in");
//   },

//   fn: () => {
//     console.log("this is an method");
//   },

// logBlog: function () {
// console.time();
// var x = 0;
// var length = this.blogs.length;
// while (x < length) {
//   console.log(this.blogs[x]);
//   x++;
// }
// for (let i = 0; i < length; i++) {
//   console.log(this.blogs[i]);
// }
// printBlog = (value) => {
//   console.log(value);
// };
// this.blogs.forEach(printBlog);
// this.blogs.map(printBlog);
// console.timeEnd();
//console.log(this.blogs);
//   },

//   this_fn: function () {
//     console.log(this); // in traditional fn, this keyword will bind to current obj.
//   },
//   //always use traditional way of writing fn in classes or obj methods
//   this_arrow_fn: () => {
//     console.log(this); //; in arrow fn, this keyword will always return window obj.
//   },
// };

// how to access properties??
//! 1. using dot notation
// user.name = "ashish";
// console.log(user.name.toUpperCase());
// console.log(user.email);

// console.log(user.login());

// const _arr = ["name", "email"];

// // using []
// console.log(user[_arr[0]]);

// user.fn();

// user.logBlog();

// this_fn();
// // user.name;
// user.this_arrow_fn();
