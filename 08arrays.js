// const myarray=[1,5,5,"hii",true]

// myarray.push("hello")
// myarray.push("&&&")
// console.log(myarray);
// myarray.pop();

// console.log(myarray);
// myarray.unshift(10)
// console.log(myarray);
// myarray.shift();
// console.log(myarray);

// console.log(myarray.includes(1));
// console.log(myarray.indexOf(1));


// const newarr=myarray.join()
// console.log(myarray);

// console.log(newarr)


// console.log(typeof newarr)
// const numbers=[0,1,2,3,4,5]

// console.log("A",numbers)


// const myn1=numbers.slice(1,3)
// console.log(myn1)// isme 1 se lekar 2 index tak print hoga
// console.log("B",numbers)


// const myn2=numbers.splice(1,3) 
// console.log(myn2) // isme 1 se lekar 3 index tak print hoga
// console.log("B",numbers)//here the original array gets modified


const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

console.log(marvel_heros);


const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

//const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));