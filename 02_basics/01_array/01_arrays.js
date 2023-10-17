const myArr = [0, 1, 2, 3, 4, 5]; //Js Arrays are resizable

// Array copy operation creates the shallow copy i.e passing the reference
const myHeros = ["Superman", "Batman"];
const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr[0]); //Access element through index

// Array Methods
//1. push
myArr.push(6); //push element in arr at the end
console.log(myArr);
myArr.push(7);
console.log(myArr);
//2. pop
myArr.pop(); //pop Element from the end of array
console.log(myArr);
//3. unshift
myArr.unshift(8); //push element in arr from front
console.log(myArr);

myArr.unshift(9); //too much time consuming
console.log(myArr);

//4. shift
myArr.shift(); //pop element in arr from front
console.log(myArr);

//5. includes
console.log(myArr.includes(9)); //return true or false after checking if element is present or not

//6. indexOf
console.log(myArr.indexOf(9)); // return the index of givern element is not return -1

//7. join
const newArr = myArr.join(); //Add all the elements of array into String
console.log(myArr); // Array as an object
console.log(newArr); // Array as a String

//8. typeOf
console.log(typeof myArr);
console.log(typeof newArr);

//9. slice & splice
console.log("A ", myArr);

//orignal array remains same after slice method
const myA1 = myArr.slice(1, 3); // didnt add the upper bound 3
console.log(myA1);

console.log("B ", myArr);

//orignal array change after splice method
const myA2 = myArr.splice(1, 3); // add the upper bound 3
console.log("C ", myArr); //remaining values of array are here
console.log(myA2); //splice value here
