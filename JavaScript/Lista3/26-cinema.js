const prompt = require('prompt-sync')()

function main() {
    console.log('## Pesquisa de Opinião CineMax ##\n')

    nome_do_filme = prompt('Nome do filme: ')

    console.log('Para finalizar digite -1-')

    let idade
    let total_idade_otimo = 0
    let total_opinioes = 0
    let contador_otimo = 0
    let contador_bom = 0
    let contador_regular = 0
    let contador_pessimo = 0
    while (idade != 1) {
        console.log('\n')
        idade = Number(prompt('Idade: '))

            if (idade != 1) {
                console.log('1 - ótimo  |  2 - bom  |  3 - regular  |  4 - péssimo')
                opiniao = Number(prompt('Nº Opinião: '))
                total_opinioes++
                    if (opiniao == 1) {
                        total_idade_otimo = idade + total_idade_otimo
                        contador_otimo++
                    } 
                    if (opiniao == 2){
                        contador_bom++
                    }
                    if (opiniao == 3) {
                        contador_regular++
                    }
                    if (opiniao == 4) {
                        contador_pessimo++
                    }
            } else {
                console.log('Programa encerrado!\n')
            }
    }

    media_otimo = total_idade_otimo / contador_otimo
    percentual_bom = (contador_bom * 100) / total_opinioes

    console.log('Filme: ',nome_do_filme,
    '\nMédia de idade das pessoas que acharam ótimo: ',media_otimo.toFixed(1),' anos',
    '\nPercentual de pessoas que acharam bom: ',percentual_bom.toFixed(1),'%',
    '\nQuantidade de pessoas que acharam regular: ',contador_regular,' pessoas',
    '\nQuantidade de pessoas que acharam péssimo: ',contador_pessimo,' pessoas')
}
main()