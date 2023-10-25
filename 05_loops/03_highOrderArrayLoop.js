// Array oriented loops

// 1. for of

// ["","",""]
// [{},{},{}] // obj within array
const arr = [1, 2, 3, 4, 5, 6];
for (const iterator of arr) {
  console.log(iterator);
}

const greeting = "Hello World";
for (const iterator of greeting) {
  if (iterator == " ") {
    continue;
  }
  console.log(`Each Char is ${iterator}`);
}

// Maps => obj holds key value pair => remebers order
const myMap = new Map();
myMap.set("IN", "India");
myMap.set("PK", "Pakistan");
myMap.set("AFG", "Afghanistan");
myMap.set("IRN", "Iran");
myMap.set("PK", "Pakistan"); // unique value only

console.log(myMap);

for (const [key, value] of myMap) {
  //maps are iteratable
  console.log(key, ":", value);
}

// Object
const myObj = {
  game1: "NFS",
  game2: "GTA",
};
// for (const [key, value] of myObj) {
//   // error: myObj is not iteratable
//   console.log(key, ":", value);
// }

// applying loop on onject
const myObj2 = {
  js: "javaScript",
  cpp: "C++",
  rb: "Ruby",
  swift: "swift by apple",
};
// 2. for in

// only keys
for (const key in myObj2) {
  console.log(key);
}
// only values
for (const key in myObj2) {
  console.log(myObj2[key]);
}
// key-value pair
for (const key in myObj2) {
  console.log(`${key} shorcut for ${myObj2[key]}`);
}

// check if it works on array?
const prog = ["js", "rb", "py", "java", "cpp"];
for (const key in prog) {
  console.log(prog[key]); // yes
}

const myMap2 = new Map();
myMap.set("IN", "India");
myMap.set("PK", "Pakistan");
myMap.set("AFG", "Afghanistan");
myMap.set("IRN", "Iran");
myMap.set("PK", "Pakistan"); // unique value only

// for (const key in myMap2) { // map is not iterateable
//   console.log(key);
// }

// 3. for each
const coding = ["js", "ruby", "java", "py", "cpp"];

coding.forEach(function (index) {
  console.log(index);
});

coding.forEach((index) => {
  console.log(index);
});

coding.forEach((val, index, arr) => {
  console.log(val, index, arr);
});

// on obj => array of obj

const myCoding = [
  {
    languageName: "javascript",
    languageFile: "js",
  },
  {
    languageName: "java",
    languageFile: "java",
  },
  {
    languageName: "python",
    languageFile: "py",
  },
];

myCoding.forEach((item) => {
  console.log(item.languageName);
});

myCoding.forEach((val, index, arr) => {
  console.log(val, index, arr);
});
