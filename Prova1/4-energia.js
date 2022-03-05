const prompt = require('prompt-sync')()

function valor_iluminacao(valor) {
    iluminacao = (valor * 6) / 94

    return iluminacao
}
function valor_icms(valor) {
    icms = (valor * 25) / 60

    return icms
}
function valor_pis(valor) {
    pis = (valor * 15) / 60

    return pis
}

function principal() {
    console.log('### Calculador de Energia ###','\n')

    //entrada
    maio = Number(prompt('Insira a leitura do mês de Maio: '))
    junho = Number(prompt('Insira a leitura do mês de Junho: '))

    leitura = junho - maio
    

    //processamento e saídas condicionais
    console.log('\nSeu talão mensal...\n')
    //faixa de isenção
    if (leitura <= 30) {
        console.log ('\nConsumo: ',leitura,'KWh',
                    '\nValor Faturado: R$0,00',
                    '\nBandeira: R$0,00',
                    '\nICMS: R$0,00',
                    '\nPIS/COFINS: R$0,00',
                    '\nTaxa de Iluminação: R$0,00',
                    '\nParabéns, você está isento de tarifa!')    
    }

    //faixa de até 80KWh
    else if (leitura > 30 && leitura <= 80) {
        valor_base = 0.59 * leitura
        icms = valor_icms(valor_base)
        pis = valor_pis(valor_base)

        valor_final = valor_base + icms + pis

        console.log ('\nConsumo: ',leitura,'KWh',
                    '\nValor Faturado: R$',valor_final.toFixed(2),
                    '\nBandeira: R$0,00',
                    '\nICMS: R$',icms.toFixed(2),
                    '\nPIS/COFINS: R$',pis.toFixed(2),
                    '\nTaxa de Iluminação: R$0,00')
    }

    //faixa de até 100KWh
    else if (leitura > 80 && leitura < 100) {
        valor_base = 0.59 * leitura
        icms = valor_icms(valor_base)
        pis = valor_pis(valor_base)
        iluminacao = valor_iluminacao(valor_base)

        valor_final = valor_base + icms + pis + iluminacao

        valor_final = valor_base + icms + pis

        console.log ('\nConsumo: ',leitura,'KWh',
                    '\nValor Faturado: R$',valor_final.toFixed(2),
                    '\nBandeira: R$0,00',
                    '\nICMS: R$',icms.toFixed(2),
                    '\nPIS/COFINS: R$',pis.toFixed(2),
                    '\nTaxa de Iluminação: R$',iluminacao.toFixed(2))
    }

    //faixa acima de 100KWh
    else if (leitura >= 100) {
        valor_base = 0.59 * leitura
        icms = valor_icms(valor_base)
        pis = valor_pis(valor_base)
        iluminacao = valor_iluminacao(valor_base)
        bandeira = ((leitura / 100) - (leitura % 1)) * 8
        num_de_bandeiras = ((leitura / 100) - (leitura % 1))

        valor_final = valor_base + icms + pis + iluminacao + bandeira

        valor_final = valor_base + icms + pis

        console.log ('\nConsumo: ',leitura,'KWh',
                    '\nValor Faturado: R$',valor_final.toFixed(2),
                    '\nBandeira: R$',bandeira.toFixed(2),'(',num_de_bandeiras,' bandeiras)',
                    '\nICMS: R$',icms.toFixed(2),
                    '\nPIS/COFINS: R$',pis.toFixed(2),
                    '\nTaxa de Iluminação: R$',iluminacao.toFixed(2))
    }
}

principal()