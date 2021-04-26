const create = () => {
  // 1. Step > Create elements to be added
  const newElement = document.createElement("div");
  const newText = document.createTextNode("This is a new text");
  //   2. Step
  //   DIV              NEW TEXT
  newElement.appendChild(newText);
  document.body.appendChild(newElement);
};
