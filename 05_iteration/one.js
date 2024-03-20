for (let i  = 0; i  <= 10; i ++) {
    const element = i;
    console.log(element);
    if(element == 5){
        console.log("5 is best number");
    }
}

//console.log(element);
for (let i = 0; i < 10; i++) {
    console.log(`outer loop value: ${i}`);
    for (let j = 0; j < 10; j++) {
        console.log(`Inner loop value: ${j}`);       
    }
}

let myArray=["flash","batman","superman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}


//break and continue

for (let index = 0; index < 20; index++) {
    if(index==5){
        console.log("5 detected");
        break;
    }
    console.log(index);

    
}
for (let index = 0; index < 20; index++) {
    if(index==5){
        console.log("5 detected");
        continue;
    }
    console.log(index);

    
}
