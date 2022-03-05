const prompt = require('prompt-sync')()

console.log('Considerando dois professores...')

//entrada

var aulahora1 = Number(prompt('\nInsira as horas-aula do primeiro professor: '))
var dinhora1 = Number(prompt('Insira seu salário-hora: '))

var aulahora2 = Number(prompt('\nInsira as horas-aula do segundo professor: '))
var dinhora2 = Number(prompt('Insira seu salário-hora: '))

//processamento

prof1 = aulahora1 * dinhora1
prof2 = aulahora2 * dinhora2

if (prof1 > prof2) {
    console.log('\nO primeiro professor possui o salário maior!')
}
if (prof2 > prof1) {
    console.log('\nO segundo professor possui o salário maior!')
}
if (prof1 == prof2) {
    console.log('\nOs dois professores ganham a mesma quantia!')
}