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


let amount;


inputEl.addEventListener('input', (event) => {
  const amountStr = event.currentTarget.value;
  amount = Number(amountStr);
  console.log(amount);

})


const createBoxes = (amount) => {
 
  const boxesArray = [];

  for (let i=0; i <5; i += 1) {

    const boxEl = document.createElement("div");
    const color = getRandomHexColor();
    boxEl.style.backgroundColor = color;

    boxEl.style.width = "30px";
    boxEl.style.height = "30px";
    boxEl.style.margin ="5px";

    boxesArray.push(boxEl);

  }

  divBoxes.append(... boxesArray);
  console.log(boxesArray);

};


btnCreate.addEventListener('click', createBoxes);

const destroyBoxes = () => {
  divBoxes.remove();
  window.location.reload();
};

btnDestroy.addEventListener('click', destroyBoxes);


