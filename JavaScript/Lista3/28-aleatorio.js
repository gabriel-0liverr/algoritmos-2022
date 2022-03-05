const prompt = require('prompt-sync')()

function main() {
    console.log('## Tente acertar o número aleatório ##\n')

    aleatorio = Number(Math.floor(Math.random() * 10000))
    console.log('Número aléatorio gerado!\n')

    let num
    let contador = 0
    while (num != aleatorio) {
        num = Number(prompt('Digite: '))

        if (num < aleatorio) {
            console.log('Maior!\n')
        }
        else if (num > aleatorio) {
            console.log('Menor!\n')
        }
        contador++
    }
    console.log('\nIncrível, você acertou! Faz de novo, faz?!',
    'Nº de Tentativas: ',contador)
}
main()