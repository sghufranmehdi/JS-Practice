// Object => key Value pairs

// declairing object => 2 ways => Literals, Constructor (Singleton => single object of its type)

const mySym = Symbol("key1"); //unique dataType Symbol => Use a symbol in obj
// console.log(typeof mySym);

// 1. Object Literals

const user = {
  name: "Ghufran",
  // mySym: "MySymbol1", //Acts as a String not as a Symbol
  [mySym]: "MySymbol1",
  "full name": "Ghufran Mehdi", //cant access this with dot
  age: 18,
  location: "lahore",
  email: "sgmehdi@email.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// Accessing an object
// console.log("With Dot: ", user.email); // Not a good method
// console.log("With Square Bracket: ", user["email"]);

// console.log(user["full name"]);

// // console.log(user.mySym);
// // console.log(typeof user.mySym); //String

// console.log(user[mySym]);
// console.log(typeof user[mySym]);

// // Updating object values
// user.email = "Ghufran@google.com";
// console.log(user);

// Object.freeze(user); // cant do any change after that

// user.email = "mehdi@google.com";
// console.log(user); // value didnt change here

// Functions are treated as a variable is JS
user.greeting = function () {
  console.log("hello Js User");
};

user.greeting2 = function () {
  console.log(`hello Js User, ${this.name}`); //this is used as fuction is already refering towards user
};
// console.log(user.greeting); // undefined ([Function (anonymous)])
console.log(user.greeting()); // hello Js User
console.log(user.greeting2());
