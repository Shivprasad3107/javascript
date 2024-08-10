console.log(x);

console.log(getName);
var x=7;
function getName(){
    console.log("JS");
}

/*

o/p:
undefined
[Function: getName] => it is not giving undefined for the function


*/


//console.log(y);//=>ReferenceError: y is not defined
console.log(getname2);
getname2();
var getname2=()=>{
    console.log("Namaste js");
}
// o/p:TypeError: getname2 is not a function  