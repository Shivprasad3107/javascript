//Primitive =>they are call by value
//7 types:String Number BOolean Symbol,null undefined,BigInt


//js is the dynamically typed language


const score =Symbol('123')
console.log(score)
const score1= Symbol('123')
console.log(score1)


console.log(score===score1)
//Reference type ( Non Primitive)
//Array,Objects,Functions


const heros=["shakti"," ram", " doga"]

console.log(heros)

console.log(heros[0])

let obj={
name:"Shiv",
age:24

}

console.log(obj)


const func=function(){

    console.log(" hello i am in Function")
}

console.log(typeof func)

console.log( func)


/*********************************************** */
//Stack memeory(Primitive) ,Heap memory(Non-primitive)
//stack me se hame ek copy milti hai
// heap me hame ek refernece milta hai

const name=new String ('Shivprasad')
const repocount=5
console.log(`hello my name is ${name} ane my repocount is ${repocount}`
    )

    console.log(name.toUpperCase())
    console.log(name.charAt(3))
    console.log(name.indexOf('S'))

    const newString=name.substring(0,4);
    console.log(newString);

    const anotherString=name.slice(-8,4)
    console.log(anotherString)

    const newStringone="     shivprasad     "

    console.log(newStringone)
    console.log(newStringone.trim())


    const score2=400

    const balance= new Number(100)
    console.log(balance);

    console.log(balance.toString().length);

    console.log(balance.toFixed(2));
    console.log(balance.toFixed(1));
  const number=23.9865;
    console.log(number.toPrecision(2));
    const number1=2223.9865;

    console.log(number1.toPrecision(4));
    console.log(number1.toPrecision(3));
    console.log(number1.toPrecision(5));

    const  hundreds=10000000000;
    console.log(hundreds.toLocaleString());
    console.log(hundreds.toLocaleString('en-IN'));


    