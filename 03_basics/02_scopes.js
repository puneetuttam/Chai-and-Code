 let a=10
// const b=23
 var c=2332344

if(true){
    let a=10
    const b=23
    var c=233
    //console.log("Innter", a);
}

//console.log(a);
//console.log(b);
//console.log(a);

function one(){
    const userName="Sam"
    function two(){
        const website="Youtube"
        //console.log(userName);
    }
    //console.log(website);

    two();
}
one();

if(true){
    const username= "Hitesh"
    if(username == "Hitesh"){
        const website="youtube"
        //console.log(username+website);
    }
    //console.log(website);
}
//console.log(userName);

//++++++++++++++++++++++ Inserting ++++++++++++++++

function addone(num){
    return num+1;
}
console.log(addone(4));

//addTwo(123);
const addTwo=function(num){
    return num+2;
}


