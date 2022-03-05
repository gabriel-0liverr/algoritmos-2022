const prompt = require('prompt-sync')()

//entrada
var hr = Number(prompt('Insira horas: '))

//processamento
var d = (hr - hr%24)/24
var s = (d - d%7)/7
var dias = d%7
var hrs = hr%24

//saída
console.log(hr,'hora(s) = ',s,'semana(s)',dias,'dia(s)',hrs,'hora(s)')