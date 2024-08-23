// let a=10;
// const b=20
// var c=30

// //{}=>this the scope kisi function ke sath aata ya if else ke saath

// console.log(a);
// console.log(b);
// console.log(c);
// function one (){

//     const username="Shiv"
//   function two(){
//     const website="Youtube"
//     console.log(username);
//   }
// //console.log(website)
// two()

// }
// one()

if(true){
    const username="SHIV"
    if(username==="SHIV"){
        const website=" youtube"
        console.log(username  +  website);
    }
    //console.log(website);
}
//console.log(username);

//**************interesting*************** */
console.log(addone(5))

function addone(num){
 return num+1;
}

// //addtwo(5)=>this will give us the error as we storing it in the variable
// const addtwo =function(num){
//     return num+2
// }

// addtwo(5)