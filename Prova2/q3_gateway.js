const prompt = require('prompt-sync')()

function main() {
    console.log('### Gateway de Pagamento ###\nBem-vindo, lojista!\n')
    const valor_compra = Number(prompt('Insira o valor da compra: R$'))

    console.log('\nEm quantos dias gostaria de receber o pagamento?')
    const op_dias = Number(prompt('Insira quantos dias: '))

    console.log('\nOpções de pagamento: 1 - À vista  | 2 - À prazo')
    op_pagamento = Number(prompt('Digite a forma de pagamento:'))

    let desconto

    //à vista
    if (op_pagamento == 1) {
        pagamento = ' À vista'
        parcelas = '- - - - - - - -'
        if (op_dias <= 2){
            desconto = (valor_compra * 4.39)/100
        }
        if (op_dias > 2 && op_dias <= 14) {
            desconto = (valor_compra * 3.49)/100
        }
        if (op_dias > 14) {
            desconto = (valor_compra * 2.99)/100
        }
    }
    //à prazo
    if (op_pagamento == 2) {
        const num_par = Number(prompt('Digite o número de parcelas: '))
        pagamento = ' À prazo'
        parcelas = 'Nº de parcelas: ' + num_par

        if (op_dias <= 2){
            desconto = (valor_compra * (4.99 + num_par))/100
        }
        if (op_dias > 2 && op_dias <= 14) {
            desconto = (valor_compra * (3.99 + num_par))/100
        }
        if (op_dias > 14) {
            desconto = (valor_compra * (3.49 + num_par))/100
        }
    }
    // + R$ 0,40 de taxa
    desconto += 0.40

    valor_final = valor_compra - desconto

    console.log('\n\nResultado:',
    '\nValor da compra: R$',valor_compra,
    '\nForma de pagamento: ',pagamento,'\n',parcelas,
    '\nTaxa cobrada: R$',desconto.toFixed(2),
    '\nValor líquido a ser recebido: R$',valor_final.toFixed(2),
    '\nEm ',op_dias,' dias')
}
main()