// Immediately Invoked function Expression (IIFE)

(function chai(){
    console.log("DB Connected" );
})();

//remember to add ; because iife don't know when to quit its context

//Syntax ()()
//we use iffe to prevent pollution from global scope

(()=>{
    console.log("DB connected twice");
})();


((name)=>{
    console.log(`hello ${name}`)
})("Puneet")