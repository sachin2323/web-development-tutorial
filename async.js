// console.log("line one");
// console.log("line two");

// setTimeout(() => {
//   console.log("this function will run after 2 seconds");
// }, 1200000);

// // for (let i = 0; i < 5000000000; i++) {
// //   i; // simulating fetching from database
// // }

// console.log("line three");
// console.log("line four");

const getTodos = (callback, path) => {
  //   console.log(callback);

  let request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    // console.log("readystatechange", request.readyState);

    if (request.readyState == 4 && request.status == "200") {
      callback(undefined, request.responseText);
    }

    if (request.readyState == 4 && request.status == "404") {
      callback("data is unavailable", undefined);
    }
  });

  request.open("get", path);

  request.send();
};

// getTodos((err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// }, "https://jsonplaceholder.typicode.com/todos/1");

callback_paymentSuccessfull = () => {
  console.log("Payment is Successfull");
};

callback_paymentFailure = () => {
  console.log("Payment is Failed");
};

const callback_doPayment = (
  upiId,
  otp,
  callback_paymentSuccessfull,
  callback_paymentFailure
) => {
  const databaseUpiId = "sachin@upi";
  const databaseOTP = "1234";

  if (upiId == databaseUpiId && otp == databaseOTP) {
    callback_paymentSuccessfull();
    return true;
  } else {
    callback_paymentFailure();
    return false;
  }
};

const upiVerification = (
  upiId,
  otp,
  callback_doPayment,
  callback_paymentSuccessfull,
  callback_paymentFailure
) => {
  const databaseUpiId = "sachin@upi";
  if (upiId === databaseUpiId) {
    callback_doPayment(
      upiId,
      otp,
      callback_paymentSuccessfull,
      callback_paymentFailure
    );
    return true;
  } else {
    callback_paymentFailure();
    return false;
  }
};

upiVerification(
  "sachin@upi",
  1234655645,
  callback_doPayment,
  callback_paymentSuccessfull,
  callback_paymentFailure
);
