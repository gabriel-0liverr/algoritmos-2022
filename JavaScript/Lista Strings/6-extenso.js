const prompt = require('prompt-sync')()

function main() {
    console.log('Insira uma frase contendo um algarismo: ')
    const frase = prompt()
    let result = ''

    for (let contador = 0; contador != frase.length; contador++){
        if (frase[contador] == 0) {
            result += 'zero'
        }
        if (frase[contador] == 1) {
            result += 'um'
        }
        if (frase[contador] == 2) {
            result += 'dois'
        }
        if (frase[contador] == 3) {
            result += 'três'
        }
        if (frase[contador] == 4) {
            result += 'quatro'
        }
    }
}
main()