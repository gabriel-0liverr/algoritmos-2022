const prompt = require('prompt-sync')()

console.log('Conversor M para CM...','\n')

//entrada
var m = Number(prompt('Insira o valor em M: '))

//processamento
cm = m*100

//saída
console.log(m,'m = ',cm,'cm')