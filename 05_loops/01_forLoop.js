// for

for (let index = 0; index <= 10; index++) {
  const element = index;
  if (element == 5) {
    console.log("5 is best");
  }
  console.log(element);
}

// Table
for (let index1 = 0; index1 < 10; index1++) {
  console.log(`Outer loop: ${index1}`);
  for (let index = 0; index < 10; index++) {
    //console.log(`inner loop: ${index}`);
    console.log(index1 + "*" + index + "=" + index1 * index);
  }
}

// Array
let myArr = ["flash", "batman", "superman"];
console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
  const element = myArr[index];
  console.log(element);
}

// break
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("Detected 5");
    break;
  }
  console.log(`Value of index is ${index}`);
}

// continue
for (let index = 1; index <= 20; index++) {
  if (index == 5) {
    console.log("Detected 5");
    continue;
  }
  console.log(`Value of index is ${index}`);
}
