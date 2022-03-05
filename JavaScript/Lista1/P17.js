const prompt = require('prompt-sync')()

console.log('Considerando um retângulo','\n','Insira seus valores...')

//entrada
var base = Number(prompt('Base: '))
var alt = Number(prompt('Altura: '))

//processamento
a = base*alt

//saída
console.log('Área = ',a)