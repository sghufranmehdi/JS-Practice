// while

let index = 0;
while (index <= 10) {
  console.log(`Value of index isd ${index}`);
  index = index + 2;
}

let myarr = ["flash", "batman", "superman"];
let arr = 0;
while (arr < myarr.length) {
  console.log(`Value is ${myarr[arr]}`);
  arr = arr + 1;
}

// do while
let score = 1;
do {
  console.log(`Score is ${score}`);
  score++;
} while (score <= 10);

let score2 = 11; // do one time but condition check is false
do {
  console.log(`Score is ${score2}`);
  score2++;
} while (score2 <= 10);
