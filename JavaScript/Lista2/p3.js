const prompt = require('prompt-sync')()

console.log('Insira três valores...')

//entrada

var num1 = Number(prompt('Primeiro número: '))
var num2 = Number(prompt('Segundo número: '))
var num3 = Number(prompt('Terceiro número: '))

//processamento e saída

if (num1 == num2 && num2 == num3) {
    console.log('Os três números são iguais.')
}
if (num1 == num2 || num2 == num3) {
    console.log('Há dois números iguais.')
}
if (num1 > num2 && num1 > num3) {
    console.log('Número maior: ',num1)
}
if (num2 > num1 && num2 > num3) {
    console.log('Número maior: ',num2)
}
if (num3 > num1 && num3 > num2) {
    console.log('Número maior: ',num3)
}