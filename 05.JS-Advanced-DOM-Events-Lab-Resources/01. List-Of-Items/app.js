function addItem() {
    let input = document.getElementById('newItemText');
    let liElement = document.createElement('li');
    liElement.textContent = input.value;
    let ulElement = document.getElementById('items');
    ulElement.appendChild(liElement);
    input.value = '';
}