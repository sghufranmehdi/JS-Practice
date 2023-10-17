const name = "Ghufran";
const name2 = " Mehdi";
const name3 = name + name2;
const gitRepo = 50;
//console.log(name + name2 + " : " + gitRepo);

console.log(`hello my name is ${name3} and my repo count is ${gitRepo}`);

const gameName = new String(`Call-of-Duty`);
console.log(typeof name3); // String
console.log(typeof gameName); // String as an "Object"
console.log(gameName[0]);
console.log(gameName.__proto__); //in console shows as an array

console.log(gameName.length);

console.log(gameName.toLowerCase());

console.log(gameName.charAt(6));

console.log(gameName.indexOf("f"));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-3, 4);
console.log(anotherString);

const newStringOne = "     Ghufran    ";
console.log(newStringOne.trim());

const url = "https://ghufran.com/ghufran%20MeHdi";
console.log(url.replace("%20", "-"));

console.log(url.includes("Mehdia"));

console.log(gameName.split("-")); // split on the basis of -, space

console.log(gameName.split(""));
