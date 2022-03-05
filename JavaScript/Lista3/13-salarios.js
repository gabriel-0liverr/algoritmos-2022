const prompt = require('prompt-sync')()

function main() {
    console.log('Insira os salários atuais de uma empresa...',
    '\nPara verificar reajuste digite - 0 -\n')

    let atual 
    let reajuste
    let soma_atual = 0
    let soma_reajuste = 0

    while (atual != 0) {
        atual = Number(prompt('Salário Atual: R$'))
        
        if (atual < 3000) {
            reajuste = atual * 1.25
        }
        else if (atual >= 3000 && atual < 6000) {
            reajuste = atual * 1.20
        }
        else if (atual >= 6000 && atual < 10000) {
            reajuste = atual * 1.15
        }
        else if (atual >= 10000) {
            reajuste = atual * 1.10
        }

        console.log('Reajustado: R$',reajuste,'\n')

        soma_atual += atual
        soma_reajuste += reajuste
    }

    diferenca = soma_reajuste - soma_atual

    console.log('\nSoma dos Salários Atuais: R$',soma_atual,
    '\nSoma dos Salários Reajustados: R$',soma_reajuste,
    '\nDiferença entre as somas: R$',diferenca)
}

main()