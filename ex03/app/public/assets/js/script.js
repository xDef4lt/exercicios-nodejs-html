function enviarFormulario() {
    const xhr = new XMLHttpRequest();
    const url = '/enviar';
    const salario = document.getElementById('input-salario').value;
    
    xhr.open('POST', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const resposta = JSON.parse(xhr.responseText);
            document.getElementById('resultado').innerHTML = '<p>' + resposta.mensagem + '</p>';
        }
    };
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('salario=' + encodeURIComponent(salario));
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault();
    enviarFormulario();
});