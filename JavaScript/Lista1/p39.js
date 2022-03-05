const prompt = require('prompt-sync')()

console.log('Insira três valores...','\n')

//entrada
var a = Number(prompt('A: '))
var b = Number(prompt('B: '))
var c = Number(prompt('C: '))

//processamento
r = (a + b) * (a + b)
console.log('Considerando: R = (',a,' + ',b,') * (',a,' + ',b,')')

s = (b + c) * (b + c)
console.log('E também: S = (',b,' + ',c,') * (',b,' + ',c,')')

d = (r + s)/2

//saída
console.log('D = (',r,' + ',s,')/2 = ',d)