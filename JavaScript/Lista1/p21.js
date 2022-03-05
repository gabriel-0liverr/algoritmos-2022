const prompt = require('prompt-sync')()

console.log('...Conversor de Temperatura V1.2...')

//entrada
var f = Number(prompt('Insira a t°F = '))

//processamento
var c = (5 * f - 160)/9

//saída
console.log('t°C = ',c)