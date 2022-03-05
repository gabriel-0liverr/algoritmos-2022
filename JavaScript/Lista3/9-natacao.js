const prompt = require('prompt-sync')()

function main() {
    console.log('## Competição de Natação ##\n\n',
    'Indique o número da prova e a quantidade de nadadores\n',
    'Para encerrar indique Prova = 0 e Nadadores = 0\n')

    let prova
    let qnt_nadadores
    let pontos_a = 0
    let pontos_b = 0

    while (prova != 0 && qnt_nadadores != 0) {
        prova = Number(prompt('Prova: '))
        qnt_nadadores = Number(prompt('Quantidade de Nadadores: '))

        while (qnt_nadadores != 0) {
            console.log('\n')
            let nome = prompt('Nome: ')
            let classificação = Number(prompt('Classificação(º): '))
            let tempo = prompt('Tempo: ')
            let clube = prompt('Clube(A ou B):')
            qnt_nadadores--

                //caso clube A
                if (clube == 'A' || clube == 'a') {
                    if (classificação == 1) {
                        pontos_a += 9
                    }
                    if (classificação == 2) {
                        pontos_a += 6
                    }
                    if (classificação == 3) {
                        pontos_a += 4
                    }
                    if (classificação == 4) {
                        pontos_a += 3
                    }
                }

                //caso clube b
                if (clube == 'B' || clube =='b') {
                    if (classificação == 1) {
                        pontos_b += 9
                    }
                    if (classificação == 2) {
                        pontos_b += 6
                    }
                    if (classificação == 3) {
                        pontos_b += 4
                    }
                    if (classificação == 4) {
                        pontos_b += 3
                    }
                }
        }
        qnt_nadadores = 1
    }
    console.log('\n\nPontos Totais...',
    '\nClube A ------ ',pontos_a,
    '\nClube B ------ ',pontos_b)
    
    if (pontos_a > pontos_b) {
        console.log('Vencedor: Clube A!')
    }
    if (pontos_b > pontos_a) {
        console.log('Vencedor: Clube B!')
    }
    if (pontos_a == pontos_b) {
        console.log('Empate!')
    }
}
main()