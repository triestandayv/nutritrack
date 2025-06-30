const getStartedButton = document.querySelector('.get-started-btn');
const logInRegister = document.querySelector('.login-register');


document.addEventListener('DOMContentLoaded', function () {
    let getStartedButton = document.querySelector('.get-started-btn');
    let loginRegister = document.querySelector('.login-register');

    getStartedButton.addEventListener('click', function () {
        loginRegister.classList.remove('d-none');
        getStartedButton.classList.add('d-none');
    });
});
