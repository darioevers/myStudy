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

// Deep copy using recursion
