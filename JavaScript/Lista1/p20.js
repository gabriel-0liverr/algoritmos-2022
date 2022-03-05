const prompt = require('prompt-sync')()

console.log('...Conversor de Temperatura V1.1...')

//entrada
var c = Number(prompt('Insira a t°C = '))

//prcessamento
var f = (9 * c + 160)/5

//saída
console.log('t°F = ',f)