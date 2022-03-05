const prompt = require('prompt-sync')()

function main() {
    const frase = prompt('Insira uma frase: ')
    let resultado = ''

    for (let contador = 0; contador != frase.length; contador++){
        if (frase[contador] == ' ') {
            resultado += '\n'
        } else {
            resultado += frase[contador]
        }
    }
    console.log('\nResultado:\n',resultado)
}
main()