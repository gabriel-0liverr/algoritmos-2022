const prompt = require('prompt-sync')()

console.log('Insira três valores...')

//entrada

var num1 = Number(prompt('Primeiro número: '))
var num2 = Number(prompt('Segundo número: '))
var num3 = Number(prompt('Terceiro número: '))

//processamento e saída

if (num1<num2 && num2<num3) {
    console.log(num1,'<',num2,'<',num3)
}
if (num1<num3 && num3<num2) {
    console.log(num1,'<',num3,'<',num2)
}
if (num2<num1 && num1<num3) {
    console.log(num2,'<',num1,'<',num3)
}
if (num2<num3 && num3<num1) {
    console.log(num2,'<',num3,'<',num1)
}
if (num3<num2 && num2<num1) {
    console.log(num3,'<',num2,'<',num1)
}
if (num3<num1 && num1<num2) {
    console.log(num3,'<',num1,'<',num2)
}