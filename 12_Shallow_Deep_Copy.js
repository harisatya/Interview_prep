// "Shallow copy and Deep copy in JavaScript 🔥"

// "Shallow copy and Deep copy" are important concepts in javascript and very common question
//  asked in any frontend or javascript interview .

// In JavaScript, objects and arrays are reference types, meaning that when you create a new variable
// and assign an object or array to it, the new variable actually holds a reference to the original object
// or array in memory, rather than a copy of its values. When you make changes to the original object
// or array, these changes will be reflected in all variables that hold a reference to it.

// To create a copy of an object or array, there are two common approaches: shallow copy and deep copy.

// Shallow copy:
// A shallow copy creates a new object or array, but the values inside the new object or
// array are still references to the same values as the original object or array. In other words,
// if the original object or array contains other objects or arrays,
// those nested objects and arrays are not themselves copied, but their references are simply copied
// to the new object or array. A shallow copy can be created using methods such as the Object.assign()
// method or the spread operator (...).

// Deep copy:
// A deep copy creates a new object or array, and recursively copies all values inside the new object
//  or array, including any nested objects or arrays. This means that the new object or array is
//  completely independent of the original object or array, and any changes made to the original will
//  not be reflected in the copy. Deep copying can be more expensive in terms of memory and processing
//  time, but can be necessary in situations where you need to make sure that the original object
//  or array is not modified.

const shallowOriginalArray = [1, 2, 3, [4, 5]];
const shallowCopy = [...shallowOriginalArray];
shallowCopy[3][0] = 5;
console.log(shallowOriginalArray, shallowCopy);
//output [ 1, 2, 3, [ 5, 5 ] ] [ 1, 2, 3, [ 5, 5 ] ]

const deepOriginalArray = [1, 2, 3, [4, 5]];
const deepCopy = JSON.parse(JSON.stringify(deepOriginalArray));
deepCopy[3][0] = 5;
console.log(deepOriginalArray, deepCopy);
// [ 1, 2, 3, [ 4, 5 ] ] [ 1, 2, 3, [ 5, 5 ] ]
