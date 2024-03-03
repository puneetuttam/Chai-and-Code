const score=400;
const balance=new Number(400)

// console.log(balance);
// console.log(balance.toString());

// console.log(balance.toFixed(4));

const otherNumber=123.234342
// console.log(otherNumber.toPrecision(4));


const hundred=1000000
// console.log(hundred.toLocaleString('en-IN'));


//++++++++++++++++Maths++++++++++++++++++

console.log(Math);

console.log(Math.abs(-4));
console.log(Math.round(3.4));
console.log(Math.floor(4.3));
console.log(Math.ceil(4.3));

console.log(Math.min(2242,34,435,345));
console.log(Math.max(2242,34,435,345));

console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.random()*10+1); //0 result will be handled like this=>if you don't want zero

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);//this will give you result between  10 and 20
