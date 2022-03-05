const prompt = require('prompt-sync')()

console.log('Para a formação de um retângulo insira duas coordenadas...')

//entrada

var x1 = Number(prompt('x1: '))
var y1 = Number(prompt('y1: '))
console.log('C1 = (',x1,',',y1,')\n')

var x2 = Number(prompt('x2: '))
var y2 = Number(prompt('y2: '))
console.log('C2 = (',x2,',',y2,')\n')

if (x1 > x2) {
    if (y1 > y2) {
        maior = x1 * y1
        menor1 = y2 * x1
        menor2 = (y1 - y2) * x2
        a = maior - (menor1+menor2)
        console.log('Área = ',a)
    }
    else {
        maior = x1 * y2
        menor1 =  x1 * y1
        menor2 = x2 * (y2 - y1)
        a = maior - (menor1+menor2)
        console.log('Área = ',a)
    }
}
else {
    if (y2 > y1) {
        maior = x2 * y2
        menor1 = y1 * x2
        menor2 = (y2 - y1) * x1
        a = maior - (menor1+menor2)
        console.log('Área = ',a)
    }
    else {
        maior = x2 * y1
        menor1 =  x2 * y2
        menor2 = x1 * (y1 - y2)
        a = maior - (menor1+menor2)
        console.log('Área = ',a)
    }
}