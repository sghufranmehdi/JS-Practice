function calculatecartPrice(num1) {
  return num1;
}
console.log(calculatecartPrice(5));

function calculatecartPrice2(...num1) {
  //rest/spread operator
  return num1;
}
console.log(calculatecartPrice2(5, 400)); //return in the form of array => [ 5, 400 ]

function calculatecartPrice3(val1, val2, ...num1) {
  //rest/spread operator
  return num1;
}
console.log(calculatecartPrice3(5, 400, 500, 600)); //...num1 returns [ 500, 600 ] as 5 and 400 is assigned to val1 and val2 respectively

// Passing objects to functions
const user = {
  name: "Ghufran",
  price: 300,
};
function handleObject(anyObject) {
  console.log(`username is ${anyObject.name} and price is ${anyObject.price}`);
}
//handleObject(user);
handleObject({
  name: "Ghufran Mehdi",
  price: 500,
});

// Passing Array to functions
const myArr = [200, 400, 600, 800];
function returnSecondvalue(anyArray) {
  return anyArray[1];
}
//console.log(returnSecondvalue(myArr));
console.log(returnSecondvalue([200, 1000, 300, 40]));
