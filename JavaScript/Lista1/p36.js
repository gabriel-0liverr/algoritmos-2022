const prompt = require('prompt-sync')()

console.log('Insira sua idade precisamente...')

//entrada
var anos = Number(prompt('Anos: '))
var meses = Number(prompt('Meses: '))
var dias = Number(prompt('Dias: '))

//processamento
r = (anos*365) + (meses*30) + dias

//saída
console.log('Parabéns!','\n',' Você tem ',r,' dias de idade!')