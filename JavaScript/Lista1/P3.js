const prompt = require('prompt-sync')()

//entrada
var min = Number(prompt('Insira minutos: '))

//processamento
var hrs = (min - min%60)/60
var min = min%60

//saída
console.log('Resultado (Hora:Minutos) = ',hrs,':',min)