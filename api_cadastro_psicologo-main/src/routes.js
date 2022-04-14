const express = require ('express');
const router = express.Router();

const CadastroController = require('./controllers/CadastroController')


router.post('/cadastroPsicologo', CadastroController.cadastro)


module.exports = router