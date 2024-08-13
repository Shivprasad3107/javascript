//  const myarray=[1,5,5,"hii",true] 

// myarray.push("hello")
// myarray.push("&&&")  
// console.log(myarray);
// myarray.pop();

//  console.log(myarray);
//  myarray.unshift(10) // adds element to the begining
// console.log(myarray);
// myarray.shift();  // remove s first element
// console.log(myarray);

// console.log(myarray.includes(1));
// console.log(myarray.indexOf(1));


// const newarr=myarray.join() 
// console.log(myarray);

// console.log(newarr)


// console.log(typeof newarr)
//  const numbers=[0,1,2,3,4,5]

//  console.log("A",numbers)


// const myn1=numbers.slice(1,3)
// console.log(myn1)// isme 1 se lekar 2 index tak print hoga=> [ 1, 2 ]
// console.log("B",numbers)//original array does not get modified=>B [ 0, 1, 2, 3, 4, 5 ]


// const myn2=numbers.splice(1,4) 
// console.log(myn2) // isme 1 se lekar 3 index tak print hoga =>[ 1, 2, 3, 4 ]
// console.log("B",numbers)//here the original array gets modified=> B[ 0, 5 ]


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros[3]);//=>[ 'superman', 'flash', 'batman' ]
// console.log(marvel_heros[3][1]);//=>flash

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); //=> [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const all_new_heros = [...marvel_heros, ...dc_heros]//=>spread operator
// // syntax hi hai waisa"...marvel_heros"  tin dot array cha nav kiti pan array karu shakto spread
// console.log(all_new_heros); //=> [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray("Hitesh"))//=>false
// console.log(Array.from("Shivprasad"))//=>converts it into array => see output
 
// console.log(Array.from({name: "hitesh"})) //=>gives empty array []// interesting batana padega ki keys ka array banau ya values ka array banau

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); 
