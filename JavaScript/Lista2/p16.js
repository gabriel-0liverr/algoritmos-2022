const prompt = require('prompt-sync')()

console.log('Provas Bimestrais Finais...\n')

var nota1 = Number(prompt('Insira sua primeira nota: '))
var nota2 = Number(prompt('Insira sua segunda nota: '))

var media = (nota1 + nota2)/2

if (media >= 7) {
    console.log('\nParabéns, você foi aprovado!\nSua media final: ',media)
} else {
    console.log('\nSua média ',media,' foi insuficiente para a sua aprovação!\nVocê fará prova final!\n')
    var nota3 = Number(prompt('Insira sua nota de recuperação: '))

    media = (nota1 + nota2 + nota3)/3
        
        if (media >= 5) {
            console.log('\nParabéns, você foi aprovado!\nSua media final: ',media)

        } else {
            console.log('\nSua média ',media,' foi insuficiente para a sua aprovação!\nVocê foi reprovado!')
        }
}