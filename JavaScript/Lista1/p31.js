const prompt = require('prompt-sync')()

console.log('Conversor Binário para Decimal')

//entrada
var num = Number(prompt('Insira um número binário de no máximo quatro digitos: '))

//processamento
var und = num%10
    n = (num - num%10)/10

var dzn = n%10
    n = (n - n%10)/10

var cnt = n%10
    n = (n - n%10)/10

var mln = n%10
    n = (n - n%10)/10

var r = (mln*(2*2*2)) + (cnt*(2*2)) + (dzn*2) + und

//saída
console.log('\n',num,' na base binária = ',r,' na base decimal')