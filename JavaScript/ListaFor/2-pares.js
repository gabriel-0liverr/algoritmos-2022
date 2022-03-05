const prompt = require('prompt-sync')()

function main() {
    const num = Number(prompt('Insira um número: '))

    console.log('\nInteiros pares de ',1,' a ',num,':\n')
    for (let contador = 1; contador != num + 1; contador++){
        if (contador % 2 == 0) {
            console.log(contador)
        } else {}
    }
}

main()