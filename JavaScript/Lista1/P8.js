const prompt = require('prompt-sync')()

console.log('Insira os valores...')

//entrada
var a = Number(prompt('a = '))
var b = Number(prompt('b = '))

//processamento
r = (a+b)/(a-b)

//saída
console.log('R = (',a,' + ',b,') / (',a,' - ',b,') = ',r)