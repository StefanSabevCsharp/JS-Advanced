function encodeAndDecodeMessages() {
    let encodeBtn = document.getElementsByTagName('button')[0];
    let decodeBtn = document.getElementsByTagName('button')[1];
    let textAreas = document.getElementsByTagName('textarea');
    let encodeTextArea = textAreas[0];
    let decodeTextArea = textAreas[1];
    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);
    function encode(e) {
        let encodedMessage = '';
        for (const char of encodeTextArea.value) {
            encodedMessage += String.fromCharCode(char.charCodeAt(0) + 1);
        }
        encodeTextArea.value = '';
        decodeTextArea.value = encodedMessage;
    }
    function decode(e) {
        let decodedMessage = '';
        for (const char of decodeTextArea.value) {
            decodedMessage += String.fromCharCode(char.charCodeAt(0) - 1);
        }
        decodeTextArea.value = decodedMessage;
    }
    
}