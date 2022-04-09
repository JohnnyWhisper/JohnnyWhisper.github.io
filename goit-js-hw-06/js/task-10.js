function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const controls = document.querySelector("#controls");
console.log(controls);

const inputEl = document.querySelector("input");
console.log(inputEl);

const btnCreate = document.querySelector("button[data-create]");
console.log(btnCreate);

const btnDestroy = document.querySelector("button[data-destroy]");
console.log(btnDestroy);

const divBoxes = document.querySelector("#boxes");
console.log(divBoxes);


// const createBoxes = (amount) => {
//   const boxEl = document.createElement("div");
//   boxEl.style.backgroundColor = `${getRandomHexColor()}`;
//   amount = inputEl.value;
//   divBoxes.append(boxEl);
//   return boxEl;
// }

const boxesArray = [];


 const createBoxes = () => {
  const boxEl = document.createElement("div");
  boxEl.style.backgroundColor = `${getRandomHexColor()}`;
  boxEl.style.width = "30px";
  boxEl.style.height = "30px";
  divBoxes.append(boxEl);
  boxesArray.push(boxEl);

 };

console.log(boxesArray);


btnCreate.addEventListener('click', createBoxes);

const destroyBoxes = () => {
  boxEl.remove("div");
};

btnDestroy.addEventListener('click', destroyBoxes);
