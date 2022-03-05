const prompt = require('prompt-sync')()

console.log('Considerando: x = (ce - bf)/(ae - bd); e y = (af - cd)/(ae - bd)','\n','Insira valores para...')

//entrada
var a = Number(prompt('a = '))
var b = Number(prompt('b = '))
var c = Number(prompt('c = '))
var d = Number(prompt('d = '))
var e = Number(prompt('e = '))
var f = Number(prompt('f = '))

//processamento
x = (c*e - b*f)/(a*e - b*d)
y = (a*f - c*d)/(a*e - b*d)

//entrada
console.log('Resultado: x = ',x,'; y = ',y)