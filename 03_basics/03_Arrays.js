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

const chai=function(){
    let uersname="Puneet"
    console.log(this.username);
}
