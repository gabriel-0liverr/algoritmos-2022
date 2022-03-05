const prompt = require('prompt-sync')()

console.log('Insira três valores...')

//entrada

var num1 = Number(prompt('Primeiro número: '))
var num2 = Number(prompt('Segundo número: '))
var num3 = Number(prompt('Terceiro número: '))

console.log('\nOs valores foram atribuídos a opções, para acessar uma opção digite para:')
console.log('Primeira Opção - 1\nSegunda Opção  - 2\nTerceira Opção - 3\n')
var opcao = Number(prompt('Digite uma opção: '))

//processamento e saída

if (opcao == 1) {
    console.log('Primeira Opção: ',num1)
}
if (opcao == 2) {
    console.log('Segunda Opção: ',num2)
}
if (opcao == 3) {
    console.log('Terceira Opção: ',num3)
}
if (opcao != 1 && opcao != 2 && opcao != 3) {
    console.log('OPÇÃO INVÁLIDA!!!')
}