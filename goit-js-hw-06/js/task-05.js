
const inputEl = document.querySelector("#name-input");
console.log(inputEl);


const outputEl = document.querySelector("#name-output");
console.log(outputEl);



inputEl.addEventListener('input', (event) => {
    outputEl.textContent = event.currentTarget.value;
});
