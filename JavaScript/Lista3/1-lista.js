const prompt = require('prompt-sync')()

function main() {
    console.log('\nInsira valores e descubra seus divisores...',
    '\nPara encerrar o programa digite - 0 -\n')
    
    let num

    while (num!= 0){
        let divisor = 1
        num = Number(prompt('=> '))

        if (num!= 0) {
        console.log('\nNúmero: ',num,'\nDivisores: ')

            while (divisor!= num) {
                resto = num % divisor

                if (resto == 0) {
                console.log(divisor)
                } else {}
                
                divisor++
            }
        }
    }
    console.log('\nPrograma encerrado!')
}

main()