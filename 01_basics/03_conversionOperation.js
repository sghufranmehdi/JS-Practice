/*
let score = 33 // number
console.log(typeof score); //number
console.log(typeof(score)); //number
let valueInNumber = Number(score) 
console.log(typeof valueInNumber); //number
console.log(valueInNumber);//33
*/

/*
let score = "33" // String
console.log(typeof score); //String
console.log(typeof(score)); //String
let valueInNumber = Number(score) 
console.log(typeof valueInNumber); //number
console.log(valueInNumber);//33
*/

/*
let score = "33abc" // NaN (Not a number)
console.log(typeof score); //String
console.log(typeof(score)); //String
let valueInNumber = Number(score) 
console.log(typeof valueInNumber); //number
console.log(valueInNumber);//NaN
*/

/*
let score = null // object
console.log(typeof score); //object
console.log(typeof(score)); //object
let valueInNumber = Number(score) 
console.log(typeof valueInNumber); //number
console.log(valueInNumber);//0
*/

/*
let score = undefined // undefined
console.log(typeof score); //undefined
console.log(typeof(score)); //undefined
let valueInNumber = Number(score) 
console.log(typeof valueInNumber); //number
console.log(valueInNumber);//NaN
*/

/*
let score = true // boolean
console.log(typeof score); //boolean
console.log(typeof(score)); //boolean
let valueInNumber = Number(score) 
console.log(typeof valueInNumber); //number
console.log(valueInNumber);//1
*/

// "33" =>33
// "333abc" => NaN
// true => 1; false => 0
/*
let isLoggedIn = 0 //false
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let isLoggedIn = 1 // true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let isLoggedIn = "" //false
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

let isLoggedIn = "Ghufran" //true
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);
*/

/*
let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);
*/

// *********************** Operation ***********************
let value = 3;
let negValue = -value

// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2); // 2^2
// console.log(2/2);
// console.log(2%3);

str1 = "Hi"
str2 = " Ghufran" // space for identifify concat
// str3 = str1+str2
// console.log(str3);

// str3 = str1-str2
// console.log(str3); //NaN

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32

// console.log(true); // true
// console.log(+true); // 1
// //console.log(true+); // not allowed
// console.log(+""); // 0

// Not encouraged we focus on code readibility
// let num1, num2, num3
// num1 = num2 = num3 = 2+2
// console.log(num2);

let gameCounter = 100;
// gameCounter++; //prefix
// console.log(gameCounter);
++gameCounter;
console.log(gameCounter);
