const prompt = require('prompt-sync')()

console.log('Considerando um fumante, insira...','\n')

//entrada
var anos = Number(prompt('Há quantos anos ele fuma: '))
var cpd = Number(prompt('Quantos cigarros ele fuma p/ dia: '))
var valor = Number(prompt('Preço do maço de cigarros: '))

//processamento
num_maço = ((anos * 365)*cpd)/20
result = Math.round(num_maço) * valor

//processamento
console.log('Ao longo de ',anos,' anos, esse fumante gastou R$',result)