// ___________________________________________________________ASSIGNMENT 1___________________________________________________________:
console.log("__________ASSIGNMENT 1__________");
// BONUS
// Create a function that returns an object has following output, try this one in Advance array methods :muscle::skin-tone-2:
// Examples:
// ABC -> { A: 1, B: 1, C: 1 } QQQ -> { Q: 3}

// ___________________________________________________________ASSIGNMENT 2___________________________________________________________:
console.log("__________ASSIGNMENT 2__________");
// ZODIAC SIGN
// write a function that tells the user his/her Zodiac sign. The user should enter only his birthday like dd-mm-yy
// for farther information check https://en.wikipedia.org/wiki/Zodiac
// Examples:
// zodiac(“14-02-2002”)  -> Aquarius
// zodiac(“10-06-1984")  -> Gemini
function zodiac(birthday) {
  var sign = "";
  let birthdayArr = parseInt(birthday.split("-"));
  switch (birthdayArr) {
    case (birthdayArr[1] == 01 && birthdayArr[0] >= 20) ||
      (birthdayArr[1] == 02 && birthdayArr[0] <= 18):
      sign = "Aquarius";
      break;
    case (birthdayArr[1] == 02 && birthdayArr[0] >= 19) ||
      (birthdayArr[1] == 03 && birthdayArr[0] <= 20):
      sign = "Pisces";
      break;
    case (birthdayArr[1] == 03 && birthdayArr[0] >= 21) ||
      (birthdayArr[1] == 04 && birthdayArr[0] <= 19):
      sign = "Aries";
      break;
    case (birthdayArr[1] == 04 && birthdayArr[0] >= 20) ||
      (birthdayArr[1] == 05 && birthdayArr[0] <= 20):
      sign = "Taurus";
      break;
    case (birthdayArr[1] == 05 && birthdayArr[0] >= 21) ||
      (birthdayArr[1] == 06 && birthdayArr[0] <= 20):
      sign = "Gemini";
      break;
    case (birthdayArr[1] == 06 && birthdayArr[0] >= 21) ||
      (birthdayArr[1] == 07 && birthdayArr[0] <= 22):
      sign = "Cancer";
      break;
    case (birthdayArr[1] == 07 && birthdayArr[0] >= 23) ||
      (birthdayArr[1] == 08 && birthdayArr[0] <= 22):
      sign = "Leo";
      break;
    case (birthdayArr[1] == 08 && birthdayArr[0] >= 23) ||
      (birthdayArr[1] == 09 && birthdayArr[0] <= 22):
      sign = "Virgo";
      break;
    case (birthdayArr[1] == 09 && birthdayArr[0] >= 23) ||
      (birthdayArr[1] == 10 && birthdayArr[0] <= 22):
      sign = "Libra";
      break;
    case (birthdayArr[1] == 10 && birthdayArr[0] >= 23) ||
      (birthdayArr[1] == 11 && birthdayArr[0] <= 21):
      sign = "Scorpio";
      break;
    case (birthdayArr[1] == 11 && birthdayArr[0] >= 22) ||
      (birthdayArr[1] == 12 && birthdayArr[0] <= 21):
      sign = "Saggitarius";
    case (birthdayArr[1] == 12 && birthdayArr[0] >= 22) ||
      (birthdayArr[1] == 01 && birthdayArr[0] <= 19):
      sign = "Capricorn";
      break;
    default:
      sign = "NO";
      break;
  }
  return sign;
}
console.log(zodiac("10-06-1984"));
console.log(zodiac("14-02-2002"));

// NEXT
const zodiacDates = {
  Aries: {
    start: [21][3],
    end: [20][4],
  },
  Taurus: {
    start: [20][4],
    end: [21][5],
  },
  Gemini: {
    start: [21][5],
    end: [21][6],
  },
  Cancer: {
    start: [21][6],
    end: [23][7],
  },
  Leo: {
    start: [23][7],
    end: [23][8],
  },
  Virgo: {
    start: [23][8],
    end: [23][9],
  },
  Libra: {
    start: [23][9],
    end: [23][10],
  },
  Scorpio: {
    start: [23][10],
    end: [22][11],
  },
  Sagittarius: {
    start: [23][11],
    end: [22][12],
  },
  Capricorn: {
    start: [22][12],
    end: [20][1],
  },
  Aquarius: {
    start: [20][1],
    end: [19][2],
  },
  Pisces: {
    start: [19][2],
    end: [21][3],
  },
};

console.log("__________ASSIGNMENT222__________");

const zodiacSecond = (birthday) => {
  sign = "";
  let birthdayArr = birthday.split("-");
  let day = parseInt(birthdayArr[0]);
  let month = parseInt(birthdayArr[1]);
  for (let prop in zodiacDates) {
    month == Object.keys(zodiacDates).start[1];
  }
};
console.log(zodiacSecond("14-02-2002"));

// NEXT
/*
const zodiacDates2 = [
  {
    Aries: [21][3],
  },
  {
    Taurus: [20][4],
  },
  {
    Gemini: [21][5],
  },
  {
    Cancer: [21][6],
  },
  {
    Leo: [23][7],
  },
  {
    Virgo: [23][8],
  },
  {
    Libra: [23][9],
  },
  {
    Scorpio: [23][10],
  },
  {
    Sagittarius: [23][11],
  },
  {
    Capricorn: [22][12],
  },
  {
    Aquarius: [20][1],
  },
  {
    Pisces: [19][2],
  },
];
const zodiacThird = (birthday) => {
  sign = "";
  let birthdayArr = birthday.split("-");
  let day = parseInt(birthdayArr[0]);
  let month = parseInt(birthdayArr[1]);
  for (let prop in zodiacDates2) {
    day >= zodiacDates2[prop[0]] && month <= zzodiacDates2[prop[1]]
      ? zodiacDates2.keys
      : `Please enter a valid date!`;
  }
};
console.log(zodiacThird("14-02-2002"));


*/
// NEXT

// Aries
// 21 03 – 20 04

// Taurus
// 20 04 – 21 05

// Gemini
// 21 05 – 21 06

// Cancer
// 21 06 – 23 07

// Leo
// 23 07 – 23 08

// Virgo
// 23 08 – 23 09

// Libra
// 23 09 – 23 10

// Scorpio
// 23 10 – 23 11

// Sagaittarius
// 23 11 – 22 12

// Capricornus
// 22 12 - 20 01

// Aquarius
// 20 01 - 19 02

// Pisces
// 19 02 - 21 03
