function extractText() {
    let items = document.querySelectorAll('#items li');
    let result = document.getElementById('result');
    for (let item of items) {
        result.value += item.textContent + '\n';
    }
    
        
}