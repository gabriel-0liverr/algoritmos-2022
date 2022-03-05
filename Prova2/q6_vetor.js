const prompt = require('prompt-sync')()

function main() {
    const n = Number(prompt('Digite quantos valores deseja inserir: '))

    const vetor = Array(n)

    for (let i = 0; i < n; i++){
        vetor[i] = Number(prompt(`Valor ${i+1}: `))
    }

    //média
    media_final = media(vetor)
    console.log('\nMédia dos valores: ',media_final)

    //maior valor
    valor_maior = maior_valor(vetor)
    console.log('Maior valor: ',valor_maior)

    //menor valor
    valor_menor = menor_valor(vetor)
    console.log('Menor valor: ',valor_menor)

    //positivos
    num_positivos = positivos(vetor)
    console.log('Quantidade de positivos: ',num_positivos)

    //negativos
    num_negativos = negativos(vetor)
    console.log('Quantidade de negativos: ',num_negativos)

    //repetições
    if (tem_repetidos(vetor) == true) {
        console.log('Há valores repetidos')
    } else if (tem_repetidos(vetor) == false){
        console.log('Não há repetições')
    }
}
main()


function tem_repetidos(vetor){
    let valor
    let contagem

    for (let i = 0; i < vetor.length; i++){
        contagem = 0
        valor = vetor[i]

        for (let j = 0; j < vetor.length; j++) {
            if (valor == vetor[j]) {
                contagem++
            }
        }
        
        if (contagem > 1) {
            return true
        }
    }
    return false
}

function media(vetor) {
    let total = 0

    for (let i = 0; i < vetor.length; i++){
        total += vetor[i]
    }
    result = total/vetor.length

    return result
}

function maior_valor(vetor){
    let valor
    let contagem

    for (let i = 0; i < vetor.length; i++){
        contagem = 0
        valor = vetor[i]

        for (let j = 0; j < vetor.length; j++) {
            if (valor >= vetor[j]) {
                contagem++
            }
        }
        
        if (contagem == vetor.length) {
            return valor
        }
    }
}

function menor_valor(vetor){
    let valor
    let contagem

    for (let i = 0; i < vetor.length; i++){
        contagem = 0
        valor = vetor[i]

        for (let j = 0; j < vetor.length; j++) {
            if (valor <= vetor[j]) {
                contagem++
            }
        }
        
        if (contagem == vetor.length) {
            return valor
        }
    }
}

function positivos(vetor){
    let valor
    let contagem = 0

    for (let i = 0; i < vetor.length; i++){
        valor = vetor[i]
        if (valor > 0) {
            contagem++
        }
    }

    return contagem
}

function negativos(vetor){
    let valor
    let contagem = 0

    for (let i = 0; i < vetor.length; i++){
        valor = vetor[i]
        if (valor < 0) {
            contagem++
        }
    }

    return contagem
}