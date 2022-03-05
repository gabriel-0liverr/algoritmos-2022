const prompt = require('prompt-sync')()

function main()
{
    console.log('Considerando um vetor de 20 posições\ninsira valores para cada posição...')
    let vetor = [20]
    let num_pares = 0
    
    for (i = 0; i < 20; i++) {
        console.log('\nPosição ',i+1,'...')
        vetor[i] = Number(prompt())
    }
    console.log('\nVETOR - LISTAGEM...')
    for (i = 0; i < 20; i++){
        console.log('\nPosição ',i+1,': ',vetor[i])

        if ((vetor[i]%2) == 0) {
            num_pares++
        }
        if (vetor[i] == 0) {   
            num_pares--         
        }
    }
    console.log('\n',num_pares,' números pares no VETOR')
}
main()