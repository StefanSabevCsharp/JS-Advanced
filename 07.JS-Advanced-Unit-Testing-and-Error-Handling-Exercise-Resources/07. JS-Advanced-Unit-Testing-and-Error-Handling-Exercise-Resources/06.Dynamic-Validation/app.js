function validate() {
    let pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;
    let email = document.getElementById('email');
    email.addEventListener('change', () => {
        if (pattern.test(email.value)) {
            email.classList.remove('error');
        } else {
            email.classList.add('error');
        }
    });

}