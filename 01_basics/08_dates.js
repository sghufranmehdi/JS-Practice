let mydate = new Date();
console.log(mydate.toString());
console.log(typeof mydate); // Object

console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleString());
console.log(mydate.toLocaleTimeString());

let myCreatedDate = new Date(2023, 0, 23); // month starts from 0 in JS
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.getMonth() + 1); // to handle jan 0

let myTimeStamps = Date.now();
console.log(myTimeStamps);

console.log(Math.floor(Date.now() / 1000));
