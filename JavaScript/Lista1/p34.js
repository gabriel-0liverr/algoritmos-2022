const prompt = require('prompt-sync')()

console.log('Dê valores aos elemnetos...')

//entrda
var a = Number(prompt('a = '))
var b = Number(prompt('b = '))
var c = Number(prompt('c = '))

//processamento
media = (a+b+c)/3

//saída
console.log('A média entre os três elementos é ',media)