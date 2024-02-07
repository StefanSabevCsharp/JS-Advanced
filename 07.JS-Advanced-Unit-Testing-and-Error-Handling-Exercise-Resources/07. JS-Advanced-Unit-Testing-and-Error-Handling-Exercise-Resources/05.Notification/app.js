function notify(message) {
  console.log('todo')
  let div = document.getElementById('notification');
  div.textContent = message;
  div.style.display = "block";
  div.addEventListener("click",() => div.style.display = "none");

 
}