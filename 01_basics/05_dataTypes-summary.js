// 1. Js is dynamicaly typed languate
// 2. Primitive (Call by value) => String, Number, Boolean. null, undefined, Symbol, BigInt
const score = 100;
const score2 = 100.3;

const isLoggedIn = false;
const outsideTemp = null;

let userEmail; // undefined

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 4564736545368728n;

// 3. Non-Primitive (Call by refernce) => Array, Function, Objects
const cricketers = ["Babar", "Kohli", "KL", "Rizwan"];

let myObj = {
  name: "Ghufran",
  age: 22,
};

// storing function as a variable
const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof myObj); // Object
console.log(typeof myFunction); // function

// *************** Memory ***************
// 1. Stack => Primitive  => Call by value

let myYoutubeName = "GhufranMehdidotcom";
let anotherName = myYoutubeName; //only value is copied not the reference
console.log("before updating", anotherName);
anotherName = "MehdiGhufrandotcom";
console.log("after updating", myYoutubeName);
console.log("after updating", anotherName);

// 2. Heap => Non-primitive  => Call by Reference
let userOne = {
  email: "gmehdidotcom",
  hbl: "gmehdi@hbldotcom",
};
let userTwo = userOne; // passing thge reference so if any change happened it changes the userOne data

userTwo.email = "ghufran@google.com"; // change happens at the refernce

console.log(userOne.email);
console.log(userTwo.email);
