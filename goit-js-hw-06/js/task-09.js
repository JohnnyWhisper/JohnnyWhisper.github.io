function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector("body");
console.log(bodyEl);


console.log(bodyEl.style.backgroundColor);

const colorEl = document.querySelector(".color");
console.log(colorEl);



const btnEl = document.querySelector(".change-color");
console.log(btnEl);

btnEl.addEventListener('click', (event) => {

  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  colorEl.textContent = `- ${bodyEl.style.backgroundColor}`;

})

