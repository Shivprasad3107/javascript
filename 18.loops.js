//for of 
//["","", ""]
//[{},{},{}]

// const arr1=[1,2,3,4,5,45]

// for (const num of arr1) {
//       console.log(num)  ;  
// }

// const greting=["hello","good moRINING"," GOOD afetrnoon"]
// for (const greet of greting) {
//     console.log(greet)
// }

// const  greetings="hello";
// for (const greet of greetings) {
//     console.log(greet)
// }

//Maps
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")
//console.log(map);



// for (const key of map) {
//     console.log(key)
    
// }
/*
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
 */
// for (const [key,value] of map) {
//     console.log(key,':-' ,value)
    
// }
/*
IN :- India
USA :- United States of America
Fr :- France
 */
// for (const [key] of map) {
//     console.log(key)   
// }
/*
IN
USA
Fr
 */

const myObject={

    'game1':'NFS',
    'game2':'Spiderman'

}

// for(const[key,value] of myObject ){
//     console.log(key,':-',value)
// } //object can't be ietrated like this

const myObject1={
 js:'javascript',
 cpp:'c++',
 rb:'ruby',
 swift:'swift by apple'
}

//forin

// for (const key in myObject1) {
//     console.log(key);
//   }
/*
js
cpp
rb
swift

*/

// for (const key in myObject1) {
//   console.log(`${key} shortcut is for ${myObject1[key]}`);
// }
/*
js shortcut is for javascript
cpp shortcut is for c++
rb shortcut is for ruby
swift shortcut is for swift by apple
*/

// const programming=["js","rb","py","java","cpp"]

// for (const key in programming) {
//   console.log(`the value at ${key}  position is ${programming[key]}`);
// }


//foreach loop
console.log("ForEach LOOP------------>")

const coding=["js","rb","py","java","cpp"]

// coding.forEach( function (item) {   
//     console.log(item)
// })

// coding.forEach((item)=> {
//  console.log(item)

// })

console.log("ANOTHER WAY TO WRITE THE FOR EACH LOOP")
function printMe(item){

    console.log(item);
}

//coding.forEach(printMe)

// console.log("ANOTHER WAY TO WRITE THE FOR EACH LOOP")
coding.forEach((item,index,arr)=>{
   console.log(item,index,arr)
})

const mycoding=[
{
    lannguage:"JAVA",
    filename:"java"
},

{
    lannguage:"c++",
    filename:"cpp"
},


{
    lannguage:"python",
    filename:"py"
}
]

// // object me se specific prporty ki value nikal li 
mycoding.forEach((item )=>{
   console.log(item.lannguage);
})