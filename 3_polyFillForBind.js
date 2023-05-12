// polyfill is short of browser call back for bind function
// Polyfill is a way to modify or add new functions. It is basically a piece of code to add/modify
// the new functions. It is used to provide modern functionality to web browsers.

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
