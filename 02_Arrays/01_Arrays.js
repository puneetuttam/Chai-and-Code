const myArr=[0,1,2,3,4,"Puneet"];
const myHerors=["Shaktimaan","nagraj"];

const myArr2=new Array(1,2,3,4)
//console.log(myArr2[3]);


// myArr.push(5);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(98)
// myArr.shift();

// console.log(myArr.includes(4));
// console.log(myArr.indexOf(3));

const newArr=myArr.join();

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//++++++++++ slice vs splice +++++++++++

 console.log("original",myArr);

 console.log("Slice ",myArr.slice(1,3));
 console.log("Effect of slice in myArr",myArr);

 
 console.log("Slice ",myArr.splice(1,3));
 console.log("Effect of slice in myArr",myArr);