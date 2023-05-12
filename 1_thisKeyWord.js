// This Key word in Javascript

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
