const prompt = require('prompt-sync')()

//entrada
var m = Number(prompt('Insira metros: '))

//processamento
var km = (m - m%1000)/1000
var me = m%1000

//saída
console.log(m,'m = ',km,'km + ',me,'m')