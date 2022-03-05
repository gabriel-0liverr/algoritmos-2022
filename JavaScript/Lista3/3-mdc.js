const prompt = require('prompt-sync')()

function main() {
    const num1 = Number(prompt('Insira um primeiro número: '))
    const num2 = Number(prompt('Insira um segundo número: '))

    let num = num1 > num2 ? num2 : num1

    while (!(num1 % num == 0 && num2 % num == 0)){
        num--
    }

    console.log('MDC = ',num)
}

main()