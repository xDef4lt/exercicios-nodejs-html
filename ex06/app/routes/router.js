const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('pages/index');
});

router.post('/enviar', function(req, res)  {
    const num = Number(req.body.num);
    const mostrarCalculo = String(req.body.mostrarCalculo);
    
    let fat = 1;
    const lista = [];
    
    let resposta;

    for (let i = num; i >= 1; i--) {
        fat *= i;
        lista.push(i);
    }

    resposta = { 'mensagem': `${num}! = ${lista.join(' * ')} = ${fat}` };

    res.json(resposta);
});

module.exports = router;