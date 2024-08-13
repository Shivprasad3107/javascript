//1)

var x=7;

function getName(){
    console.log("JAVASCRIPT");
}

getName();
console.log(x);

/*
o/p : JAVASCRIPT
      7
*/

// 2)hoisting in javaScript : phenomenon in which we can access the variables and 
//functions even before we have intialies it without any error
getname1();
console.log(z);

var z=10;
function getname1(){
    console.log("JS");
}
/*
o/p : 
JS
undefined
*/
//3)
console.log(y);

/*
o/p : 
ReferenceError: y is not defined
*/







