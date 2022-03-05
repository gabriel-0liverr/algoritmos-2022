const prompt = require('prompt-sync')()

function calculo_score1(criterio1,criterio2,criterio3) {
    r = (criterio1 * 26 + criterio2 * 57 + criterio3 * 17)/10

    return r
}
function calculo_score2(criterio1,criterio2,criterio3) {
    r = (criterio1 * 62 + criterio2 * 19 + criterio3 * 19)/10

    return r
}


function principal() {
    console.log('### Serasa Score Calculator ###','\n\nInsira os dados...\n')

    //entrada
    criterio1 = Number(prompt('Insira um valor baseado no Critério 1: '))
    criterio2 = Number(prompt('Insira um valor baseado no Critério 2: '))
    criterio3 = Number(prompt('Insira um valor baseado no Critério 3: '))

    //processamento
    score1 = calculo_score1(criterio1,criterio2,criterio3)
    score2 = calculo_score2(criterio1,criterio2,criterio3)

        //Avaliação Score 1.0
        if (score1 >= 0 && score1 <= 400) {
            av1 = 'Baixo'
        }
        if (score1 > 400 && score1 <= 600) {
            av1 = 'Regular'
        }
        if (score1 > 600 && score1 <= 800) {
            av1 = 'Bom'
        }
        if (score1 > 800 && score1 <= 1000) {
            av1 = 'Muito Bom'
        }

        //Avaliação Score 2.0
        if (score2 >= 0 && score2 <= 300) {
            av2 = 'Baixo'
        }
        if (score2 > 300 && score2 <= 500) {
            av2 = 'Regular'
        }
        if (score2 > 500 && score2 <= 700) {
            av2 = 'Bom'
        }
        if (score2 > 700 && score2 <= 1000) {
            av2 = 'Muito Bom'
        }

    //saída
    console.log('\n\nSerasa Score 1.0','\nValor: ',score1,'\nCategoria: ',av1)
    console.log('\n\nSerasa Score 2.0','\nValor: ',score2,'\nCategoria: ',av2)
}   

principal()