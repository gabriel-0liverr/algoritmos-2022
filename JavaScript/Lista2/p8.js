const prompt = require('prompt-sync')()

console.log('Para calcular sua idade')

//entrada

console.log('Insira a data atual(dd/mm/aaaa)...','\n')
var dia_hoje = Number(prompt('Dia: '))
var mes_hoje = Number(prompt('Mês: '))
var ano_hoje = Number(prompt('Ano: '))

console.log('\nInsira sua data de nascimento(dd/mm/aaaa)...','\n')
var dia_nasc = Number(prompt('Dia: '))
var mes_nasc = Number(prompt('Mês: '))
var ano_nasc = Number(prompt('Ano: '))

//processamento e saída

ano = ano_hoje - ano_nasc

if (mes_hoje < mes_nasc) {
    idade = ano - 1
    console.log('\nVocê tem ',idade,' anos!')


} else {
    
    if (dia_hoje < dia_nasc) {
        idade = ano - 1
        console.log('\nVocê tem ',idade,' anos!')
    
    } else {
        console.log('\nVocê tem ',ano,' anos!')
    }
}