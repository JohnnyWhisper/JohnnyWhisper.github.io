function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const controls = document.querySelector("#controls");

const inputEl = document.querySelector("input");


const btnCreate = document.querySelector("button[data-create]");

const btnDestroy = document.querySelector("button[data-destroy]");

const divBoxes = document.querySelector("#boxes");


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

};


btnCreate.addEventListener('click', getInputValue);

const destroyBoxes = () => {
  divBoxes.remove();
  window.location.reload();
};

btnDestroy.addEventListener('click', destroyBoxes);





