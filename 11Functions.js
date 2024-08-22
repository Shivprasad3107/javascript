function saymyname(){
  console.log("s")
  console.log("h")
  console.log("i")
  console.log("v")
  
}
//saymyname()

// function addtwo(number1,number2){
// console.log(number1+number2);

// }
// addtwo(4,4)


// function loginuserMessage(username){
//     if(username===undefined){
//       console.log("Please enter a username");
      
//     }
//     return `${username} just logged in`
// }

//empty string ("")is considered as false 
//undefined is also considered as false value 
function loginuserMessage(username){
    if(!username){
      console.log("Please enter a username");
      
    }
    return `${username} just logged in`
}

// console.log(loginuserMessage) //=>[Function: loginuserMessage]
//console.log(loginuserMessage())//=>undefined just logged in
// console.log(loginuserMessage("Shivprasad"))//=> Shivprasad just logged in

// function calculateCartPrice(...num1){

// return num1
// }

// console.log(calculateCartPrice(3,4,5))//=> [ 3, 4, 5 ] -array return karto ...=>rest operator

// function calculateCartPrice1(val1,val2,...num1){

//   return num1
//   }
  
//   console.log(calculateCartPrice1(3,4,5,6,7)) //=>[ 5, 6, 7 ]=>here val1 gets val1=3 and val2=4 and rest is stored in num1
 const user={

    username:"hitesh",
    price:199
}

function handleObject(anyobject){
   console.log(`Username is ${anyobject.username } and the price is ${anyobject.price}`);
}

  // handleObject(user)

handleObject({
 
    username:"SAmmy",
    price:399
})
const mynewarray=[200,300,400];
function returnsecondvalue(getarray){
return getarray

}
 console.log(returnsecondvalue(mynewarray))
 console.log(returnsecondvalue([1,2,3,4,5,6]))