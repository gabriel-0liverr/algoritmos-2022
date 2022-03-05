const prompt = require('prompt-sync')()

function main() {
    console.log('## Cálculo de Preço ##\nPara encerrar digite -fim-\n')

    let nome
    while (nome != 'fim' || nome != 'Fim') {
        nome = prompt('Nome do Produto: ')

        if (nome != 'fim' || nome != 'Fim') {
            let preco = Number(prompt('Preço P/ Unidade: R$'))
            let quantidade = Number(prompt('Quantidade: '))

            let preco_final = preco * quantidade
            
                if (quantidade > 50) {
                    preco_final = preco_final * 0.75
                    console.log('Desconto de 25%')
                }
                else if (quantidade >= 21 && quantidade <= 50) {
                    preco_final = preco_final * 0.80
                    console.log('Desconto de 20%')
                }
                else if (quantidade >= 11 && quantidade <= 20) {
                    preco_final = preco_final * 0.90
                    console.log('Desconto de 10%')
                }
                else {
                    console.log('Sem Direito Desconto!')
                }
            console.log('Preço Final: R$',preco_final,'\n')
        }
        else {
            console.log('Fim do Programa!')
        }
    }
}
main()