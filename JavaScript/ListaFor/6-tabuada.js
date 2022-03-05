const prompt = require('prompt-sync')()

function main() {
    console.log('## Tabuada ##\n')

    const a = Number(prompt('Insira um número: '))
    console.log('\nOperações possíveis:\n1-adição | 2-subtração | 3-multiplicação | 4-divisão')
    let op = Number(prompt('Escolha a operação: '))
    let resultado

    //adição
    if (op == 1) {
        for (let b = 1; b != 11; b++){
            resultado = a + b
            console.log(a,' + ',b,' = ',resultado)
        }
    }
    //subtração
    if (op == 2) {
        for (let b = 1; b != 11; b++){
            resultado = a - b
            console.log(a,' - ',b,' = ',resultado)
        }
    }
    //multiplicação
    if (op == 3) {
        for (let b = 1; b != 11; b++){
            resultado = a * b
            console.log(a,' x ',b,' = ',resultado)
        }
    }
    //divisão
    if (op == 4) {
        for (let b = 1; b != 11; b++){
            resultado = a / b
            console.log(a,' : ',b,' = ',resultado)
        }
    }
}

main()