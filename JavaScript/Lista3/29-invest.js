const prompt = require('prompt-sync')()

function main() {
    console.log('## Calculador de Investimento ##\n')

    let capital_inicial = Number(prompt('Insira o capital a ser investido mensalmente: R$'))
    let taxa = Number(prompt('Insira a taxa mensal(%): '))
    let opcao = 'sim'
    let capital = capital_inicial

    while (opcao == 'sim' || opcao == 'Sim') {
        let contador = 1

        while (contador != 12){
            capital = capital * ((taxa/100)+1)
            capital += capital_inicial            
            contador++
        }
        console.log('Saldo de investimento após 1 ano: R$',capital,
        '\nDeseja processar mais um ano (Sim/Não) ?')
        opcao = prompt('-> ')
    }
}
main()