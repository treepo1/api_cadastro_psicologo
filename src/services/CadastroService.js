const { json } = require('express/lib/response');
const db = require('../db');


module.exports = {

    cadastro: (dados) => {
        return new Promise((acepted,rejected) => {
            // adiciona dados ao banco e retorna mensagem indicando se o cadastro
            // foi efetuado ou não
        })
    }
}