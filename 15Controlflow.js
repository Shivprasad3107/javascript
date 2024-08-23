const isuserloggedin=true;

if(isuserloggedin){

    console.log("Yes user is logged in ")

}

const score=200;
if(score>100){
   const power="fly"
    console.log(`user power:${power}`)
}


const balance=2000
if(balance>500) console.log("test");

if(balance<500){
 console.log("less than")
}
else if(balance<750){
    console.log("less than 750")
}
else{

    console.log("less than 1200")
}

const userloggedin=true
const debitcard=true
const loggedinfromgoogle=false
const loggedinfromemail=true


if(userloggedin && debitcard){
    console.log("allow to buy coursse")
}
if(loggedinfromemail ||loggedinfromgoogle){
    console.log("user logged in")
}

