function enviarFormulario() {
    const xhr = new XMLHttpRequest();
    const url = '/enviar';
    const num = document.querySelector('#input-num').value;
    
    xhr.open('POST', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const resposta = JSON.parse(xhr.responseText);
            document.getElementById('resultado').innerHTML = '<p>' + resposta.mensagem + '</p>';
        }
    };
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('num=' + encodeURIComponent(num));
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    enviarFormulario();
});