let color = "red";
switch (color) {
  case "blue":
    console.log("This is Blue.");
    break;
  case "red":
    console.log("This is Red.");
    break;
  case "yellow":
    console.log("This is Yellow.");
    break;
  default:
    console.log("This is the wrong color.");
}

let userKidsNumber = 0;
switch (userKidsNumber) {
  case 0:
    console.log("You do not have kids.");
    break;
  case 1:
    console.log("You are a new parent with 1 child.");
    break;
  case 2:
    console.log("You have 2 kids.");
    break;
  case 3:
    console.log("You have 3 kids.");
    break;
  case 4:
  case 5:
  case 6:
    console.log("You have many kids.");
    break;
  default:
    console.log("You are happy parents.");
}
