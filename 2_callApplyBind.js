// Call Apply Bind mehods
// Bind is also called explict binding.

// Call() Method: The call method is basically used to invoke the function
// with different this object. In JavaScript, this refers to an object.
// It depends on how we are calling a particular function. In the global scope,
// this refers to the global object window. Inside function also this refers to the global object window.

// In strict mode, when we use any function then this refers to undefined.
// In functions like call, this could refer to a different object.
// With the help of the call method, we can invoke a particular function with different objects.

// using call method we can do function borrowing

const user = {
  name: "Hari",
  hobby: "cricket",
};
const printUserObj = function (age, place) {
  console.log(this.name, this.hobby + " from " + place, " of Age:" + age);
};

//user.printUserObj();
const user2 = {
  name: "Satya",
  hobby: "Chess",
};
// Always this will be refered to first parameter we pass
printUserObj.call(user2, 24, "Hyd");
printUserObj.call(user, 25, "Bangore");
//  only diffrence between call and apply is
//  in call we pass other argumennts in series while in apply we pass as array
printUserObj.apply(user, [24, "Hyd"]);

//Bind Method
//this method is also simiar to the call method but insted of calling the function it creates a new copy of
//object and returns a function which can be invoked later
const printUser = printUserObj.bind(user, 25, "Karnataka");
console.log(printUser);
