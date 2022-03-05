const prompt = require('prompt-sync')()

console.log('...Saque Eletrônico...')

//entrada
var pedido = Number(prompt('Insira a quantidade que quer sacar: R$'))

//processamento
nota_100 = (pedido - pedido%100)/100
resto_100 = pedido%100

nota_50 = (resto_100 - resto_100%50)/50
resto_50 = resto_100%50

nota_20 = (resto_50 - resto_50%20)/20
resto_20 = resto_50%20

nota_10 = (resto_20 - resto_20%10)/10
resto_10 = resto_20%10

nota_5 = (resto_10 - resto_10%5)/5
resto_5 = resto_10%5

nota_2 = (resto_5 - resto_5%2)/2

//saída
console.log('Seu saque será dado em...')
console.log(nota_100,' notas de R$100')
console.log(nota_50,' notas de R$50')
console.log(nota_20,' notas de R$20')
console.log(nota_10,' notas de R$10')
console.log(nota_5,' notas de R$5')
console.log(nota_2,' notas de R$2')