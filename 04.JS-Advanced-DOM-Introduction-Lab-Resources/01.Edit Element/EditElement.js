function editElement(currentElement, match, replacer) {
   currentElement.textContent = currentElement.textContent.replace(new RegExp(match, 'g'), replacer);
   

}