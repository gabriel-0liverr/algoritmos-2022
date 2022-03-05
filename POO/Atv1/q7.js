const prompt = require('prompt-sync')()

function main()
{
    console.log('Considerando um vetor de 5 posições\ninsira valores para cada posição...')
    let vetor = [5]
    
    for (i = 0; i <= 4; i++) {
        console.log('\nPosição ',i+1,'...')
        vetor[i] = Number(prompt())
    }
    console.log('\nVETOR - LISTAGEM...')
    for (i = 0; i <= 4; i++){
        console.log('\nPosição ',i+1,': ',vetor[i])
    }
}
main()