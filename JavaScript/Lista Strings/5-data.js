const prompt = require('prompt-sync')()

function qual_mes(mes) {
    let result
    if (mes == '01'){
        result = 'janeiro de '
    }
    if (mes == '02'){
        result = 'fevereiro de '
    }
    if (mes == '03'){
        result = 'março de '
    }
    if (mes == '04'){
        result = 'abril de '
    }
    if (mes == '05'){
        result = 'maio de '
    }
    if (mes == '06'){
        result = 'junho de '
    }
    if (mes == '07'){
        result = 'julho de '
    }
    if (mes == '08'){
        result = 'agosto de '
    }
    if (mes == '09'){
        result = 'setembro de '
    }
    if (mes == '10'){
        result = 'outubro de '
    }
    if (mes == '11'){
        result = 'novembro de '
    }
    if (mes == '12'){
        result = 'dezembro de '
    }
    return result
}

function main() {
    const data = prompt('Insira a data de hoje(DD/MM/AAAA): ')
    let resultado = ''
    let mes = ''
    let contador = 0

    //dia
    while (data[contador] != '/'){
        resultado += data[contador]
        contador++
    }
    contador++
    resultado += ' de '

    //mês
    while (data[contador] != '/') {
        mes += data[contador]
        contador++
    }
    contador++
    mes = qual_mes(mes)
    resultado += mes

    //ano
    while (contador != data.length) {
        resultado += data[contador]
        contador++
    }

    //resultado final
    console.log('\nResultado:\n',resultado)
}
main()