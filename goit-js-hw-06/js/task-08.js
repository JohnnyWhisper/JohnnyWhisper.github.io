const loginFormEl = document.querySelector(".login-form");
console.log(loginFormEl);



const emailInputEl = loginFormEl.firstElementChild;
console.log(emailInputEl);


const emailPasswordEl = emailInputEl.nextElementSibling;
console.log(emailPasswordEl);

const BtnEl = loginFormEl.lastElementChild;
console.log(BtnEl);


console.log(loginFormEl.elements);




loginFormEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const userEmail = event.currentTarget.elements.email.value;
    const userPassword = event.currentTarget.elements.password.value;

    if (userEmail === "" || userPassword === "") {
        alert("Все поля должны быть заполнены");
        return;
    }
    
    const userData = {
        userEmail,
        userPassword,
    };
    
    console.log(userData);

   loginFormEl.reset();
})
