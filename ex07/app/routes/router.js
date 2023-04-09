const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('pages/index');
});

router.post('/enviar', function(req, res)  {
    const inicio = Number(req.body.inicio);
    const fim = Number(req.body.fim);
    const vetor = [];

    for (let i = inicio; i !== fim; 
        inicio < fim ? i++ : i--) {
        vetor.push(i);
    }

    let resposta = { 'mensagem': vetor }

    res.json(resposta);
});

module.exports = router;