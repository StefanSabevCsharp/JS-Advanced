function search() {
 
   let towns = document.querySelectorAll('#towns li');
   let input = document.querySelector('input').value;
   let result = document.getElementById('result');
   let matches = 0;
   let btn = document.getElementById('searchBtn');
   let matchesArr = [];
   for (let town of towns) {
      if (town.textContent.includes(input)) {
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
         matches++;
         matchesArr.push(town.textContent);
      } else {
         town.style.fontWeight = '';
         town.style.textDecoration = '';
      }
   }
   result.textContent = `${matches} matches found`;
   
}
