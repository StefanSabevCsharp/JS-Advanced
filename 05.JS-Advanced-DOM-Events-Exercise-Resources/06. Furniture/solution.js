function solve() {

    let textArea = document.getElementsByTagName('textarea')[0];
    let generateBtn = document.getElementsByTagName('button')[0];
    let buyBtn = document.getElementsByTagName('button')[1];
    let tbody = document.getElementsByTagName('tbody')[0];

    generateBtn.addEventListener('click', generate);
    buyBtn.addEventListener('click', buy);

    function generate() {
        let input = JSON.parse(textArea.value);

        for (let i = 0; i < input.length; i++) {
            let tr = document.createElement('tr');

            let tdImg = document.createElement('td');
            let img = document.createElement('img');
            img.src = input[i].img;
            tdImg.appendChild(img);

            let tdName = document.createElement('td');
            let pName = document.createElement('p');
            pName.textContent = input[i].name;
            tdName.appendChild(pName);

            let tdPrice = document.createElement('td');
            let pPrice = document.createElement('p');
            pPrice.textContent = input[i].price;
            tdPrice.appendChild(pPrice);

            let tdDecFactor = document.createElement('td');
            let pDecFactor = document.createElement('p');
            pDecFactor.textContent = input[i].decFactor;
            tdDecFactor.appendChild(pDecFactor);

            let tdCheckBox = document.createElement('td');
            let inputCheckBox = document.createElement('input');
            inputCheckBox.type = 'checkbox';
            tdCheckBox.appendChild(inputCheckBox);

            tr.appendChild(tdImg);
            tr.appendChild(tdName);
            tr.appendChild(tdPrice);
            tr.appendChild(tdDecFactor);
            tr.appendChild(tdCheckBox);

            tbody.appendChild(tr);
        }
    }

    function buy() {
        let bought = [];
        let totalPrice = 0;
        let decFactor = 0;
        let count = 0;

        let allCheckBoxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));

        for (let i = 0; i < allCheckBoxes.length; i++) {
            if (allCheckBoxes[i].checked) {
                let currentRow = allCheckBoxes[i].parentElement.parentElement;
                let name = currentRow.children[1].textContent;
                let price = Number(currentRow.children[2].textContent);
                let factor = Number(currentRow.children[3].textContent);

                bought.push(name);
                totalPrice += price;
                decFactor += factor;
                count++;
            }
        }
        debugger;
        let result = `Bought furniture: ${bought.join(', ')}\n`;
        result += `Total price: ${totalPrice.toFixed(2)}\n`;
        result += `Average decoration factor: ${decFactor / count}`;
        let textAreaResult = document.getElementsByTagName('textarea')[1];
        textAreaResult.value = result;
    }

    
}