const prompt = require('prompt-sync')()

console.log('Bem-vindo ao m/s to km/h Converter')

//entrada
var vms = prompt('Insira a velocidade em m/s: ')

//processamento
var kmh = vms * 3.6

//saída
console.log('O resultado é ',kmh,'km/h')