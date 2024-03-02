/*

Primitive data type
7 type: String,Number, Boolean, null, undefine, Symbol, BigInt


Non-Primitive or Reference data type
Array, Objects, Function

   
*/

const score=100;
const scoreValue=100.3;

const isLoggedIn=false;
const outsideTemp=null;

let userEmail;

const id=Symbol('123');
const anotherID=Symbol('123')
console.log((id===anotherID));


const veryBigNum=123123123131n;

const heros=["Shaktiman","nagraj","doga"];

let myObj={
    name:"Puneet",
    age:22
}

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof veryBigNum);