const prompt = require('prompt-sync')()

function main() {
    const x = Number(prompt('Insira um número para X: '))

    console.log('\nInsira valores...\n')

    let y
    let anterior = 0
    
    while (y!= x){
        num = Number(prompt('=> '))
        y = num + anterior

        anterior = num
    }
    console.log('\n',num,' + ',anterior,' = ',x,'\nOperação encerrada!')
}

main()