//for of loop

const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num);
}

const greeting="Hello World!"
for (const i of greeting) {
    console.log(`Each char is ${i}`);   
}

const map=new Map()
map.set('IN','India')
map.set('USA','United State of America')
map.set('FR','France')
for (const [key,value] of map) {
    console.log(key,':',value);
}

const obj={
    'Game1':'NFS',
    'Game2':'Spiderman'
}

//you can not iterate object like this
// for (const [key,value] of obj) {
//     console.log(key,':',value);    
// }