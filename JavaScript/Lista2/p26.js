const prompt = require('prompt-sync')()

console.log('Para a formação de um triângulo insira seus três lados...')

//entrada

var lado1 = Number(prompt('Primeiro lado: '))
var lado2 = Number(prompt('Segundo lado: '))
var lado3 = Number(prompt('Terceiro lado: '))
var h = Math.max(lado1,lado2,lado3)

//processamento e saída

if (lado1 + lado2 < lado3 || lado2 + lado3 < lado1 || lado1 + lado3 < lado2) {
    console.log('ERRO!!!','\n','A soma de dois lados não pode ser menor que o terceiro lado!')

} else {
    if (h == lado1) {
        console.log('Hipotenusa = ',h,'\nCateto 1 = ',lado2,'\nCateto 2 = ',lado3)
    }
    if (h == lado2) {
        console.log('Hipotenusa = ',h,'\nCateto 1 = ',lado1,'\nCateto 2 = ',lado3)
    }
    if (h == lado3) {
        console.log('Hipotenusa = ',h,'\nCateto 1 = ',lado1,'\nCateto 2 = ',lado2)
    }
}
if (lado1 == 0 || lado2 == 0 || lado3 == 0) {
    console.log('ERRO!!!','\n','Dado um lado igual a zero torna-se impossível','\n','a formação de um triângulo!')
}