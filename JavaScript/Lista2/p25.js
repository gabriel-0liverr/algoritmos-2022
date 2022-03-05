const prompt = require('prompt-sync')()

var senha = Number(prompt('Insira a senha: '))
s = 1234

if (senha == s) {
    console.log('Acesso permitido!')
} else {
    console.log('Acesso negado!')
}