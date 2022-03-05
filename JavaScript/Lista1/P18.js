const prompt = require('prompt-sync')()

console.log('Levando em conta uma circunferência','\n','Considerando Pi = 3,14')

//entrada
var r = Number(prompt('Insira o valor do seu raio: '))

//processamento
c = 2*3.14*r

//saída
console.log('Comprimento da Circunferência = ',c)