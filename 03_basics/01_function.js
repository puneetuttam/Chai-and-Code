// console.log("P");
// console.log("u");
// console.log("n");
// console.log("e");
// console.log("e");
// console.log("t");

//if you want to print this again and again then function will be easy to perform this task

function SayMyName(){
    console.log("P");
    console.log("u");
    console.log("n");
    console.log("e");
    console.log("e");
    console.log("t");
}

//SayMyName();

function add(num1,num2){
    let num=num1+num2;
    //console.log(num); //this is print under add function. this is not what we are returning. to return always use return keyword
    return num
}

const result =add(2,34);
//console.log(result);


function loginUserMessage(Username = "default"){
    if(!Username){
        console.log("Please enter a username");
        return;
    }
    return `${Username}, just logged In`
}

//console.log(loginUserMessage("Puneet"));


function calculateCartPrice(...num1){ //rest operator or spread opertor. Depending upon usecase we call it rest and spread.
    return num1;
}
//console.log(calculateCartPrice(22,34,234,2));

const user={
    username:"Puneet",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user);
//you can also pass object itself like thisk
handleObject({  
    username:"Uttam",
    price:233
})


const myNewArry=[200,23,234,34]
function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArry));
console.log(returnSecondValue([32,234,234,23,34,2344]));
