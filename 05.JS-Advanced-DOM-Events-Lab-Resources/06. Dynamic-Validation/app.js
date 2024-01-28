function validate() {
    let input = document.getElementById('email');
    input.addEventListener('change', onChange);

    function onChange(ev) {
        let email = ev.target.value;
        let regex = /^[a-z]+@[a-z]+\.[a-z]+$/;
        if (regex.test(email)) {
            ev.target.classList.remove('error');
        } else {
            ev.target.classList.add('error');
        }
    }
    
    
}