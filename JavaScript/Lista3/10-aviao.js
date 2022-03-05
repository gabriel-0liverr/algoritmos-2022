const prompt = require('prompt-sync')()

function main() {
    console.log('## Cálculo de Decolagem ##\n',
    'Insira os dados da decolagem...\n\n')

    let contador_cont = 0
    let contador_pas = 0
    let peso_conteiners = 0
    let peso_passageiros = 0
    let bilhete
    let total_bagagem = 0

    const qnt_conteiners = Number(prompt('Número de containers: '))

        while (contador_cont != qnt_conteiners) {
            contador_cont++
            console.log('\nConteiner ',contador_cont)
            peso_conteiner = Number(prompt('Peso(kg):'))
            peso_conteiners += peso_conteiner
        }
    console.log('\nDados dos Passageiros...\nPara finalizar insira Bilhete = 0\n')
        while (bilhete != 0) {
            contador_pas++
            console.log('\nPassageiro ',contador_pas)
            bilhete = Number(prompt('Bilhete: '))
                if (bilhete != 0) {
                    peso_passageiros += 70
                    let qnt_bagagem = Number(prompt('Quantidade de bagagens: '))
                    peso_passageiros += (qnt_bagagem*10)
                    total_bagagem += qnt_bagagem
                }
                else if (bilhete == 0) {
                    contador_pas--
                }
        }
    peso_combust = 500000 - (peso_passageiros + peso_conteiners)
    qnt_combust = peso_combust / 1.5

    console.log('\n- Finalizado -',
    '\nQuantidade de passageiros: ',contador_pas,
    '\nQuantidade total de volume de bagagem: ',total_bagagem,
    '\nPeso dos passageiros: ',peso_passageiros,'Kg',
    '\nPeso de carga: ',peso_conteiners,'Kg',
    '\nQuantidade possível de combustível: ',qnt_combust.toFixed(2),'L')

    if (qnt_combust >= 10000) {
        console.log('Decolagem liberada!')
    }
    else {
        console.log('Decolagem NÃO liberada!!!')
    }
}
main()