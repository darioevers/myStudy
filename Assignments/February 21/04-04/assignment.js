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
  let sign = "";
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
zodiac("10-06-1984");
zodiac("14-02-2002");

// NEXT

const zodiac2 = [
  {
    name: "Aries",
    start: "21-03",
    end: "20-04",
  },
  {
    name: "Taurus",
    start: "20-04",
    end: "21-05",
  },
  {
    name: "Gemini",
    start: "21-05",
    end: "21-06",
  },
  {
    name: "Cancer",
    start: "21-06",
    end: "23-07",
  },
  {
    name: "Leo",
    start: "23-07",
    end: "23-08",
  },
  {
    name: "Virgo",
    start: "23-08",
    end: "23-09",
  },
  {
    name: "Libra",
    start: "23-09",
    end: "23-10",
  },
  {
    name: "Scorpio",
    start: "23-10",
    end: "22-11",
  },
  {
    name: "Sagittarius",
    start: "23-11",
    end: "22-12",
  },
  {
    name: "Capricorn",
    start: "22-12",
    end: "20-01",
  },
  {
    name: "Aquarius",
    start: "20-01",
    end: "19-02",
  },
  {
    name: "Pisces",
    start: "19-02",
    end: "21-03",
  },
];

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
