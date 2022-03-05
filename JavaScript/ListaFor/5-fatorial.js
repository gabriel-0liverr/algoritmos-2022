const prompt = require('prompt-sync')()

function main() {
    let num = Number(prompt('Insira um número: '))
    let fatorial = 1
    for (; num != 1; num--){
        fatorial *= num
    }

    console.log('Fatorial = ',fatorial)
}

main()