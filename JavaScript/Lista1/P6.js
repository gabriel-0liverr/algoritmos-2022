const prompt = require('prompt-sync')()

console.log('Bem-vindo ao km/h to m/s Converter')

//entrada
var kmh = prompt('Insira a velocidade em km/h: ')

//processamento
var vms = kmh / 3.6

//saída
console.log('O resultado é ',vms,'m/s')