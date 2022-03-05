const prompt = require('prompt-sync')()

console.log('Some os elementos de um número...')

//entrada
var num = Number(prompt('Insira um número de no máximo quatro digitos: '))

//processamento
var und = num%10
    n = (num - num%10)/10

var dzn = n%10
    n = (n - n%10)/10

var cnt = n%10
    n = (n - n%10)/10

var mln = n%10
    n = (n - n%10)/10

r = und + dzn + cnt + mln

//saída
console.log(num,' --> ',mln,' + ',cnt,' + ',dzn,' + ',und,'\n','Resultado = ',r)