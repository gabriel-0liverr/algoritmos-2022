const prompt = require('prompt-sync')()

function main() {
    console.log('## Divisão ##\nInsira...')

    dividendo = Number(prompt('Dividendo: '))
    divisor = Number(prompt('Divisor: '))
    let quociente = 0 
    let resto = dividendo

    while (resto >= divisor) {
        resto -= divisor

        quociente++
    }
    console.log('\n',dividendo,' : ',divisor,' = ',quociente,
    '\nResto = ',resto)
}
main()