// if
if (true) {
}
if (false) {
}
//the question is how we evaluate true and false

const userLoggedIn = true;
if (userLoggedIn) {
}

if (2 == "2") {
  console.log("Executed");
}

if (2 !== "2") {
  console.log("Executed");
}

// COnditional => <, >, <=, >=, ==, ===, !=,

// const score = 200;
// if (score > 100) {
//   let power = "fly";
//   console.log(`user power: ${power}`);
// }

const balance = 1000;
// if (balance > 500) console.log("test");

// const balance2 = 1000;
// if (balance > 500) console.log("test"), console.log("test2");

if (balance < 500) {
  console.log("less than 500");
} else if (balance < 750) {
  console.log("less than 750");
} else if (balance < 900) {
  console.log("less than 750");
} else {
  console.log("less than 1200");
}

const isLoggedIn = true;
const debitCard = true;
const loginFromEmail = true;
const loginFromGoogle = true;
if (isLoggedIn && debitCard && 2 == 2) {
  console.log("Allowed to shop");
}

if (loginFromEmail || loginFromGoogle) {
  console.log("User loginss");
}
