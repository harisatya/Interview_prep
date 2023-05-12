// Currying

// It is a technique in functional programming, transformation of the
//function of multiple arguments into several functions of a single argument in sequence

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
