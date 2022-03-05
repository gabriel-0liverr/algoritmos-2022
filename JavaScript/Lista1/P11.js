const prompt = require('prompt-sync')()

//entrada
var a = prompt('Insira um número de três dígitos:')

//processamento
function inverter(a) {
  return a.split('').reverse().join('')
}
//saída
console.log('Invertido: ',inverter(a))