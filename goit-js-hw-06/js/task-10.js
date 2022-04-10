function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const controls = document.querySelector("#controls");
console.log(controls);

const inputEl = document.querySelector("input");
console.log(inputEl);

console.log(inputEl.step);

let amount;

inputEl.addEventListener('input', (event) => {
  amount = event.currentTarget.value;

  console.log(amount);
  
})


const btnCreate = document.querySelector("button[data-create]");
console.log(btnCreate);

const btnDestroy = document.querySelector("button[data-destroy]");
console.log(btnDestroy);

const divBoxes = document.querySelector("#boxes");
console.log(divBoxes);


const createBoxes = (amount) => {
  const items = [];

  for (let i=1; i <= amount; i+=1) {
    const color = getRandomHexColor();
    const boxEl = document.createElement("div");
    boxEl.style.backgroundColor = color;
    boxEl.style.width = "30px";
    boxEl.style.height = "30px";
    items.push(boxEl);

  }

  divBoxes.append(...items);
  
};


btnCreate.addEventListener('click', createBoxes);

const destroyBoxes = () => {
  divBoxes.remove();
  window.location.reload();
};

btnDestroy.addEventListener('click', destroyBoxes);


