// 3 types of functions
//function decalration

// function pushIntoArray(event, arr, sr_no = 0) {
//   console.log(sr_no);
//   let data = event.target.value;
//   let new_data = "append once " + data;
//   console.log(new_data);
//   arr.push(new_data);
//   //   console.log(arr);
//   console.log("basket", basket);
//   console.log("garage", garage);
//   console.log("pallet", pallet);
// }

// function expression;

// const pushIntoArray = function (event, arr, sr_no = 0) {
//   console.log(sr_no);
//   let data = event.target.value;
//   let new_data = "append once " + data;
//   console.log(new_data);
//   arr.push(new_data);
//   //   console.log(arr);
//   console.log("basket", basket);
//   console.log("garage", garage);
//   console.log("pallet", pallet);
// };

// arrow functions
// const pushIntoArray = (event, arr, sr_no = 0) => {
//   console.log(sr_no);
//   let data = event.target.value;
//   let new_data = "append once " + data;
//   console.log(new_data);
//   arr.push(new_data);
//   //   console.log(arr);
//   console.log("basket", basket);
//   console.log("garage", garage);
//   console.log("pallet", pallet);
// };
// importance of return
// const oneArg = (value) => {
//   let area = value;
//   return area;
// };

// console.log(oneArg(2));

// callback function
// let _arr = ["i love js", "macs are beautiful"];

// const myForEachFunc = (callbackFn) => {
//   var i = 0;
//   while (i < _arr.length) {
//     // console.log(i);
//     callbackFn(_arr[i]);
//     i++;
//   }
// };

// const callbackFn = (value) => {
//   console.log(value);
// };

// myForEachFunc(callbackFn);

// let _arr = [1, 2, 3, 4, 5];

// _arr.forEach((val, ind) => {
//   console.log("ind", ind, "val", val + 2);
// });
// /////////////

// let basket = [];
// let garage = [];
// let pallet = [];

// let element1 = document.querySelector(".select-fruits");
// let element2 = document.querySelector(".select-cars");
// let element3 = document.querySelector(".select-colours");

// element1.addEventListener("click", (event) => pushIntoArray(event, basket, 1));
// element2.addEventListener("click", (event) => pushIntoArray(event, garage, 2));
// element3.addEventListener("click", (event) => pushIntoArray(event, pallet, 3));

// element1.addEventListener("click", (event) => {
//   let data = event.target.value;
//   let new_data = "append something " + data;
//   console.log(new_data);
//   basket.push(new_data);
//   //   console.log(arr);
//   console.log("basket", basket);
//   console.log("garage", garage);
//   console.log("pallet", pallet);
// });

// element2.addEventListener("click", (event) => {
//   let data = event.target.value;
//   let new_data = "append something " + data;
//   console.log(new_data);
//   garage.push(new_data);
//   //   console.log(arr);
//   console.log("basket", basket);
//   console.log("garage", garage);
//   console.log("pallet", pallet);
// });

// element3.addEventListener("click", (event) => {
//   let data = event.target.value;
//   let new_data = "append something " + data;
//   console.log(new_data);
//   pallet.push(new_data);
//   //   console.log(arr);
//   console.log("basket", basket);
//   console.log("garage", garage);
//   console.log("pallet", pallet);
// });

// function statusChecker() {
//   console.log("cheking status");
// }
