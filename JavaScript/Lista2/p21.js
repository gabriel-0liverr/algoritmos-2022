const prompt = require('prompt-sync')()

console.log('Arredondamento numeral...')

var n = Number(prompt('Insira um Número : '))

var r = n % 1

if (r == 0) {
    console.log('O número ',n,' já é inteiro!')
} else {
    if (r >= 0.5) {
        n = (n + 1) - r
        console.log('Número arredondado = ',n)
    } else {
        n = n - r
        console.log('Número arredondado = ',n)
    }
}