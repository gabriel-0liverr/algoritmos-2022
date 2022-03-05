const prompt = require('prompt-sync')()

function main()
{
    console.log('Números de 1 à 100\nDeseja iniciar o programa? ( 1 - sim | 2 - não )')
    let op = Number(prompt('-> '))

    console.log('...')

    if (op == 1) {
        for(let num = 1; num <= 100; num++){
            console.log(num)
        }
        console.log('Programa encerrado!')
    } else {
        console.log('Programa encerrado!')
    }

}
main()