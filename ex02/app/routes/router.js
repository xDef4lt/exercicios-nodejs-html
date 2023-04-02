const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('pages/index');
});

router.post('/enviar', function(req, res)  {
    const altura = req.body.altura;
    const sexo = req.body.sexo;
    let pesoIdeal;

    if (sexo === 'm') {
        pesoIdeal = (72.70 * altura) - 58;
    } else {
        pesoIdeal = (62.10 * altura) - 44.70;
    }

    pesoIdeal = pesoIdeal.toFixed(2);
    pesoIdeal = String(pesoIdeal);
    pesoIdeal = pesoIdeal.replace('.', ',');

    let resposta = {'mensagem': `Seu peso ideal é ${pesoIdeal}kg`};

    res.json(resposta); 
});
  
module.exports = router;