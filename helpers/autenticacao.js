const request = require('supertest')

const ObteroToken = async (user, password) => {
    const respostaLogin = await request(process.env.BASE_URL)
        .post('/login')
        .set('Content-Type', 'application/json')
        .send({
            'username': user,
            'senha': password
        })

        return respostaLogin.body.token
}

module.exports = {
    ObteroToken
}