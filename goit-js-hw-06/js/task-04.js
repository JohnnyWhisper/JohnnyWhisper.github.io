const counterValueElement = document.querySelector("#value");

let counterValue = 0;

counterValueElement.textContent = counterValue;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');


decrementBtn.addEventListener('click', () => {
    
   counterValueElement.textContent = counterValue -= 1;
});


incrementBtn.addEventListener('click', () => {
    counterValueElement.textContent = counterValue += 1;
});






