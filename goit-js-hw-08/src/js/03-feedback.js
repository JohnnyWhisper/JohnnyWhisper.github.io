

const formEl = document.querySelector(".feedback-form");
const emailEl = formEl.elements.email;
const messageEl = formEl.elements.message;


formEl.addEventListener('input', () => {
const emailContent = emailEl.value;
const messageContent = messageEl.value;

const formData = {
    email: `${emailContent}`,
    message: `${messageContent}`,
}

const formDataStr = JSON.stringify(formData);
localStorage.setItem("feedback-form-state", `${formDataStr}`);

});

const storageContent = JSON.parse(localStorage.getItem("feedback-form-state"));

function autofill() {
    if(storageContent !== null) {
        emailEl.value = storageContent.email;
        messageEl.value = storageContent.message;
    } 
};

autofill();


formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    console.log(storageContent);

    emailEl.value = null;
    messageEl.value = null;

    localStorage.clear();
});





