const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('pages/index');
});

router.post('/enviar', function(req, res)  {
    const num = req.body.num;
    console.log(num);
    let resposta;

    num >= 10
        ? resposta = {'mensagem': 'Valor maior ou igual a 10'}
        : resposta = {'mensagem': `Valor não é maior ou igual a 10`};

    res.json(resposta);
});

module.exports = router;