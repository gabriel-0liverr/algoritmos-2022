const prompt = require('prompt-sync')()

console.log('Para a formação de um triângulo insira três valores angulares...')

//entrada

var ang1 = Number(prompt('Primeiro valor: '))
var ang2 = Number(prompt('Segundo valor: '))
var ang3 = Number(prompt('Terceiro valor: '))

//processamento e saída

ang_int = ang1 + ang2 + ang3

if (ang_int == 180) {
    
    if (ang1 == 90 || ang2 == 90 || ang3 == 90) {
        console.log('Os ângulos dados formam um triângulo retângulo!')
    }

    if (ang1 > 90 || ang2 > 90 || ang3 > 90) {
        console.log('Os ângulos dados formam um triângulo obtusângulo!')
    }

    if (ang1 < 90 && ang2 < 90 && ang3 < 90) {
        console.log('Os ângulos dados formam um triângulo acutângulo!')
    }
}
if (ang_int != 180) {
    console.log('ERRO!!!','\n','A soma dos ângulos internos não resulta em 180°!')
}
if (ang1 == 0 || ang2 == 0 || ang3 == 0) {
    console.log('ERRO!!!','\n','A existência de um ângulo igual a zero','\n','impossibilita a formação de um triângulo!')
}