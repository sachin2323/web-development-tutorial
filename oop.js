// let user1Name = "sachin";
// let user1Age = "20";
// let user1Location = "Mumbai";

// let user2Name = "sachin";
// let user2Age = "20";
// let user2Location = "Mumbai";

// let user3Name = "admin";
// let user3Age = "20";
// let user3Location = "Mumbai";

// display = (name, age, location) => {
//   console.log(name, age, location);
// };

// deleteUser = () => {
//   // some logic of deleting
// };

// display(user1Name, user1Age, user1Location);
// display(user2Name, user2Age, user2Location);
// display(user3Name, user3Age, user3Location);

class User {
  constructor(name, age, location, email) {
    this.name = name;
    this.age = age;
    this.location = location;
    this.email = email;
  }

  login() {
    console.log(`${this.email} has logged in`);
  }

  logout() {
    console.log(`${this.email} has logged out`);
  }
}

class Admin extends User {
  deleteUser(userList) {
    // console.log(userList, whichUser);
    userList.pop();
    return userList;
  }
}

let user1 = new User("sachin", 20, "Mumbai", "sachin@gmail.com");
let user2 = new User("ashish", 20, "Hyderabad", "ashish@gmail.com");
let user3 = new User("saina", 20, "banglore", "saina@gmail.com");

let admin = new Admin("admin", 50, "us", "admin@gmail.com");

let userList = [user1, user2, user3, admin];

// it creates an empty object
// it changes the scope of this operator to object scope
// it runs the constructor function

// let User1 = {
//   name: "sachin",
//   age: "20",
//   location: "Mumbai",
//   email: "sachin@gmail.com",

//   login: function () {
//     console.log(`${this.email} has logged in`);
//   },

//   logout: () => {
//     console.log(`${this.email} has logged out`);
//   },
// };

// let User2 = {
//   name: "ashish",
//   age: "20",
//   location: "Hyderabad",
//   email: "ashihs@gmail.com",

//   login: function () {
//     console.log(`${this.email} has logged in`);
//   },

//   logout: function () {
//     console.log(`${this.email} has logged out`);
//   },
// };

// let User3 = {
//   name: "saina",
//   age: "20",
//   location: "Banglore",
//   email: "ashihs@gmail.com",

//   login: () => {
//     console.log(`${this.email} has logged in`);
//   },

//   logout: () => {
//     console.log(`${this.email} has logged out`);
//   },
// };

// let User4 = {
//   name: "saina",
//   age: "20",
//   location: "Banglore",
//   email: "ashihs@gmail.com",

//   login: () => {
//     console.log(`${this.email} has logged in`);
//   },

//   logout: () => {
//     console.log(`${this.email} has logged out`);
//   },
// };

// let User5 = {
//   name: "saina",
//   age: "20",
//   location: "Banglore",
//   email: "ashihs@gmail.com",

//   login: () => {
//     console.log(`${this.email} has logged in`);
//   },

//   logout: () => {
//     console.log(`${this.email} has logged out`);
//   },
// };
