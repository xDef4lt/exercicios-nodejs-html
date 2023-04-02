function enviarFormulario() {
    const xhr = new XMLHttpRequest();
    const url = '/enviar';
    const altura = document.getElementById('input-altura').value;
    
    xhr.open('POST', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const resposta = JSON.parse(xhr.responseText);
            document.getElementById('resultado').innerHTML = '<p>' + resposta.mensagem + '</p>';
        }
    };
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('altura=' + encodeURIComponent(altura));
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    enviarFormulario();
});