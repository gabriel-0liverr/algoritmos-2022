const prompt = require('prompt-sync')()

console.log('Para saber o valor de entrada e parcelas digite')

//entrada
var preço = Number(prompt('o valor de sua compra: R$'))

//processamento
parcelas = (preço - preço%3)/3
entrada = parcelas + preço%3

//saída
console.log('Você pagará a entrada de R$',entrada,' e 2 parcelas de R$',parcelas)