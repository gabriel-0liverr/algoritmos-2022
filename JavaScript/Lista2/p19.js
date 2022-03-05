const prompt = require('prompt-sync')()

console.log('IMC Calculator')

//entrada

var alt = Number(prompt('Insira sua altura em metros: '))
var peso = Number(prompt('Insira seu peso em quilogramas: '))

// processamento e saída

imc = peso / (alt*alt)

if (imc <= 18) {
    console.log('IMC = ',imc,'\nVocê está com magreza!!')
}
if (imc <= 25 && imc > 18) {
    console.log('IMC = ',imc,'\nSeu peso está normal!')
}
if (imc <= 30 && imc > 25 ) {
    console.log('IMC = ',imc,'\nVocê está obeso!!')
}
if (imc > 30 ) {
    console.log('IMC = ',imc,'\nVocê está com obesidade mórbida!!!')
}