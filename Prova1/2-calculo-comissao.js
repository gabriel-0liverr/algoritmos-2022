const prompt = require('prompt-sync')()

function principal() {
    console.log('### Cálculo de Comissão ###','\n\nInsira seus dados...')

    //entrada
    nome = prompt('Nome completo: ')
    vendas = Number(prompt('Total de vendas do mês (R$): R$'))
    salario_fixo = 1100
    
    //processamento e saídas

    if (vendas <= 5000 && vendas >= 0) { //faixa sem direito a comissão
        comissao = 0
        salario_final = salario_fixo + comissao

        console.log ('\n',nome,', você se enquadrou na faixa sem direito a comissão.',
        '\nSalário fixo: R$',salario_fixo,'\nComissão: R$',comissao,
        '\nSalário final: R$',salario_final)

    }
    else if (vendas > 5000 && vendas <= 10000) { //faixa de 5%
        comissao_5 = (vendas - 5000) * 0.05
        salario_final = salario_fixo + comissao_5

        console.log ('\n',nome,', você se enquadrou na faixa de comissão de 5%.',
        '\nSalário fixo: R$',salario_fixo,
        '\nComissão de 5%: R$',comissao_5,'\nSalário final: R$',salario_final)

    }
    else if (vendas > 10000 && vendas <= 30000) { //faixa de 10% e 5%
        comissao_5 = 250
        comissao_10 = (vendas - 10000) * 0.1
        salario_final = salario_fixo + comissao_5 + comissao_10

        console.log ('\n',nome,', você se enquadrou na faixa de comissão de 10% e 5%.',
        '\nSalário fixo: R$',salario_fixo,
        '\nComissão de 5%: R$',comissao_5,'\nComissão de 10%: R$',comissao_10,
        '\nSalário final: R$',salario_final)

    }
    else if (vendas > 30000) { //faixa de 20% sobre o total
        comissao_20 = vendas * 0.2
        salario_final = salario_fixo + comissao_20

        console.log ('\n',nome,', você se enquadrou na faixa de comissão de 20%.',
        '\nSalário fixo: R$',salario_fixo,
        '\nComissão de 20%: R$',comissao_20,'\nSalário final: R$',salario_final)

    }
}

principal()