const prompt = require('prompt-sync')()

console.log('Considerando um carro')

//entrada
var fabrica = Number(prompt('Insira seu custo de fábrica: R$'))

//processamento
result = fabrica + (fabrica * 0.28) + (fabrica * 0.45)

//saída
console.log('Custo ao Consumidor: R$',result)