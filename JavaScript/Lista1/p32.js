const prompt = require('prompt-sync')()

console.log('Calcule a diferença de um numero','\n','pelo seu inverso...')

//entrada
var num = Number(prompt('Insira um número no máximo três digitos: '))

//processamento
var und = num%10
    n = (num - num%10)/10

var dzn = n%10
    n = (n - n%10)/10

var cnt = n%10
    n = (n - n%10)/10

var num_inv = (und*100) + (dzn*10) + cnt

if (num >= num_inv) {
    var dif = num - num_inv
    console.log(num,' - ',num_inv,' = ',dif)
} 
if (num_inv > num) {
    var dif = num_inv - num
    console.log(num_inv,' - ',num,' = ',dif)
}

//saída
console.log('\n','Programa finalizado!')