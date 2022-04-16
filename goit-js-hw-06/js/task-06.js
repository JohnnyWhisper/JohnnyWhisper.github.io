const inputEl = document.querySelector("input");
console.log(inputEl);

const dataLength = Number(inputEl.dataset.length);


inputEl.addEventListener("blur", (event) => {

    if (event.currentTarget.value.length === dataLength) {

      inputEl.classList.add("valid");
    }
    else {

      inputEl.classList.add("invalid");
    }

});





