const prompt = require('prompt-sync')()

console.log('Insira uma primeira fração... ')
//entrada1
var f1_1 = Number(prompt('Dividendo: '))
var f1_2 = Number(prompt('Divisor: '))
console.log(f1_1,'/',f1_2)

console.log('\n','Insira uma segunda fração... ')
//entrada2
var f2_1 = Number(prompt('Dividendo: '))
var f2_2 = Number(prompt('Divisor: '))
console.log(f2_1,'/',f2_2)

//processamento
divisor = f1_2 * f2_2
dividendo = (f1_1 * f2_2) + (f1_2 * f2_1)

//saída
console.log('\n',f1_1,'/',f1_2,' + ',f2_1,'/',f2_2,' = ',dividendo,'/',divisor)