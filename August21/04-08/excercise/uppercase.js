function firstLetterUpperCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

console.log(firstLetterUpperCase('hello'));
console.log(firstLetterUpperCase('HELLO'));
console.log(firstLetterUpperCase('hElLo'));
console.log(firstLetterUpperCase('hELLO'));