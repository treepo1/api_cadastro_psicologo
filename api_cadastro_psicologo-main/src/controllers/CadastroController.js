const  CadastroService = require('../services/CadastroService')


module.exports = {

    cadastro: async (req, res) => {

        let json = {error: '', result: []}


        let nome_completo = req.body.nomeC
        let cpf = req.body.cpf
        let email = req.body.email
        let data_nascimento = req.body.data_nascimento
        let numero_celular = req.body.numero_celular
        let regiao = req.body.numero_regiao
        let conta_pagamento = req.body.conta_pagamento
        let descricao = req.body.descricao

        let dados = [nome_completo,cpf,email,data_nascimento,numero_celular,
            regiao,conta_pagamento,descricao]

        if (dados){
            const data = await CadastroService.cadastro(dados)
        }
        else{
            json.error = 'Não foi possível cadastrar o usuário, dados faltando'
        }

        res.json(json)

    }
}