const user = {
  username: "Ghufran",
  price: 9999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    // this is used to create current context (within scope)
    console.log(this); // refers to whole obj in the context
  },
};

// user.welcomeMessage(); // context of username is Ghufran

// user.username = "Sam";

// user.welcomeMessage(); // context of changed username is Sam

// console.log(this); // {} here as we are in node env

// when you run console.log(this); in browser then it shows window
// In Browser global object is window object =>
// so that you can capture all the events performed on windows

// function tea() {
//   console.log(this);
//   let username = "Ghufran";
//   console.log(this.username); //undefined in this case
//   //cant use this in functions
// }
// tea();

// const tea = function () {
//   console.log(this);
//   let username = "Ghufran";
//   console.log(this.username); //undefined in this case
//   //cant use this in functions
// };
// tea();

const tea = () => {
  console.log(this); //{}
  let username = "Ghufran";
  console.log(this.username);
};
tea();

// Arrow Function
const addTwo = (num1, num2) => {
  return num1 + num2;
};

console.log(addTwo(3, 4));

// implicit return of arrow function
const addTwo2 = (num1, num2) => num1 + num2;
console.log(addTwo2(3, 4));

const addTwo3 = (num1, num2) => num1 + num2; //const addTwo3 = (num1, num2) => (num1 + num2)
console.log(addTwo3(3, 4));

const addTwo4 = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo4(3, 4));

const addTwo5 = (num1, num2) => {
  //undefined
  username: "Ghufran"; // cant return object like this one
};
console.log(addTwo5(3, 4));

const addTwo6 = (num1, num2) => ({ username: "Ghufran" }); //{ username: 'Ghufran' }
console.log(addTwo6(3, 4));

const myarr = [2, 5, 6, 7, 8, 9];
myarr.forEach(function () {});
myarr.forEach(() => {});
