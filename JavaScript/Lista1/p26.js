const prompt = require('prompt-sync')()

//entrada
var d = Number(prompt('Insira dias: '))

//processamento
var s = (d - d%7)/7
var di = d%7

//saída
console.log(d,'dia(s) = ',s,'semana(s) + ',di,'dia(s)')