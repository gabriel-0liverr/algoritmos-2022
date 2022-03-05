const prompt = require('prompt-sync')()

function main() {
    const num1 = Number(prompt('Insira um primeiro número: '))
    const num2 = Number(prompt('Insira um segundo número: '))

    let num = num1 > num2 ? num1 : num2

    while (!(num % num1 == 0 && num % num2 == 0)){
        num++
    }

    console.log('MMC = ',num)
}

main()