// 1 Group Objects by property
const people = [
  { name: "John", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Mike", age: 30 },
  { name: "Lisa", age: 25 },
  { name: "Lisa", age: 55 },
];

function groupObjectsByProperty(arr, property) {
  const grouped = {};
  arr.forEach((obj) => {
    const value = obj[property];
    if (!grouped[value]) {
      grouped[value] = [];
    }
    grouped[value].push(obj.name);
  });
  return grouped;
}
console.log(groupObjectsByProperty(people, "age"));

//Output
// {
//     "25": [
//         "Jane",
//         "Lisa"
//     ],
//     "30": [
//         "John",
//         "Mike"
//     ],
//     "55": [
//         "Lisa"
//     ]
// }

// 2 question

const firstname = fun();
let name = "vivek";
function fun() {
  return `my is ${name} malviya`;
}
console.log(firstname);
//Output
// name is not defined and Error

// 3 Question
function mul(a) {
    console.log(a, "a");

  return function (b) {
    console.log(b, "b")
    return function (c) {
        console.log(c, "c")
      return a * b * c;
    };
  };
}
console.log("output with normal function", mul(2)(4)(6));
// Output
// output with normal function 48

// 4 Question
const call = (a) => {
    
  return (b) => {
    return (c) => {
      return a * b * c;
    };
  };
};
console.log("output with arrow function", call(2)(4)(6));
//Output 
// "output with arrow function" 48

// 5 Question
// Write a program return resolve if value is less than 5 using Promise
function fun(a) {
  let myPromise = new Promise((myResolve, myReject) => {
    let x = 0;
    // The producing code (this may take some time)
    if (a < 7) {
      myResolve(`number is given ${a}`);
    } else {
      myReject("Error");
    }
  });
  myPromise.then((result) => {
    console.log(result);
  });
}
fun(5);
// Output 
//number is given 5

// 6 Question
for (let i = 0; i < 5; i++) {
    console.log("Inside For"+i)
  setTimeout(function () {
    console.log("Inside setTimeout"+i);
  }, i*1000);
}
// Output
// first for loop will run making i = 0 to i = 4;
// Now setTimeout is called with 0* 1000 = 1 sec and 1 * 1000 = 2 sec and 1000* 3 = 3 sec and 1000 * 4 = 4 sec
// so other numbers will appear with 1 sec time delay
// so output will be 0 , 1 , 2 , 3 and 4

// 7 Question
for (var i = 0; i < 5; i++) {
    console.log("Inside For "+i)
  setTimeout(function () {
    console.log(i + " i in setTimeOut");
  }, i*1000);
}
//Output
// print 5 5 times with 1 sec delay

// 8 Question
// Write a program to multiply two number without using multiply Sign in Javascript
function multiplay(a, b) {
  let answer = a;
  for (let i = 0; i < b - 1; i++) {
    answer += a;
  }
  return answer;
}
console.log(multiplay(5, 3));
// Output 15

// 9 Question
// Write a program sorting in javascript
const arr = [3, 2, 5, 4, 1, 0];
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
}
console.log("Elements of array sorted in ascending order:");
for (let i = 0; i < arr.length; i++) {
  console.log("Elements of array sorted in ascending order", arr[i]);
}

// 10 Question
var num = 4;
function outer() {
  var num = 2;
  console.log(num);
  function inner() {
    num++;
    
    var num = 6;
    console.log("num", num);
  }
  inner();
}
outer();
// num 6 output

//11 Question
const a = {};
const b = { key: 'b' };
const c = { key: 'c' };
a[b] = 123;
a[c] = 456;
console.log(a[c]);
console.log(a,"a")
//output
// 456
// Object keys are automatically converted into strings.
// We are trying to set an ***object as a key*** to object a, with the
// value of 123.
// However, when we stringify an object, it becomes "[object
// Object]".
// So what we are saying here, is that a["[object Object]"] = 123.
// Then,
// we can try to do the same again.
// c is another object that we are implicitly stringifying.
// So then, a["[object Object]"] = 456. Then, we log a[b],
// which is actually a["[object Object]"].
// We just set that to 456, so it returns 456. */



    
    