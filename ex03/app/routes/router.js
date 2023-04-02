const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    res.render('pages/index');
});

router.post('/enviar', function(req, res)  {
    const salario = Number(req.body.salario);
    let salarioReajustado;

    if (salario < 300) {
        salarioReajustado = salario + (salario * 0.5);
    } else {
        salarioReajustado = salario + (salario * 0.3);
    }

    salarioReajustado = salarioReajustado.toFixed(2);
    salarioReajustado = String(salarioReajustado);
    salarioReajustado = salarioReajustado.replace('.', ',');

    let resposta = { 'mensagem':`Salário Reajustado: R$${salarioReajustado}` };

    res.json(resposta);
});

module.exports = router;