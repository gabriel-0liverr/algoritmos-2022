const prompt = require('prompt-sync')()

console.log('Levando em conta uma esfera','\n','Considerando Pi = 3,14')

//entrada
var r = Number(prompt('Insira o valor do seu raio: '))

//processamento
v = (4*3.14*(r*r*r))/3

//saída
console.log('Volume da Esfera = ',v)