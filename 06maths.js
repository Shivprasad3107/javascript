

const score =400;
console.log(score);

const balance =new Number(100);
console.log(balance); //=>[Number: 100]

console.log(balance.toString());
console.log(balance.toString().length);

console.log(balance.toFixed(2)); // 2 precesion value =>100.00

const otherNumber=23.88866
console.log(otherNumber.toPrecision(3))//=>23.9
//123.896=> 124
//1234.8666=>1.23e+3

const hundreds=10000000000
console.log(hundreds.toLocaleString('en-IN')); //=>10,00,00,00,000

//+++++++++++++++++++++MATHS++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));//=>5 deta hai
console.log(Math.ceil(4.1)); //=>5  4 se thoda bhi jada raha to 5
console.log(Math.floor(4.8)); //=>4  minimum he deta hai

console.log(Math.min(2,4,5))// max hota hai

console.log(Math.random()); // output hamesah 0 aur 1 ke bich ,e hi rahega
const min=100
const max=200 
console.log(Math.floor(Math.random()*(max-min)+ min))//hamsha 100 se  200 tak me value dega
