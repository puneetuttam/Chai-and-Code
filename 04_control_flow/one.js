const isUserLoggedIn=false;
if(isUserLoggedIn){

}
// < ,> ,<= ,>=, ==, !=,===

const temperature=41;
if(temperature<50){
    console.log("Less than 50");
}else{
    console.log("temprature is greater than 50");   
}

const score =200

if(score>100){
    const power ="fly"
    console.log(`User Power: ${power}`);
}

//console.log(`User poer:${power}`);
const balance =1000;
//if(balance >500) console.log("test"),console.log("test2"); //do not code like this

// if(balance<500){
//     console.log("less than");
// }else if(balance <750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 900");
// }else{
//     console.log("greater than 900");
// }

const userLoggedIn=true;
const debitCard=true;
const loggedInfromGoogle=false
const loggedInFromEmail=true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
}

if(loggedInFromEmail|| loggedInfromGoogle){
    console.log("User Logged In");
}