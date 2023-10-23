var c = 300;
let a = 300; //global scope
if (true) {
  let a = 10;
  const b = 20;
  var c = 30; // value changes here
  console.log("inner: ", a); //block scope
}
// error as a and b are not defined

console.log("outer: ", a); // prints 300
// console.log(b);

console.log(c); //prints 30 besides declaires in a function scope
// var ignores the scope
