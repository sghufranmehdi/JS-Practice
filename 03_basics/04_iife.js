// Immediately Invoked Function Expressions (IIFE)
// jaisy e function lkha execute krwana hai
// jaisy e strt ho file db connection hojay

function tea() {
  console.log("DB Connected");
}
tea();

// To avoiding global scope polution

(function tea() {
  console.log("DB Connected through IIFE");
})(); // This function is iife now (named)

(() => {
  console.log(`DB Connected through IIFE with arrow functions`);
})(); // This function is iife now (unnamed)

// iife with arrow parameterized
((name) => {
  console.log(`DB Connected through IIFE with arrow functions done by ${name}`);
})("Ghufran"); // This function is iife now
