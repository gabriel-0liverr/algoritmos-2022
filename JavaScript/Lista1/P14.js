const prompt = require('prompt-sync')()

console.log('...Calculador de Média Ponderada...')

//entrada
var n1 = Number(prompt('Insira a primeira nota: '))
var p1 = Number(prompt('Insira o primeiro peso: '))

var n2 = Number(prompt('Insira a segunda nota: '))
var p2 = Number(prompt('Insira o segundo peso: '))

var n3 = Number(prompt('Insira a terceira nota: '))
var p3 = Number(prompt('Insira o terceiro peso: '))

//processamento
r = ((n1*p1)+(n2*p2)+(n3*p3))/(p1+p2+p3)

//saída
console.log('\n','A média ponderada é ',r)