function addItem() {
    let input = document.getElementById('newItemText');
    let liElement = document.createElement('li');
    liElement.textContent = input.value;
    let ulElement = document.getElementById('items');
    ulElement.appendChild(liElement);
    input.value = '';
    let deleteLink = document.createElement('a');
    deleteLink.href = '#';
    deleteLink.textContent = '[Delete]';
    deleteLink.addEventListener('click', deleteItem);

    liElement.appendChild(deleteLink);

    function deleteItem() {
        liElement.remove();
    }
    
}