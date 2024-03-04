//const tinderUser=new Object(); //Singleton Object

const tinderUser={};
tinderUser.id="123abc"
tinderUser.name="Sam"
tinderUser.isLoggedIn=false;

//console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullname:{
        firstname:"Puneet",
        Lastname:"Uttam"
    }
}
console.log(regularUser.fullname.firstname);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
}

//console.log(obj1,obj2);
//const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3);


const users=[
    {
        id:'1',
        name:"puneet"
    },
    {

    },{

    }
]
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
