// polyfill is short of browser call back for bind function
// In JavaScript, a polyfill is a piece of code (usually a JavaScript function or object) 
// that provides the functionality of a feature or API that is not natively supported by a web 
// browser or an older version of a browser. It allows developers to use modern JavaScript features 
// or APIs while ensuring backward compatibility with older environments.

const user = {
  name: "Hari",
  place: "Hyderabad",
};

const printUser = function (age, hobby) {
  console.log(this.name + " " + this.place + " " + age + " " + hobby);
};

const printUserBind = printUser.bind(user);
printUserBind(27, "Cricket");

// To make function accessible to all methods we should keep in Function.prototype method.
Function.prototype.myBind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};
const printUserBind2 = printUser.myBind(user, 24, "chess");
printUserBind2();

// *** PolyFill for Map Method
Array.prototype.mymap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i]));
  }
  return temp;
};
const arr = [2, 3, 4, 5];
const result = arr.mymap((num) => {
  return num * 5;
});
console.log("result", result);

// **** ployFill for filter Method

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(cb(this[i]));
    }
  }
  return temp;
};
const arr1 = [2, 3, 4, 5];
console.log("arr1", arr1);
const data = arr1.filter((num) => {
  return num > 2;
});
console.log("resultnumber", data);

// **** ployFill for Reduce Method
//Wrong Answer need to check
Array.prototype.myReducer = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(this[i], i, this) : this[i];
  }
  return accumulator;
};
const arr3 = [2, 3, 4, 5];
const sumOfArray = arr3.myReducer((accu, curr, index, arr) => {
  console.log(accu, curr );
  return (accu += curr);
}, 0);
console.log("polyfil", sumOfArray);
  
