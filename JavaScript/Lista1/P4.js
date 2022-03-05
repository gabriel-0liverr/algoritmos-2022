const prompt = require('prompt-sync')()

console.log('Conversor Dolar/Real','\n')

//entrada
var cot = Number(prompt('Digite a cotação atual do Dólar: '))
var dol = Number(prompt('Insira um valor em dólar: '))

//processamento
var real = cot*dol

//saída
console.log('\n','Considerando a cotação ',cot,'\n','O valor dado em real brasileiro é: R$',real)