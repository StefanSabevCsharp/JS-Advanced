function lockedProfile() {
    const buttons = document.getElementsByTagName('button');
    Array.from(buttons).forEach(b => b.addEventListener('click', showMore));

    function showMore(e) {
        const button = e.target;
        const profile = button.parentNode;
        const isLocked = profile.querySelector('input[type="radio"][value="lock"]').checked;

        if (!isLocked) {
            const div = profile.querySelector('div');
            const isVisible = div.style.display === 'block';
            div.style.display = isVisible ? 'none' : 'block';
            button.textContent = isVisible ? 'Show more' : 'Hide it';
        }
    }
}