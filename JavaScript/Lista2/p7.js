const prompt = require('prompt-sync')()

console.log('Para a formação de um triângulo insira seus três lados...')

//entrada

var lado1 = Number(prompt('Primeiro lado: '))
var lado2 = Number(prompt('Segundo lado: '))
var lado3 = Number(prompt('Terceiro lado: '))

//processamento e saída

if (lado1 + lado2 < lado3 || lado2 + lado3 < lado1 || lado1 + lado3 < lado2) {
    console.log('ERRO!!!','\n','A soma de dois lados não pode ser menor que o terceiro lado!')

} else {
    if (lado1 == lado2 && lado2 == lado3) {
        console.log('Os lados dados formam um triângulo equilátero!')
    }
    if (lado1 == lado2 && lado2 != lado3 || lado1 == lado3 && lado2 != lado3 || lado2 == lado3 && lado1 != lado2) {
        console.log('Os lados dados formam um triângulo isóceles!')
    }
    if (lado1 != lado2 && lado2 != lado3) {
        console.log('Os lados dados formam um triângulo escaleno!')
    }
}
if (lado1 == 0 || lado2 == 0 || lado3 == 0) {
    console.log('ERRO!!!','\n','Dado um lado igual a zero torna-se impossível','\n','a formação de um triângulo!')
}