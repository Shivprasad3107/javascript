 const coding=["js","rb","py","java","cpp"]

// const values=coding.forEach((item)=>{
//     console.log(item)
//     return item
// })
//console.log(values)// undefined return kiya usne for each koi bhi value return nahi karta


const nums=[1,2,3,4,5,6,7,8,9,10]

//nums.filter((num)=>num>4)  // ye values return karta hai

// const newnums=nums.filter((num)=>num>4) 

// const newnums=nums.filter((num)=>{
//     return num>4
// }
// ) 
// agar curly brackets use karne ho to return likhana padega nhi to {} ye return karega bas
//console.log(newnums)

const numsf=[]

nums.forEach((num)=>{

    if(num>4){
    numsf.push(num)
    }
})

//console.log(numsf)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')
  let userBooks1=books.filter((bk)=>{ 
    return bk.publish>=1995  && bk.genre=="History"})
  //console.log(userBooks);
console.log(userBooks1);