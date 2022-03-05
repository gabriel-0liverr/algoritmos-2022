const prompt = require('prompt-sync')()

//entrada

console.log('Insira uma data(dd/mm/aaaa)...','\n')
var dia = Number(prompt('Dia: '))
var mes = Number(prompt('Mês: '))
var ano = Number(prompt('Ano: '))

//processamento e saída

if (ano < 0 || mes < 0 || dia < 0 ) {
    console.log('DATA INVÁLIDA!!!')
}

if (ano <= 2021) {
    if (mes <= 12) {
        if (mes == 2) {
                if (dia > 28) {
                console.log('DATA INVÁLIDA!!!')
                } else {
                console.log('A data ',dia,'/',mes,'/',ano,' é válida!')
            }
        } else {
            if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
                if (dia > 31) {
                    console.log('DATA INVÁLIDA!!!')
                } else {
                    console.log('A data ',dia,'/',mes,'/',ano,' é válida!')
                }
            } else {
                if (dia > 30) {
                    console.log('DATA INVÁLIDA!!!')
                } else {
                    console.log('A data ',dia,'/',mes,'/',ano,' é válida!') 
                } 
            }
        }
    } else {
        console.log('DATA INVÁLIDA!!!')
    }
}

if (ano > 2021) {
    console.log('VOCÊ É DO FUTURO?')
}