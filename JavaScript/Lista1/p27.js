const prompt = require('prompt-sync')()

//entrada
var s = Number(prompt('Insira segundos: '))

//processamento
var m = (s - s%60)/60
var h = (m - m%60)/60
var min = m%60
var seg = s%60

//saída
console.log(s,'seg = ',h,'hr',min,'min',seg,'seg')