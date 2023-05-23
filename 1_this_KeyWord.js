//***** This Key word in Javascript*****

//In JavaScript, the `this` keyword refers to the object that is currently executing or 
//invoking a function. It is a special variable that is automatically defined in the scope 
//of every function.

//The value of `this` depends on how the function is called. Here are the common scenarios:

//1. Global scope: In the global scope (outside any function), `this` refers to the global object,
//which is `window` in a browser environment or `global` in Node.js.

//2. Object method: When a function is called as a method of an object, `this` 
//refers to the object itself. The value of `this` is determined at runtime based on 
//how the method is invoked.

//Example
const obj = {
  name: 'John',
  sayHello: function() {
    console.log('Hello, ' + this.name);
  }
};

obj.sayHello(); // Output: Hello, John

//3. Constructor function: When a function is used as a constructor with the `new` keyword,
//`this` refers to the newly created object.

//Example
function Person(name) {
  this.name = name;
}

const john = new Person('John');
console.log(john.name); // Output: John


//4. Event handler: When a function is used as an event handler, `this` refers to the element that
//triggered the event.

//Example
document.getElementById('myButton').addEventListener('click', function() {
  console.log('Button clicked:', this);
});


//5. Explicit binding: You can explicitly bind the value of `this` using methods like `call()`, 
//`apply()`, or `bind()`.

//Example
function sayName() {
  console.log('My name is ' + this.name);
}

const person = { name: 'John' };

sayName.call(person); // Output: My name is John


//It's important to note that the value of `this` is not lexically determined but rather dynamically
//determined at runtime, based on how the function is invoked.

