const counterValueElement = document.querySelector("#value");
console.log(counterValueElement);

let counterValue = 0;


counterValueElement.textContent = counterValue;


const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtn);
const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(incrementBtn);


decrementBtn.addEventListener('click', () => {
    
   counterValueElement.textContent = counterValue -= 1;
   return counterValueElement.textContent;
});


incrementBtn.addEventListener('click', () => {
    counterValueElement.textContent = counterValue += 1;
    return counterValueElement.textContent;
});






