const prompt = require('prompt-sync')()

console.log('Considerando uma equação de 2º grau...\nDê valores para:')

var a = Number(prompt('A: '))
var b = Number(prompt('B: '))
var c = Number(prompt('C: '))

if (a != 0) {
    x1 = (-b + Math.sqrt((b*b)-4 * a * c))/(2 * a)
    x2 = (-b - Math.sqrt((b*b)-4 * a * c))/(2 * a)

    console.log('x1 = ',x1,'\nx2 = ',x2)
    
} else {
    console.log('ERRO!! Coeficiente A igual a zero!')
}