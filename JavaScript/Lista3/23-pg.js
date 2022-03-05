const prompt = require('prompt-sync')()

function main() {
    console.log('## Progressão Geométrica ##\n')

    const razao = Number(prompt('Insira a razão: '))
    termo1 = Number(prompt('Insira o primeiro termo: '))
    let termo = termo1
    n = Number(prompt('Insira o número de termos que quer descobrir: '))
    let contador = 1

    while (contador <= n) {
        console.log('A',contador,': ',termo)
        termo *= razao
        contador++
    }
}
main()