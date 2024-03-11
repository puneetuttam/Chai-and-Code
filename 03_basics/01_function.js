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

console.log(loginUserMessage("Puneet"));
