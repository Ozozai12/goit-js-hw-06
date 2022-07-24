const form = document.querySelector('.login-form')
const email = form.querySelector('[name=email]');
const password = form.querySelector('[name=password]');

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Всі поля мають бути заповнені!')
    }

    const object = {};
    object.email = email.value;
    object.password = password.value;
    
    console.log(object)

    form.reset();
}

