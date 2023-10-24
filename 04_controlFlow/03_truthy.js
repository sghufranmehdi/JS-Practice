const userEmail = "ghufran@google";
if (userEmail) {
  //asssuming string is a true value
  console.log("Got user mail");
} else {
  console.log("DOnt have email");
}
// empty string cnsidered as false
// empty array considered as true

// false, 0, -0, BigInt, "", null, undefined, NaN
// true, "0", "false", " ", [], {}, function(){}

// if (userEmail.length === 0) {
//   console.log("Array empty");
// }

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
  console.log("Obj is Empty");
}

//Nullsih Coalescing Operator ?? :null undefined

let val1;
// val1 = 5 ?? 10;
val1 = null ?? 10; // null safety
val1 = null ?? 10 ?? 10; // pick first value
console.log(val1);

// ternary opt => condition ? true :false
const iceTea = 900;
iceTea > 890 ? console.log("greater") : console.log(lesse);
