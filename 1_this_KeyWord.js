// This Key word in Javascript

//A function's this keyword behaves a little differently in JavaScript compared to other languages. 
//It also has some differences between strict mode and non-strict mode.
//In most cases, the value of this is determined by how a function is called (runtime binding).

const user = {
  name: "Hari outer",
  Age: 27,
  getName() {
    const name = "Hari";
    return this.name;
  },
};
console.log(user.getName());
//////-----////////
let calculator = {
  read() {
    this.a = +prompt("a=", 0);
    this.b = +prompt("b=", 0);
  },
  sum() {
    console.log(this.a + this.b);
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  },
};

calculator.read();
calculator.sum();
calculator.mul();
