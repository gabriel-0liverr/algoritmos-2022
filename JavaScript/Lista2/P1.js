const prompt = require('prompt-sync')()

console.log('Insira três valores...')

//entrada

var num1 = Number(prompt('Primeiro número: '))
var num2 = Number(prompt('Segundo número: '))
var num3 = Number(prompt('Terceiro número: '))

//processamento e saída

if (num1 == num2 && num2 == num3) {
    console.log('Os três números informados são iguais.')
}
if (num1 == num2 && num2 != num3) {
    console.log('Há dois números iguais dentre os informados.')
}
if (num1 == num3 && num2 != num3) {
    console.log('Há dois números iguais dentre os informados.')
}
if (num1 != num2 && num2 == num3) {
    console.log('Há dois números iguais dentre os informados.')
}
if (num1 != num2 && num2 != num3 && num1 != num3 ){
    console.log('Todos os números informados são diferentes.')
}