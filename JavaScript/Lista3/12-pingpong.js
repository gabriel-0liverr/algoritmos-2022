const prompt = require('prompt-sync')()

function main() {
    console.log('Insira os pontos de cada jogador, por rodada...\n(1 ou 2 pontos por rodada)')

    let jogador1 = 0
    let jogador2 = 0
    let rodada = 0
    let vencedor = 0
    let diferenca = 0

    while (vencedor < 21) {
        rodada++

        console.log('\nRodada ',rodada)
        let j1 = Number(prompt('Jogador 1: '))
        let j2 = Number(prompt('Jogador 2: '))

        jogador1 = jogador1 + j1
        jogador2 = jogador2 + j2
        
        vencedor = jogador1 > jogador2 ? jogador1 : jogador2
    }
    while (diferenca < 2) {
        rodada++

        console.log('\nRodada ',rodada)
        let j1 = Number(prompt('Jogador 1: '))
        let j2 = Number(prompt('Jogador 2: '))

        jogador1 = jogador1 + j1
        jogador2 = jogador2 + j2

        diferenca = jogador1 > jogador2 ? (jogador1 - jogador2) : (jogador2 - jogador1)
        
        vencedor = jogador1 > jogador2 ? jogador1 : jogador2
    }

    console.log('\nPontos Jogador 1: ',jogador1,'\nPontos Jogador 2: ',jogador2,'\nVencedor: ',vencedor)
}

main()