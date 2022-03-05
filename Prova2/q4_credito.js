const prompt = require('prompt-sync')()

function main() {
    console.log('Opções de crédito:',
    '\n1 - (R$ 40 mil)',
    '\n2 - (R$ 60 mil)',
    '\n3 - (R$ 81 mil)')
    let opcao_c = Number(prompt('Insira sua opção: '))

    console.log('\nOpções de parcela fixa:',
    '\n1 - (R$ 1000)',
    '\n2 - (R$ 1200)',
    '\n3 - (R$ 1500)')
    let opcao_p = Number(prompt('Insira sua opção: '))

    //creditos
    if (opcao_c == 1) {
        saldo = 40000
    }
    if (opcao_c == 2) {
        saldo = 60000
    }
    if (opcao_c == 3) {
        saldo = 81000
    }

    //parcelas
    if (opcao_p == 1) {
        par = 1000
    }
    if (opcao_p == 2) {
        par = 1200
    }
    if (opcao_p == 3) {
        par = 1500
    }

    let contagem_meses = 0
    let i = 0
    while (saldo > 0) {
        i++

        juros_do_mes = (saldo * 0.01)/100
        saldo += juros_do_mes
        console.log(`\nExtrato Mês ${i}...`,'\nJuros do mês: R$',juros_do_mes.toFixed(2),
        '\nSaldo Anterior: R$',saldo.toFixed(2))

        if (saldo < par) {
            par = saldo
        }

        saldo -= par
        console.log('Parcela: R$',par.toFixed(2),'\nNovo Saldo: R$',saldo.toFixed(2))

        contagem_meses++
    }


}
main()