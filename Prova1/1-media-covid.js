const prompt = require('prompt-sync')()

function if_negative(variacao){
    //calculando o módulo da variação para anular valores negativos
    if (variacao<0){
        variacao_modular = variacao * -1

    } else {
        variacao_modular = variacao
    }

    return variacao_modular
}

function principal(){
    console.log('### Cálculo de Evolução Covid-19 ###','\n')

    //entrada
    const media_passada = Number(prompt('Insira a média de casos há 14 atrás: '))
    const media_hoje = Number(prompt('Insira a média de casos de hoje: '))

    //processamento
    var variacao = media_hoje - media_passada

    var variacao_modular = if_negative(variacao) //considerando o módulo da variação

    var variacao_percentual = (100 * variacao_modular) / media_passada //considerando a porcetagem da variação
    
    //saídas condicionais
    if (variacao_percentual <= 15){
        console.log('\nCom variação de ',variacao_percentual,'% a situação atual se encontra em estabilidade.')
    }
    if (variacao_percentual > 15 && variacao < 0){
        console.log('\nCom variação de ',variacao_percentual,'% a situação atual se encontra em queda!')
    }
    if (variacao_percentual > 15 && variacao > 0){
        console.log('\nCom variação de ',variacao_percentual,'% a situação atual se encontra em alta!')
    }
}

principal()