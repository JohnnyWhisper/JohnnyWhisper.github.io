const inputEl = document.querySelector("#font-size-control");

const spanEl = document.querySelector("#text"); 


inputEl.value = 16;


inputEl.addEventListener('input', (event) => {

    spanEl.style.fontSize = `${event.currentTarget.value}px`;

    console.log(event);

});