let myDate=new Date();

console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString);
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//let myCreatedDate =new Date(2023,0,23);
//let myCreatedDate=new Date(2023,0,23,5,5);
let myCreatedDate=new Date("01-14-2023");
console.log(myCreatedDate.toDateString());

// you can do variation with dates,just google it
let myTimeStamp=Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate=new Date();
console.log(newDate.getMonth()+1);
console.log(newDate.getDate());

newDate.toLocaleString('default',{
    weekday:"long"
})