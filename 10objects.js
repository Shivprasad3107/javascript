//const tinder= new Object();// singletone object
//console.log(tinder)=>empty object deil {}
const tinder={}// literals object=>non singleton object
tinder.id="1234"
tinder.name="sammy"
tinder.isloggenin=false;
//console.log(tinder);

const regularuser={

    email:"some@gmail.com",
    fullname:{

        userfullname:{
            firstname:"shiv",
            lastname:"chaudhary"
        }
    }
}
 //console.log(regularuser);
//console.log(regularuser.fullname.userfullname.firstname);
const obj1={
    1:"a",
    2:"b"
}

const obj2={
    3:"c",
    4:"d"
}
//const obj3={obj1,obj2};
//console.log(obj3)
//const obj3=Object.assign({},obj1,obj2) //=>{ } is optional
//const obj3=Object.assign(obj1,obj2)
//console.log(obj3)
//const obj3={...obj1,...obj2} // spread operator

//console.log(obj3)

//console.log(tinder)
//console.log(Object.keys(tinder));// yaha par hum objects  ke keys ka array return ho raha hai
//console.log(Object.values(tinder));
//console.log(Object.entries(tinder));//separates the individual key value pair in individual array
//console.log(tinder.hasOwnProperty('isloggenin')) // object me ye type ki property haikya nhi ye check kr raha hai ye


//destructuring of the objects
const course={

    coursename:" js in hindi",
    price:"999",
    courseinstructor:"hitesh"
}

//course.courseinstructor  asa khop vela lihayla lagtay tya mule tya ja gi aapan khalcha syntax use karu shakto

// const{courseinstructor}=course

// console.log(courseinstructor) // output:hitesh


const{courseinstructor:ins}=course

console.log(ins) // output:hitesh fakt ins ni pan instructor cha nav call karu shkto

