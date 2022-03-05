const prompt = require('prompt-sync')()

console.log('Insira dois valores...')

//entrada

var num1 = Number(prompt('Primeiro Valor: '))
var num2 = Number(prompt('Segundo Valor: '))

//processamento e saída

if (num1 == num2) {
    console.log('Os dois números são iguais.')
}
if (num1 > num2) {
    console.log('Número maior: ',num1)
    console.log('Número menor: ',num2)
}
if (num1 < num2) {
    console.log('Número maior: ',num2)
    console.log('Número menor: ',num1)
}