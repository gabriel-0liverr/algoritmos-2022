const prompt = require('prompt-sync')()

//entrada
var d = Number(prompt('Insira sua idade em dias: '))

//processamento
var mss = (d - d%30.4167)/30.4167
var anos = (mss - mss%12)/12
var meses = mss%12
var dias = (d%30.41)-((d%30.41)%1)

//saída
console.log('Parabéns! Você tem aproximadamente',anos,' anos ',meses,' meses e',dias,' dias de vida!')