const prompt = require('prompt-sync')()

function main()
{
    console.log('Um ano possui 12 meses\n')

    let num = Number(prompt('Digite um número de 1 à 12: '))
    
    if (0 < num && num <= 12) {
        if (num == 1) {
            console.log('Mês: Janeiro')
        }
        if (num == 2) {
            console.log('Mês: Fevereiro')
        }
        if (num == 3) {
            console.log('Mês: Março')
        }
        if (num == 4) {
            console.log('Mês: Abril')
        }
        if (num == 5) {
            console.log('Mês: Maio')
        }
        if (num == 6) {
            console.log('Mês: Junho')
        }
        if (num == 7) {
            console.log('Mês: Julho')
        }
        if (num == 8) {
            console.log('Mês: Agosto')
        }
        if (num == 9) {
            console.log('Mês: Setembro')
        }
        if (num == 10) {
            console.log('Mês: Outubro')
        }
        if (num == 11) {
            console.log('Mês: Novembro')
        }
        if (num == 12) {
            console.log('Mês: Dezembro')
        }
    } else {
        console.log('Número inválido!')
    }
}
main()