const inputEl = document.querySelector("#font-size-control");
console.log(inputEl);


const spanEl = document.querySelector("#text"); 
console.log(spanEl);

inputEl.value = 16;


inputEl.addEventListener('input', (event) => {

    spanEl.style.fontSize = `${event.currentTarget.value}px`;

    console.log(event);

});