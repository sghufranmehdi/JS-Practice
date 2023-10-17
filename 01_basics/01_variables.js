const accountId = 144553;
let accountEmail = "ghufran@google.com";
var accountPassword = "12345";
accountCity = "Lahore";
let accountState;

// accountId = 2 //not changed
accountEmail = "mehdi@google.com";
accountPassword = "54321";
accountCity = "Karachi";

/*
use const and let
prefer not to use var
because of issue in block scope and functional scope

*/

console.log(accountId);

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);
