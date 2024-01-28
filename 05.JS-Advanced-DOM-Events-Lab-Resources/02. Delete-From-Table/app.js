function deleteByEmail() {
    let emails = Array.from(document.querySelectorAll('#customers tr td:nth-child(2)'));
    let input = document.querySelector('input[name="email"]');
    let result = document.getElementById('result');
    let isDeleted = false;
    for (let email of emails) {
        if (email.textContent === input.value) {
            email.parentNode.remove();
            isDeleted = true;
        }
    }
    result.textContent = isDeleted ? 'Deleted.' : 'Not found.';
    input.value = '';
    
}