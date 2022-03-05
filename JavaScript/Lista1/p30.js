const prompt = require('prompt-sync')()

//entrada
var minu = Number(prompt('Insira minutos: '))

//processamento
var hr = (minu - minu%60)/60
var d = (hr - hr%24)/24
var horas = hr%60
var m = minu%60

//saída
console.log(minu,'min = ',d,'dias',horas,'hr',m,'min')