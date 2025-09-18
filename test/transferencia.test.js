const request = require('supertest')
const { expect } = require('chai')
require('dotenv').config()
const { ObteroToken } = require('../helpers/autenticacao')

describe('Transferencias', () => {
    describe('POST /transferencias', () => {
        let token
        beforeEach(async () => {
            token = await ObteroToken('julio.lima', '123456')
        })
        it('Deve retornar sucesso com 201 quando o valor da transferecnia for acima de R$10,00', async () => {

            const resposta = await request(process.env.BASE_URL)
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 11,
                    token: ""
                })
            expect(resposta.status).to.equal(201)
        })


        it('Deve retornar sucesso com 422 quando o valor da transferecnia for abaixo de R$10,00', async () => {
            const resposta = await request('http://localhost:3000')
                .post('/transferencias')
                .set('Content-Type', 'application/json')
                .set('Authorization', `Bearer ${token}`)
                .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 8,
                    token: ""
                })
            expect(resposta.status).to.equal(422)
        })
    })
})