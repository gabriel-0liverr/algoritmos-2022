const prompt = require('prompt-sync')()

console.log('Quer saber quanto seria seu salário após um aumento de 25%?')

//entrada
var a = Number(prompt('Insira seu salário atual: R$'))

//processamento
var r = a * 1.25

//saída
console.log('Resultado após aumento de 25%: R$',r)