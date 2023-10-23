function one() {
  const userName = "Ghufran";

  function two() {
    // two can access one but one cant access two
    const website = "youtube";
    console.log(userName);
  }
  //console.log(website);
  // website is not defined as scope is ended
  two();
}
one();

// closure: inner function can access outer function but outer cant access inner function

if (true) {
  const username2 = "Ghufran";
  if (username2 === "Ghufran") {
    const website2 = " Youtube ";
    console.log(username2 + website2);
  }
  //console.log(website2); // not defined
}
// console.log(username2); // not defined

// +++++++++++++++ interesting (Hoisting) ++++++++++++++++++
addOne(5); // called before declairing

function addOne(num) {
  return num + 1;
}

addTwo(5); // this cause error
const addTwo = function (num) {
  // function as expression
  // function like a variable
  return num + 2;
};
