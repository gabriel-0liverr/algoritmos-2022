const prompt = require('prompt-sync')()

//entrada
var m = Number(prompt('Insira meses: '))

//processamento
var anos = (m - m%12)/12
var meses = m%12

//saída
console.log(m,'mese(s) = ',anos,'ano(s)',meses,'mese(s)')