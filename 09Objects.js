//singleton =>constructor se objects nbanega to singleton banega
//literals se kabhi bhi singleton nhi banta
// Object literals
const mysym=Symbol("key1")
const Jsuser={
    name:"Shiv",
    "full name":"Shivprasad Satish Chaudhari",
    age:23,
  //  mysym:"mykey1",
    [mysym]:"mykey1",// aata symbol sarkha treat hoil he
    location:"Sambhajinager",
    email:"Shiv@gmail.com",
   isloggedin:false,


}

// console.log(Jsuser.email);
console.log(Jsuser["email"]);
//console.log(Jsuser.full name);//error
console.log(Jsuser["full name"]); // is se error nhiaayega

console.log(Jsuser.mysym); // ye abhi symbol ki tarah traet nhi ho raha hai
console.log(typeof Jsuser.mysym); // string ki tara ho raha hai
console.log(Jsuser[mysym])
console.log(Jsuser)

Jsuser.email="abcd@gmail.com";
console.log(Jsuser)
//Object.freeze(Jsuser) // freeze hogaya ab changes show nahi karega
Jsuser.email="123@gmail.com";
console.log(Jsuser) // email madhe changes nahi zale 

Jsuser.greeting=function(){
    console.log(" hello Jsuser");
}
Jsuser.greeting1=function(){
    console.log(` hello Jsuser,${this.name}`);
}

console.log(Jsuser.greeting())
console.log(Jsuser.greeting1())