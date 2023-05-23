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
