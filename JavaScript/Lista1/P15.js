const prompt = require('prompt-sync')()

console.log('Considerando um triângulo','\n','Insira seus valores...')

//entrada
var base = Number(prompt('Base: '))
var alt = Number(prompt('Altura: '))

//processamento
a = (base*alt)/2

//saída
console.log('Área = ',a)