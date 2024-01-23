function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let input = document.querySelector('#searchField').value;
      let rows = Array.from(document.querySelectorAll('tbody tr'));

      rows.forEach(row => {
         row.classList.remove('select');
      });

      rows.forEach(row => {
         if (row.textContent.includes(input)) {
            row.classList.add('select');
         }
      });
      

   }
}