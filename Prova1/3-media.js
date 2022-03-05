const prompt = require('prompt-sync')()

function calculo_media(prova_1,prova_2,ativ) {
    resposta = (prova_1 * 2 + prova_2 * 3 + ativ * 1) / 6
    resposta = resposta.toFixed(2)

    return resposta
}

function principal() {
    console.log('### Média IFPI ###','\n\nInsira seus dados...')

    //entrada
    nome = prompt('Nome completo: ')
    prova_1 = Number(prompt('Primeira Nota: '))
    prova_2 = Number(prompt('Segunda Nota: '))
    ativ = Number(prompt('Nota das Atividades: '))

    //processamento
    media = calculo_media(prova_1,prova_2,ativ)

    if (media >= 7) {  //caso aprovado
        console.log (nome,', você foi aprovado!',
        '\nSua média foi ',media,)
    }
    else if (media < 4) {  //caso reprovado
        console.log (nome,', você foi REPROVADO!',
        '\nSua média foi ',media,)
    }
    else if (media < 7 && media >= 4) {  //caso de prova final
        console.log (nome,', você ficou de prova final!\n')

        prova_final = Number(prompt('Nota de Prova Final: '))
        media_final = (media + prova_final) / 2
        media_final = media_final.toFixed(2)
        
        if (media_final >= 6) {  //caso de prova final aprovado
            console.log (nome,', você foi aprovado!',
            '\nSua média pré-prova-final foi ',media,
            '\nE sua média pós-prova-final foi ',media_final)
        }
        else {  //caso de prova final reprovado
            console.log (nome,', você foi REPROVADO!',
            '\nSua média pré-prova-final foi ',media,
            '\nE sua média pós-prova-final foi ',media_final)         
        }
    }
}

principal()