// const promiseFn = () => {
//   return new Promise((resolve, reject) => {
//     // fetching from an api
//     let something = "success";
//     if (something === "success") {
//       resolve("abc");
//       reject("abc");
//     }
//     if (something === "failure") {
//       reject("abc");
//       resolve("abc");
//     }
//   });
// };

// const { concatSeries } = require("async");

// promiseFn()
//   .then((data) => {
//     console.log("data", data);
//   })
//   .catch((err) => {
//     console.log("error", err);
//   });

// fetch api

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     return response.json(); //resolve({abc:123})
//   })
//   .then((abc) => {
//     console.log("user1", abc);
//     return fetch("https://jsonplaceholder.typicode.com/todos");
//   })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log("user2", data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// An Ecommerce website

// Signup (userData)

// user get registerd

// login (username, password)

// gets redirected to dashboard
// stats api
// order api // userId
// cart api

// ES6 we hav ASYnc Await

let promiseFnAsync = async () => {
  let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(response);
  let data = await response.json();
  console.log(data);

  let response2 = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  console.log(response);
  let data2 = await response2.json();
  console.log(data2);

  return [data, data2];
};

promiseFnAsync()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
