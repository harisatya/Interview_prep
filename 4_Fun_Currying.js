// Currying

//Function currying in JavaScript is a technique that involves transforming a function 
//with multiple arguments into a sequence of functions, each taking only one argument. 
//This allows you to create new functions by partially applying the original function with 
//some of its arguments.

// two ways we can curry our functions  with
// 1)--> Bind Method
// 2)--> Function clousers

//Using Bind

const multiply = function (a, b) {
  return a * b;
};
// const multiply = function(b){
//     let a = 2;
//     return(a*b);
// }

const muliplyByTwo = multiply.bind(this, 2);
muliplyByTwo(5);

const muliplyByThree = multiply.bind(this, 3);
muliplyByThree(7);

// Using clousers

const add = function (a) {
  //   console.log(a, "a");
  return function (b) {
    console.log(a + b);
  };
};

const addByTwo = add(2);
console.log(addByTwo(5));
