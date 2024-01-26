function encodeAndDecodeMessages() {
    let encodeBtn = document.getElementsByTagName('button')[0];
    let decodeBtn = document.getElementsByTagName('button')[1];
    let encodeTextArea = document.getElementsByTagName('textarea')[0];
    let decodeTextArea = document.getElementsByTagName('textarea')[1];

    encodeBtn.addEventListener('click', encode);
    decodeBtn.addEventListener('click', decode);

    function encode() {
        let text = encodeTextArea.value;
        let encodedText = '';
        for (let i = 0; i < text.length; i++) {
            encodedText += String.fromCharCode(text.charCodeAt(i) + 1);
        }
        encodeTextArea.value = '';
        decodeTextArea.value = encodedText;
    }

    function decode() {
        let text = decodeTextArea.value;
        let decodedText = '';
        for (let i = 0; i < text.length; i++) {
            decodedText += String.fromCharCode(text.charCodeAt(i) - 1);
        }
        decodeTextArea.value = decodedText;
    }
}