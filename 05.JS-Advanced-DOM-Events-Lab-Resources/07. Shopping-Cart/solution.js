function solve() {
   let products = [];
   let totalPrice = 0;
   let textArea = document.getElementsByTagName('textarea')[0];
   let checkoutButton = document.getElementsByClassName('checkout')[0];
   let addButtons = document.getElementsByClassName('add-product');
   for (let i = 0; i < addButtons.length; i++) {
      addButtons[i].addEventListener('click', addProduct);
   }
   checkoutButton.addEventListener('click', checkout);
   
   function addProduct(e) {
      let product = e.target.parentNode.parentNode;
      let name = product.getElementsByClassName('product-title')[0].textContent;
      let price = Number(product.getElementsByClassName('product-line-price')[0].textContent);
      products.push(name);
      totalPrice += price;
      textArea.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
   }
   
   function checkout() {
      let uniqueProducts = new Set(products);
      textArea.value += `You bought ${Array.from(uniqueProducts).join(', ')} for ${totalPrice.toFixed(2)}.`;
      for (let i = 0; i < addButtons.length; i++) {
         addButtons[i].removeEventListener('click', addProduct);
      }
      checkoutButton.removeEventListener('click', checkout);
   }
   
}