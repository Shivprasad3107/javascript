// const useremail="hoteah@gmail.com"

// if(useremail){
//     console.log("Got the user");
// }
// else{
//     console.log("Dont have user email");
// }

//falsy value=> whuch values are treated as false
//false ,0,-0,BigInt 0n,"",null,undefined,NaN
// truthy values=> "0",'false', " ",[],{},funstion(){}

// if(useremail.length===0){
//     console.log("ARRAY is empty")
// }

// const emptyobj={}
// if(Object.keys(emptyobj).length===0){
//     console.log("Object is empty")
// }

//Object.keys(emptyobj)=>gives us the array in written

//false==0 =>true
//false=='' =>true
//0=='' =>true

//NUllish coalscing operator (??):null undefined

let val1;
val1=5??10

console.log(val1)

val1=null?? 21
console.log(val1)

val2=undefined??10;
console.log(val2)

//terner operator
//condition?true:false
const iceTeaPrice=100;
iceTeaPrice>=80 ? console.log("more than 80"):console.log("less than 80");