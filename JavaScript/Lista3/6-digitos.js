const prompt = require('prompt-sync')()

function main() {
    const num_original = Number(prompt('Insira um número: '))

    let num_digitos = 0
    let num = num_original

    while (num > 0) {
        num = num / 10
        num = num - num % 1
        num_digitos++
    }

    console.log('\n',num_original,' possui ',num_digitos,' digitos.')
}

main()