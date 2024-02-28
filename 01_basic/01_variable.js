const accountId=1445
let emailid="puneet@google.com"
var pass="123"
accountCity="Jaipur"

// accountId=2 //not allowed
console.log(accountId);

emailid="uttam@google.com"
pass="456"
accountCity="Pune"
let accountState;

/**
 Prefer not to use var=> because of issue in block scope and function scope
 */


console.table([accountId,emailid,pass,accountCity,accountState]);

