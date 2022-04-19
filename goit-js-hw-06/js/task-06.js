const inputEl = document.querySelector("#validation-input");


const addRemoveClasslist = (remove, add) => {
  inputEl.classList.remove(`${remove}`);
  inputEl.classList.add(`${add}`);
};

 const checkValidation = (event) => {
  if (Number(inputEl.dataset.length) === event.currentTarget.value.length) {
    addRemoveClasslist("invalid", "valid");
  } else {
    addRemoveClasslist("valid", "invalid");
  }

 };

inputEl.addEventListener("blur", checkValidation);





