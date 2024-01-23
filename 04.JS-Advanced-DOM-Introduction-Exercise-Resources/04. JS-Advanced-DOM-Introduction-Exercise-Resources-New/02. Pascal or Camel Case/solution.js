function solve() {
    let input = document.getElementById('text').value;
    let currentCase = document.getElementById('naming-convention').value;
    let result = document.getElementById('result');

    let words = input.toLowerCase().split(' ').filter(x => x !== '');
    let output = '';

    if (currentCase === 'Camel Case') {
        output += words[0];

        for (let i = 1; i < words.length; i++) {
            output += words[i][0].toUpperCase() + words[i].slice(1);
        }
    } else if (currentCase === 'Pascal Case') {
        for (let i = 0; i < words.length; i++) {
            output += words[i][0].toUpperCase() + words[i].slice(1);
        }
    } else {
        output = 'Error!';
    }

    result.textContent = output;
}