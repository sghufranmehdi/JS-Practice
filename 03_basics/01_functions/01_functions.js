// function =>  like a codeblock to reuse multiple times
function sayMyName() {
  console.log("G");
  console.log("h");
  console.log("u");
  console.log("f");
  console.log("r");
  console.log("r");
  console.log("a");
  console.log("n");
}

sayMyName; //reference of function => function didnt execute
sayMyName(); //execution

function addTwoNumbers(number1, number2) {
  //number1 and number2 are parameters here
  console.log(number1 + number2);
}

addTwoNumbers(); // Nan => No arguments passed

addTwoNumbers(3, 5); // 3 and 5 are arguments here
addTwoNumbers(3, "4"); // 34
addTwoNumbers(3, "a"); // 3a
addTwoNumbers(3, null); // 3

const result = addTwoNumbers(3 + 5);
console.log("Results: ", result); //undefined => As Function is nothing to return here

// ************************

function addTwoNumbers2(number1, number2) {
  //number1 and number2 are parameters here

  //   let result = number1 + number2;
  //   return result;

  return number1 + number2;

  console.log("Ghufran"); // this is not going to print as funcvtion is ended after returning value
}

const result2 = addTwoNumbers2(5, 5);
console.log("Result2: ", result2);

// ************************
function loginUsermessage(username) {
  //function loginUsermessage(username = "user") {
  // if no value given then user is printed

  //   if (username === undefined) {
  //     console.log("Please Enter UserName ");
  //     return;
  //   }

  if (!username) {
    console.log("Please Enter UserName ");
    return;
  }
  return `${username} just logged in.`;
}

// console.log(loginUsermessage("Ghufran"));
console.log(loginUsermessage()); //undefined just logged in.
