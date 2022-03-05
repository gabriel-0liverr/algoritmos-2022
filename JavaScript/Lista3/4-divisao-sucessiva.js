const prompt = require('prompt-sync')()

function main() {
    let num = Number(prompt('Insira um número: '))

    while (num >= 1) {
        num = num / 2
    }

    console.log('\nResultado final = ',num)
}

main()