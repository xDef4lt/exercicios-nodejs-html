const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('pages/index');
});

router.post('/enviar', function(req, res)  {
    const num = Number(req.body.num);
    const vetor = [];

    for (let i = 0; i <= num; i++) {
        vetor.push(i);
    }

    let resposta = { 'mensagem': vetor }

    res.json(resposta);
});

module.exports = router;