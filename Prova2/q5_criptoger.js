const prompt = require('prompt-sync')()

function main() {
    const frase = prompt('Insira uma frase: ')
    let metade1 = ''
    let metade2 = ''
    let result_inicial = ''

    //quebra e inversão
    for (let i = (frase.length/2).toFixed(0)-1; i > -1; i--){
        metade1 += frase[i]
    }
    for (let i = frase.length-1; i > (frase.length/2).toFixed(0)-1; i--){
        metade2 += frase[i]
    }
    result_inicial = metade1 + metade2

    //vogais = numeros
    result_vogais = vogais_por_num(result_inicial)
    
    //numeros = **...
    result_num = num_por_ast(result_vogais)

    //consoantes avançam
    result_final = consoantes_avancam(result_num)

    console.log('\nQuebra e inversão: ',result_inicial,
    '\nVogais viram números: ',result_vogais,
    '\nNúmeros viram *: ',result_num,
    '\nResultado Final: ',result_final)
}

main()

function vogais_por_num(frase){
    let r = ''
    for (let i = 0; i < frase.length; i++){
        if (frase[i] == 'a' || frase[i] == 'A') {
            r += '1'
        }
        else if (frase[i] == 'e' || frase[i] == 'E') {
            r += '2'
        }
        else if (frase[i] == 'i' || frase[i] == 'I') {
            r += '3'
        }
        else if (frase[i] == 'o' || frase[i] == 'O') {
            r += '4'
        }
        else if (frase[i] == 'u' || frase[i] == 'U') {
            r += '5'
        }
        else {
            r += frase[i]
        }
    }
    return r
}

function num_por_ast(frase){
    let r = ''
    for (let i = 0; i < frase.length; i++){
        if (frase[i] == '1') {
            r += '*'
        }
        else if (frase[i] == '2') {
            r += '**'
        }
        else if (frase[i] == '3') {
            r += '***'
        }
        else if (frase[i] == '4') {
            r += '****'
        }
        else if (frase[i] == '5') {
            r += '*****'
        }
        else if (frase[i] == '6') {
            r += '******'
        }
        else if (frase[i] == '7') {
            r += '*******'
        }
        else if (frase[i] == '8') {
            r += '********'
        }
        else if (frase[i] == '9') {
            r += '*********'
        }
        else if (frase[i] == '0') {
            r += '#'
        }
        else {
            r += frase[i]
        }
    }
    return r
}

function consoantes_avancam(frase){
    let r = ''
    let posicao
    let x
    for (let i = 0; i < frase.length; i++){
        x = frase[i].charCodeAt(0)
        if (x >= 65 && x <= 90) {
            x += 10
            if (x > 90) {
                x = (x - 90) + 64
                r += String.fromCharCode(x)
            } else {
                r += String.fromCharCode(x)
            }
        }
        else if (x >= 97 && x <= 122) {
            x += 10
            if (x > 122) {
                x = (x - 122) + 96
                r += String.fromCharCode(x)
            } else {
                r += String.fromCharCode(x)
            }
        }
        else {
            r += frase[i]
        }
    }
    return r
}