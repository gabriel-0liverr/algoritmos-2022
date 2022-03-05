const prompt = require('prompt-sync')()

console.log('Considerando um plano cartesiano insira dois pontos:')

//entrada
var x1 = Number(prompt('Insira x1 (x1,y1): '))
var y1 = Number(prompt('Insira y1 (x1,y1): '))
console.log('Primeiro ponto: (',x1,',',y1,')','\n')

var x2 = Number(prompt('Insira x2 (x2,y2): '))
var y2 = Number(prompt('Insira y2 (x2,y2): '))
console.log('Segundo ponto: (',x2,',',y2,')','\n')

//processamento
result = Math.sqrt(((x2 - x1)*( x2 - x1)) + ((y2 - y1)*(y2 - y1)))

//saída
console.log('A distância entre os pontos A(',x1,',',y1,') e B(',x2,',',y2,') é igual à ',result)