const prompt = require('prompt-sync')()

console.log('Conversor KG para G...','\n')

//entrada
var kg = Number(prompt('Insira o valor em KG: '))

//processamento
g = kg*1000

//saída
console.log(kg,'kg = ',g,'g')