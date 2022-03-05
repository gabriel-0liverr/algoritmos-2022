const prompt = require('prompt-sync')()

console.log('Insira dois números...\n')

var num1 = Number(prompt('Primeiro Número: '))
var num2 = Number(prompt('Segundo Número: '))

resto = num1 % num2

if (resto == 1) {
    var result = num1 + num2 + resto
    console.log('R = ',num1,' + ',num2,' + (',num1,' % ',num2,')')
    console.log('\nR = ',result)
}
if (resto == 2) {
    if (num1 % 2 == 0) {
        console.log(num1,' é par!')
    } else {
        console.log(num1,' é ímpar!')
    }
    if (num2 % 2 == 0) {
        console.log(num2,' é par!')
    } else {
        console.log(num2,' é ímpar!')
    }
}
if (resto == 3) {
    var result = (num1 + num2) * num1
    console.log('R = (',num1,' + ',num2,') x ',num1)
    console.log('\nR = ',result)
}
if (resto == 4) {
    var result = (num1 + num2) / num2
    console.log('R = (',num1,' + ',num2,') / ',num2)
    console.log('\nR = ',result)
}
if (resto != 1 && resto != 2 && resto != 3 && resto != 4 && resto != 5) {
    var num1 = (num1 * num1)
    var num2 = (num2 * num2)
    console.log('O quadrado dos números é:\nPrimeiro Número = ',num1,'\nSegundo Número = ',num2)
}