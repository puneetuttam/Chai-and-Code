//Primitive data types
// 7 types: String, number, boolean, null, undefined, symbol, bigint

//is js is dynamic type language? no 
const score=100;
const scoreValue=100.2

const isLoggedIn=false
const outsideTemp=null;
let userEmail;//undefined

const id=Symbol('123');
const anotherid=Symbol('123');

console.log(id==anotherid)

//Non-Primitive or reference
//Aray, object, functions

const bigNumber =123123131313n;

console.log(typeof bigNumber);

const heros=["shaktiman", "naagraj", "doga"];

let obj={
    name: "puneet",
    age: 22,
}

const myfunction =function (){
    console.log("hello World");
}

console.log(typeof myfunction);
//++++++++++++++++++++++++++++++++++++++

//primitive value will go in stack
//no primitive value will go in heap

let myytname="puneetdotcom";
let anothername=myytname;
anothername="uttamdotcom"


console.log(myytname);
console.log(anothername);


let userOne={
    email: "user@google.com",
    upi: "user1@upi"
}

let usertwo=userOne;

usertwo.email="Uttam@outlook.com";
console.log(userOne);
console.log(usertwo);

console.log(math.random());
console.log(math.random()*10);