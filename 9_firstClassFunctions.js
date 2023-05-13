//function statement vs Expression vs declartion?
// Youtube: https://www.youtube.com/watch?v=SHINoHxvTso&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=17&ab_channel=AkshaySaini

//Function statement/decleration
function a(){
    console.log("Print a")
}
//Function Expression
//when function is assigned me with a variable 
// diff b/w function statement and function expression is Hositing
var b = function(){
    console.log("calling b")
}

//Function Declarition --> This are another name for Function statement

//Anonymous Fuction
// according to ES6 function should be given with a name

// function(){

// }

//Named Function Expression
// instead of using anononymous function we use named function
var b = function xyx(){
    console.log("calling b")
}

//Difference between parameter and Arguments

var b = function(params1, params2){
    console.log("calling b")
}

b("arg1","arg2") 
//First class functions
// the ability to use function as aruments and can accept as paramenter and can retun as function
// First class citizens

var b = function(params1 ){
    return function(){
        params1
    }
}

b(function(){
    "Hello First class functiom"
}) 

//Arrow Functions
// An arrow function expression is a compact alternative to a traditional function expression, with some semantic differences and deliberate limitations in usage:

// Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods.
// Arrow functions cannot be used as constructors. Calling them with new throws a TypeError. They also don't have access to the new.target keyword.
// Arrow functions cannot use yield within their body and cannot be created as generator functions.s
var b = () => {
  console.log("calling b");
};