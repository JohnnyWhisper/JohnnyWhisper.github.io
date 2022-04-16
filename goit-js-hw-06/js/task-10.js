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


inputEl.addEventListener('input', getInputValue);

function getInputValue() {
  const amount = inputEl.value;

  createBoxes(amount);
}



const createBoxes = (amount) => {
    
  const boxesArray = [];
  

  for (let i=0; i<amount; i += 1) {
  
    const boxEl = document.createElement("div");
    boxEl.style.backgroundColor =  getRandomHexColor();

    const basicSize = 30;
    const size = basicSize + i * 10;


    boxEl.style.width =  `${size}px`;
    boxEl.style.height= `${size}px`;


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





