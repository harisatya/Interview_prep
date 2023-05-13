// Map filter and Reduce are higher order functions



//Map is used to transform an array
//Map returns a new array

const arr = [1,2,3,4,5];
function double(x){
    return 2*x
}
const mul2 = arr.map(double);

console.log(mul2,"Mul with 2");

//filter is used to filter and returns new array

const filterArr = arr.filter(item=>item>2);

console.log(filterArr,"filterArr")

//Reduce
// is used at places where we have to take array and come up with single value from it.
// sum or Max

const arr1 = [1,2,3,4,5];
function sumOfArray(array){
    let sum = 0;
    for(let i=0;i<array.length;i++){
     sum=sum+array[i]
    }
    return sum;
}
const k = sumOfArray(arr1);
console.log(k,"k");

const output = arr1.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);
console.log(output,"output");

//  for finding max
const arr2 = [1,2,3,4,5];
const output2 = arr2.reduce((acc, curr) => {
  if (acc < curr) {
    acc = curr;
  }

  return acc;
}, 0);
console.log(output2, "output2");