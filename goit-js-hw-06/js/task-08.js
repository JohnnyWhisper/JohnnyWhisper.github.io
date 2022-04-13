const loginFormEl = document.querySelector(".login-form");
console.log(loginFormEl);


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

   event.currentTarget.reset();
})
