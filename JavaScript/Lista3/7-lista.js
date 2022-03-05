const prompt = require('prompt-sync')()

function main() {
    const num = Number(prompt('Insira um número: '))

    console.log('\nInsira valores até igualar ao primeiro número...\n')

    var x
    
    while (x != num){
        x = Number(prompt('x: '))

        console.log(x)
    }
    console.log('Parabéns, o valor-primeiro(',x,') é igual ao valor-último(',x,')!')
}

main()