function freeShipping(order) {
  let counter = 0;
  for (let key in order) {
    counter += order[key];
  }
  return counter > 50;
}

console.log(
  freeShipping({ Monopoly: 11.99, "Secret Hitler": 25.99, Bananagrams: 13.99 })
);

class Circle {
  constructor(r) {
    this.r = r;
  }
  getArea() {
    return Math.PI * this.r ** 2;
  }
  getPerimeter() {
    return 2 * Math.PI * this.r;
  }
}

let q = new Circle(4.44);
console.log(q.getArea());
console.log(q.getPerimeter());

// Binary converter, convert any given number to binary.
// Bounce : your code should be using one line only
// Example :
// 20 -> 10100
// 10-> 1010
// 44-> 101100

function binary(num) {
  return num.toString(2);
}
console.log(binary(13));
