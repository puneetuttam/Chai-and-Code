const name="puneet";
const repoCount=50;

console.log(name+repoCount+"values"); //don't use this for concatenation

console.log(`Hello my name is ${name} and my repo count is $(repoCount)`) //instead use this

//another way to declare string

const gameName=String("Puneet");

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.

toLocaleUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

const newString =gameName.substring(0,4);

console.log(newString);

//in Slice we can give negative number as well

const anotherString=gameName.slice(0,4);
console.log(anotherString);
console.log(gameName.slice(-6,2));

const trimString="    hello buddy    ";
console.log(trimString.trim());

const url="https://puneet%20uttam.com/"
console.log(url.replace("%20","-"));

console.log(url.includes("puneet"));
let testsplit="a b c d e ff   df"
console.log(testsplit.split(' '));