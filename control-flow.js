// loops

// for loop; while; do while;

//for loop

// let _arr = [1, 2, 3, 4, 5];

// for (let i = 0; i < 6; i++) {
//   console.log(i);
// }

// let j = 0;

// while loop

// while (j < 6) {
//   console.log(j);
//   j++;
// }

// while (true) {
//   let name = window.prompt("Enter your name: ");
//   if (name == "Sachin") {
//     break; // this will end the loop;
//   }
// }

// do-while loop;

// let k = 0;

// let userChecker = function (username, password) {
//   if (username === "Sachin" && password === "123456") {
//     return true;
//   }
//   return false;
// };

// do {
//   //   console.log(k);
//   //   k++;

//   let userIsAuthenticated = true;

//   if (userIsAuthenticated === true) {
//     // redirect to user dashboard
//     console.log("user is already logged in");
//     break;
//   }

//   let username = window.prompt("Enter your username: ");
//   let password = window.prompt("Enter your password: ");

//   if (userChecker(username, password) === true) {
//     console.log("user is logged in");
//     //redirecting to dashboard
//     break;
//   }
// } while (true);

// if statement

// let userIsAuthenticated = true;
// let users = ["Ashish", "Dhriti", "Dheeraj", "xe122"];
// let user = null;

// let randomUser = function () {
//   let ind = Math.floor(Math.random() * 4);
//   user = users[ind];
//   console.log(user, ind);
//   return user;
// };

// user = randomUser();
// "abce"
// 12
// 1

// 0, false, ''
// and(&&), or (||), not(!)

// if (userIsAuthenticated === true && user == "Ashish") {
//   // redirect to user dashboard
//   console.log("user  Ashish is  logged in");
// } else if (userIsAuthenticated === true && user == "Dhriti") {
//   // redirect to user dashboard
//   console.log("user  Dhriti is  logged in");
// } else if (userIsAuthenticated === true && user == "Dheeraj") {
//   // redirect to user dashboard
//   console.log("user  Dheeraj is  logged in");
// } else {
//   console.log("user is not correct");
//   //redirect to login page;
// }

// switch case

// switch (user) {
//   case "Ashish":
//     if (userIsAuthenticated === true) {
//       console.log("user  Ashish is  logged in");
//     }
//     break;

//   case "Dheeraj":
//     if (userIsAuthenticated === true) {
//       console.log("user  Dheeraj is  logged in");
//     }
//     break;

//   case "Dhriti":
//     if (userIsAuthenticated === true) {
//       console.log("user  Dhriti is  logged in");
//     }
//     break;

//   default:
//     console.log("user is not correct");
// }

//break and continue

// for (let i = 0; i < 6; i++) {
//   if (i == 4) {
//     continue;
//   }
//   console.log(i);
//   let num = 2;
//   let sum = i + num;
//   console.log("sum", sum);
// }

// use of not statements

// let userIsAuthenticated = false;

// if (!(userIsAuthenticated === true)) {
//   // redirect to user dashboard
//   console.log("user is already logged in");
// }

// let element = document.querySelector(".check");
// console.log(element);
// console.log(element.value);

// element.addEventListener("click", (event) => {
//   let tick = event.target.checked;
//   if (tick) {
//     event.target.value = true;
//   } else {
//     event.target.value = tick;
//   }

//   //   console.log("tick", tick);
//   //   console.log("negate tick", !event.target.checked);
//   //   element.value = !tick;
//   console.log(element);
//   console.log(element.value);
// });
