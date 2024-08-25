const mynumbers=[1,2,3,4,5,6,7,8,9,10]

const newnumbers=mynumbers.map((num)=> num + 10)
//console.log(newnumbers);

mynumbers.forEach((element, index, array) => {
    array[index] = element + 10;
  });

console.log(mynumbers)


//Chaining

// const newnums=mynumbers.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=140)
// console.log(newnums)