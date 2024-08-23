const user={

    username:"Shiv",
    price:9999,

    welcomemessage: function(){
      console.log(`${this.username},Welcome to the Website`)
      console.log(this)
    }
}
// user.welcomemessage()

// user.username="Sammy"
// user.welcomemessage()
//  console.log(this); //=>{} =>empty object

//  function chai (){
//     let username="Shiv"
// console.log(this);

//  }



 //ARROW FUNCTIONS
//  const chai= ()=>{
//     let username="Shiv"
// //console.log(this.username);//=>undefined
// console.log(this); // empty scope deil {}

//  }
//  chai()

// const addtwo=(num1,num2)=>{
// return num1+num2;
// }

// console.log(addtwo(3,4));

// IMplicit return 
const addthree=(num1,num2,num3)=>(num1+num2+num3)

console.log(addthree(1,2,3))
//if write inside the curly bracket then it need to have return but with () we dont require the return 
// //const returname=()=>(username:"Hello")=>error deta as the object for need to be written in the {}
// const returname=()=>({username:"Hello"})
// console.log(returname())