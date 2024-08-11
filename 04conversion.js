let score="89"


console.log(typeof score)

console.log(typeof (score))

let scoreinnumber=Number(score) // type conversion from string to the Numbers
console.log(typeof(scoreinnumber))

let score1="89abc"




console.log(typeof (score1))

let scoreinnumber1=Number(score1) // type conversion from string to the Numbers
console.log(typeof(scoreinnumber))

console.log(scoreinnumber) // output 89
console.log(scoreinnumber1) // output:NaN=>not a number(full form) (NaN cha type Number ch)

//"33"=>33
// "33abs"=>NaN
//undefined=>NaN
//true=>1 ,false=>0
let isloggedin=1;
let booloeanisloggedin=Boolean(isloggedin)
console.log(booloeanisloggedin)
//1=>true
//2=>false
//""=>false  (empty string use keli inloggedin madhe tar)
//"shiv"=>true

let sum=33
let stringsum=String(sum);
console.log(typeof(stringsum))
//o/p=>string

//**************operations ************ */
let value=3
let negvalue=-value
console.log(negvalue)


let str1="hello"
let str2="Shiv"
let str3=str1+str2
console.log(str1+str2) 
console.log(str3)
/* o/p=> helloShiv
         helloShiv
*/
console.log("1"+2)
console.log(1+ "3")
console.log("1"+2+2)
console.log(1 + 2+ "3")
/* o/p=>
12
13
122
33

*/

let num1,mun2,num3
num1=num2=num3=2+2

let gamecounter=100
gamecounter++;
console.log(gamecounter)
console.log(++gamecounter)


console.log(2>1)
console.log(2!=1)
console.log(2==1)
console.log("2">1)
console.log("03">1)
console.log(null>0) // null gets automatically converted to the 0

//=== strictly checks
console.log("2"==2) //true
//
console.log("2"===2)//false datatype pan check kartay te
console.log(undefined==0);