const prompt = require('prompt-sync')()

//entrada
var v1 = Number(prompt('Insira as horas: '))
var v2 = Number(prompt('Insira os minutos: '))

//processamento
var resultado = (v1*60)+v2

//saída
console.log('O resultado total em minutos é ',resultado)