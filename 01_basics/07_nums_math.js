const score = 400;
console.log(score);

const balance = new Number(500);
console.log(balance); // [Number: 500]

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // After point values 500.00

// const anotherNumber = 12.456; //12.5
// const anotherNumber = 123.456; //123
const anotherNumber = 1234.456; //1.23e+3
console.log(anotherNumber.toPrecision(3));

const hundred = 1000000;
console.log(hundred.toLocaleString());

// *************** math ***************
/*
console.log(Math);
console.log(Math.abs(-4)); // neg becomes positive
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4, 6, 8, 0, -2));
console.log(Math.max(4, 8, 90, 40));
*/
console.log(Math.random());
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // last min is added to bring the value to atleast min value
