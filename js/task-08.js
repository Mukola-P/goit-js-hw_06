const form = document.querySelector(".login-form");

const onForSubmit = event => {
    event.preventDefault()
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value
    if (email === "" || password === "") {
         
        return alert("Всі поля повинні бути заповнені."),
            event.currentTarget.reset();
        
    }
    const formData = { email, password };

    console.log(formData);
    event.currentTarget.reset()
}
form.addEventListener("submit", onForSubmit);