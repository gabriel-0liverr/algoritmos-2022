const prompt = require('prompt-sync')()

console.log('Insira cinco valores...')

//entrada

var num1 = Number(prompt('Primeiro número: '))
var num2 = Number(prompt('Segundo número: '))
var num3 = Number(prompt('Terceiro número: '))
var num4 = Number(prompt('Quarto número: '))
var num5 = Number(prompt('Quinto número: '))

//processamento

media = (num1 + num2 + num3 + num4 + num5)/5
console.log('\nConsiderando...\nMédia = ',media,'\nEis os números acima da média:')

if (num1 > media) {
    console.log(num1)
}
if (num2 > media) {
    console.log(num2)
}
if (num3 > media) {
    console.log(num3)
}
if (num4 > media) {
    console.log(num4)
}
if (num5 > media) {
    console.log(num5)
}