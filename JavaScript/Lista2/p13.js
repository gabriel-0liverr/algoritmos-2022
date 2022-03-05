const prompt = require('prompt-sync')()

console.log('Insira cinco valores diferentes entre si...')

//entrada

var num1 = Number(prompt('Primeiro número: '))
var num2 = Number(prompt('Segundo número: '))
var num3 = Number(prompt('Terceiro número: '))
var num4 = Number(prompt('Quarto número: '))
var num5 = Number(prompt('Quinto número: '))

//processamento

maior = Math.max(num1,num2,num3,num4,num5)
menor = Math.min(num1,num2,num3,num4,num5)

//saída

console.log('\nMaior número: ',maior)
console.log('Menor número: ',menor)