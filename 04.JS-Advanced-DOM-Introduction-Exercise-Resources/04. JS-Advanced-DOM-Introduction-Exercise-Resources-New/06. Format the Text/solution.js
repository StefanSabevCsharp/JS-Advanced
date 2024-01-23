function solve() {
  
  let input = document.getElementById('input').textContent;
  let output = document.getElementById('output');
  let sentences = input.split('.').filter(x => x !== '');
  const allSentences = [];
  for (let i = 0; i < sentences.length; i += 3) {
    let currentSentences = sentences.slice(i, i + 3);
    allSentences.push(currentSentences);
  }
  for (let i = 0; i < allSentences.length; i++) {
    let currentParagraph = document.createElement('p');
    currentParagraph.textContent = allSentences[i].join('. ') + '.';
    output.appendChild(currentParagraph);
  }

  
}