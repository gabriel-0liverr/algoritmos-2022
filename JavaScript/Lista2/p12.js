const prompt = require('prompt-sync')()

//entrada

var num = Number(prompt('Insira um número inteiro: '))

//processamento e saída

if (num % 1 == 0) {
    if (num % 2 == 0) {
        console.log('O número ',num,' é par!')
    } else {
        console.log('O número ',num,' é ímpar!')
    }
} else {
    console.log('O número ',num,' não é inteiro!')
}