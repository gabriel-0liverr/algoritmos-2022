const prompt = require('prompt-sync')()

//entrada
var numero = Number(prompt('Insira um número de três digitos: '))

//processamento
var unid = numero%10
    numero = (numero - numero%10)/10

var dezn = numero%10
    numero = (numero - numero%10)/10

var cent = numero%10
    numero = (numero - numero%10)/10

var resultado = unid + dezn + cent

//saída
console.log('\n','A soma dos digitos é ',resultado)