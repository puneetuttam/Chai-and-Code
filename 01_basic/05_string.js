const name = "Puneet"
const repoCount=50;

//console.log(name+repoCount); don't use this to concatename string 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName=new String("puneet");

// console.log(gameName[0]);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('e'));

const newString  =gameName.substring(1,3);
//console.log(newString);

//console.log(gameName);
const anotherString=gameName.slice(-4,3)
//console.log(anotherString);

const string="   Puneet    ";
console.log(string);
console.log(string.trim());

const url="www.facebook.com";
console.log(url.replace("facebook","Instagram"));


console.log(url.includes("www"));

console.log(gameName.split("e"));