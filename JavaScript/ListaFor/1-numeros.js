const prompt = require('prompt-sync')()

function main() {
    const num = Number(prompt('Insira um número: '))

    for (let contador = 1; contador != num + 1; contador++){
        console.log(contador)
    }
}

main()