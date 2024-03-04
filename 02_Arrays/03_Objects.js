 //Singleton
 //object.create

 //object literals
 
 const mySym=Symbol("Key1");
 const JsUser={
    name:"Puneet",
    age:19,
    [mySym]:"key2",
    location:"Delhi",
    email:"puneet@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

 }

//  console.log(JsUser.email);
//  console.log(JsUser["email"]);
//  console.log(JsUser[mySym]);
 
 JsUser.email="puneet@chatgpt.com"
 //Object.freeze(JsUser);
 JsUser.email="puneet@yahoo.com"
//  console.log(JsUser.email);

//  console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello JS User");
}
console.log(JsUser.greeting());


JsUser.greetingTwo = function(){
    console.log(`hello JS User ${this.name}`);
}
console.log(JsUser.greetingTwo());