const processString = (str) => {
  return str
    .split("")
    .map((char, index) => `${index}${char.toUpperCase()}`)
    .join("");
};

const inputString = prompt("Enter a string:");
const result = processString(inputString);

document.body.innerHTML = result;
