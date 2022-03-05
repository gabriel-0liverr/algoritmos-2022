const prompt = require('prompt-sync')()

console.log('Insira os valores inteiros de a e b...')

//entrada
var a = Number(prompt('a = '))
var b = Number(prompt('b = '))

//processamento
r1 = a / b
r2 = a % b

//saída
console.log(a,' / ',b,' = ',r1,'\n','resto = ',r2)