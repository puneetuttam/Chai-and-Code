const user={
    username:"Puneet",
    price: 1000,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to websites`);;
    }
}

// user.welcomeMessage();
// user.username="Sam"
// user.welcomeMessage();

console.log(this);// if you are in node env. then it will give empty object and in browser it will give undefine

// function chai(){
//     //console.log(this);
//     let username="Puneet"
//     console.log(this.username);// this will give undefine
// }
//chai();

const chai=()=>{
    let uersname="Puneet"
    console.log(this);
}


// basic syntax ()=>{} of arrow function

// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }

//above one is normal arrow function and below one is implicit arrow function

//const addTwo = (num1,num2) => (num1 + num2)
// then how we will return object in arrow function as we see with {} we need to add return keyword

const addTwo=(num1,num2)=>({Username:"Puneet"})
console.log(addTwo(3,4));

const myArray=[2,23,34,4]
