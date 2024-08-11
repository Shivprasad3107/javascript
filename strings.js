const name="Shiv";
const repoCount=50
console.log(`hello my name is ${name} and my repo count is ${repoCount}` );

const gameName=new String('Shivprasad');
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4)); 
console.log(gameName.indexOf('p'));

const newString =gameName.substring(0,5);
console.log(newString);

const anotherString =gameName.slice(-10,8);
console.log(anotherString);

const newStringone="   Shiv  ";
console.log(newStringone);
//o/p me spaces bhi add karta hai:   Shiv
console.log(newStringone.trim()); // spaces remove karta hai
console.log(newStringone.trimStart());//start se trim hota hai
console.log(newStringone.trimEnd());//End se trim hota hai

const url="https://www.youtube.com/ watch?v=fozwNnFunlo&t=53s"
console.log(url.replace(' ','*'));
const url1="https://www.youtube.com/ watch?v=fozwNnFunlo&t=53s"
console.log(url.replace('.com','xyz'));

console.log(url.includes('youtube')); // return true if the string has youtube
const gameN=new String('Shivprasad chaudhari ABad');
console.log(gameN.split(' ')) // o/p:[ 'Shivprasad', 'chaudhari', 'ABad' ] spilts on the basis of the space
const gameN1=new String('Shiv-prasad-chaudh-ariABad');
console.log(gameN1.split('-')) // o/p:[ 'Shivprasad', 'chaudhari', 'ABad' ] spilts on the basis of the -



