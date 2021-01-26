/*
const arr = ["Dario", "Mo", "Ercan"];

const handleArr = (name, index) => {
  return `${name} has index ${index}.`;
};

const auxArray = [];
for (let i = 0; i < arr.length; i++) {
  auxArray.push(handleArr(arr[i], i));
}
*/
const arr = ["Dario", "Mo", "Ercan"];
const auxArray = arr.map((name, index) => {
  return `${name} has index ${index}.`;
});
console.log(auxArray);
