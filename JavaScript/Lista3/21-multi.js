const prompt = require('prompt-sync')()

function main() {
    console.log('## Multiplicação ##\nInsira...')

    multiplicando = Number(prompt('Multiplicando: '))
    multiplicador = Number(prompt('Multiplicador: '))
    let contador = 1
    let produto = multiplicando

    while (contador < multiplicador) {
        produto += multiplicando
        contador++
    }
    console.log('\n',multiplicando,' X ',multiplicador,' = ',produto)
}
main()