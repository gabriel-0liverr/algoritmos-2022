const prompt = require('prompt-sync')()

function vezes(n,d){
    let vezes = 0
    for (i = 0; i < n.length; i++){
        if (n[i] == d) {
            vezes++
        }
    }
    return vezes
}

function main()
{
    let n = (prompt('Digite um inteiro N = '))
    let d = (prompt('Digite um dígito D (de 0 à 9) = '))
    let result

    if (0 <= d & d <= 9) {
        result = vezes(n,d)
        console.log('\n',d,' se encontra ',result,' vezes em ',n)
    } else {
        console.log('\nInteiro D INVÁLIDO!')
    }
}
main()