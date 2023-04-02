const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('pages/index');
});

router.post('/enviar', function(req, res)  {
    const num = req.body.numero;
    let resposta;
    
    if (num > 0) {
        resposta = { mensagem: 'Valor Positivo' };
    } else if (num < 0) {
        resposta = { mensagem: 'Valor Negativo' };
    } else {
        resposta = { mensagem: 'Valor igual a Zero' };
    }

    res.json(resposta); 
});

module.exports = router;