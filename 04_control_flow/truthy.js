const userEmail=[]

if(userEmail){
    console.log("Got the user Email");
}else{
    console.log("Don't have user email");
}

//false values Assumed
//false,0,-0, BigInt 0n, "", null, Undefiened, NaN

//True value Assumed
// "0", 'false', " ", [],{}, function(){} emptyfunction,

if(userEmail.length===0){
    console.log("Array is Empty");
}

const obj={}

if(Object.keys(obj).length===0){
    console.log("Object is Empty");
}

/**
 * these condition will return true
 * 
 * false==0
 * false==''
 * 0==''
 * 
 */


//Nullish coalescing Operator(??):null undefined

let val1;
//val=5??10
//val1=null??10
//val1=undefined??15
val1=null??10??20
//console.log(val1);


//Ternary Operator

const iceTeaPrice=100;

iceTeaPrice <=80? console.log("price is <80"):console.log("more than 80");