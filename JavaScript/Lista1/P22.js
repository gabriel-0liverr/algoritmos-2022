const prompt = require('prompt-sync')()

console.log('Conversor KM para M...','\n')

//entrada
var km = Number(prompt('Insira o valor em KM: '))

//processamento
m = km*1000

//saída
console.log(km,'km = ',m,'m')