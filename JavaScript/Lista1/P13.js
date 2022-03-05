const prompt = require('prompt-sync')()

//entrada
var a = Number(prompt('Insira um valor em real: R$'))

//processamento
r = a * 0.7

//saída
console.log(r,' equivale à 70% do valor de ',a)