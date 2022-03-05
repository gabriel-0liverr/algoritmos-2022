const prompt = require('prompt-sync')()

function main() {
    let x = Number(prompt('Insira um número para X: '))
    let n = Number(prompt('Insira um número para N: '))

    while (n > 2) {
        x = x / n
        console.log('\nX / N = ',x)

        n--
        console.log('N - 1 = ',n)
    }
}

main()