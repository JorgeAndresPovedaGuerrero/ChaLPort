function encryptText() {
    const text = document.getElementById('text').value;
    if (text.trim() === '') {
 
        document.querySelector('.box h2').textContent = 'No hay datos...';
        document.getElementById('output').textContent = '';
        document.getElementById('copyButton').style.display = 'none'; 
    } else {
        const result = encrypt(text);
        document.getElementById('output').textContent = result;
        document.querySelector('.box h2').textContent = 'Resultado';
        document.getElementById('copyButton').style.display = 'block';
    }
}

function decryptText() {
    const text = document.getElementById('text').value;
    if (text.trim() === '') {
        
        document.querySelector('.box h2').textContent = 'No hay datos...';
        document.getElementById('output').textContent = '';
        document.getElementById('copyButton').style.display = 'none'; 
    } else {
        const result = decrypt(text);
        document.getElementById('output').textContent = result;
        document.querySelector('.box h2').textContent = 'Resultado';
        document.getElementById('copyButton').style.display = 'block'; 
    }
}

function encrypt(text) {
    return text.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function decrypt(text) {
    return text.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

function copyToClipboard() {
    const output = document.getElementById('output');
    const copyText = document.createElement('textarea');
    copyText.value = output.textContent;
    document.body.appendChild(copyText);
    copyText.select();
    document.execCommand('copy');
    document.body.removeChild(copyText);
}
