const prompt = require('prompt-sync')()

console.log('Math-Calculator 1.0\nInsira dois números...\n')

var num1 = Number(prompt('Primeiro Número: '))
var num2 = Number(prompt('Segundo Número: '))

console.log('\nOpções de operação:\n1 - Adição\n2- Subtração\n3 - Multiplicação\n4 - Divisão')
var opcao = Number(prompt('Selecione a sua opção: '))

if (opcao == 1) {
    r = num1 + num2
    console.log(num1,' + ',num2,' = ',r)
}
if (opcao == 2) {
    r = num1 - num2
    console.log(num1,' - ',num2,' = ',r)
}
if (opcao == 3) {
    r = num1 * num2
    console.log(num1,' x ',num2,' = ',r)
}
if (opcao == 4) {
    r = num1 / num2
    console.log(num1,' / ',num2,' = ',r)
}
if (opcao != 1 && opcao != 2 && opcao != 3 && opcao != 4) {
    console.log('ERRO!!! Opção inválida!')
}