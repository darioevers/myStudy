const car = {
  brand: "Mercedes",
  model: "GTS",
  HP: 510,
  color: ["Red", "Black"],
};

// Shallow Clone for an object
const newClonedObj = { ...car };
console.log(newClonedObj);
newClonedObj.brand = "BMW";
newClonedObj.color[0] = "Orange";
console.log(car);

// Recursion

// factorial example
const factorial = (num) => {
  if (num == 1) {
    return 1;
  }
  return num * factorial(num - 1);
};
console.log(factorial(7));

// Deep copy using recursion
