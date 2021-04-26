const create = () => {
  // 1. Step > Create elements to be added
  const newElement = document.createElement("div");
  const newText = document.createTextNode("This is a new text");
  //   2. Step
  //   DIV              NEW TEXT
  newElement.appendChild(newText);
  document.body.appendChild(newElement);
};

const addToList = () => {
  let userData = document.querySelector("#userData").value;
  if (userData != "") {
    let newLi = document.createElement("li");
    let text = document.createTextNode(userData);
    newLi.appendChild(text);
    document.querySelector(".result").appendChild(newLi);
    document.querySelector("#userData").value = "";
  } else {
    document.querySelector("#userData").placeholder = "Enter text first please";
  }
};

const removeFromList = () => {
  document.body.removeChild(newLi);
};
