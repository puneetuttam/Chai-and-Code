const marvel_heros=["thor","Ironman","Spiderman"]
const dc_heros=["Superman","flash","batman"]

//marvel_heros.push(dc_heros) //this is not good way to merge data
//console.log(marvel_heros); //Array can take array as a data

//all_heros=marvel_heros.concat(dc_heros);

//spread method to join two different array
const all_heros=[...marvel_heros,...dc_heros]
//console.log(all_heros)

const arr1=[1,2,3,[4,5,6],7,[8,9,10]];
const real_arr1=arr1.flat(Infinity)
console.log(real_arr1);

console.log(Array.isArray("Puneet"));
console.log(Array.from("Puneet"));
console.log(Array.from({name:"puneet"}));//interesting: if it will not able to convert input into array then it will give you empty array

const score1=100;
const score2=200;
const score3=300;

console.log(Array.of(score1,score2,score));