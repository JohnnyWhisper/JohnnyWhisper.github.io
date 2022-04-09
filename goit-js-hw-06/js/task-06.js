const inputEl = document.querySelector("#validation-input");
console.log(inputEl);


inputEl.addEventListener('blur', (event) => {
 
    if (`${event.currentTarget.value.length}`=== inputEl.dataset.length) {

     inputEl.style.borderColor = "#4caf50";
    }
    else if (`${event.currentTarget.value.length}`!== inputEl.dataset.length) {
      inputEl.style.borderColor = "#f44336";
    }
  console.log(`${event.currentTarget.value.length}`);

});