const prompt = require('prompt-sync')()

function main() {
    console.log('## Pesquisa de Audiência ##\n')

    let canal
    let total = 0
    let aud2 = 0
    let aud4 = 0
    let aud5 = 0
    let aud7 = 0
    let aud10 = 0
    let aud_indecisos = 0
    while (canal != 0) {
        console.log('\n- Canais(2,4,5,7,10) -')
        canal = Number(prompt('Informe o canal: '))

        if (canal != 0) {
            let pessoas = Number(prompt('Informe número de pessoas assistindo: '))

                if (canal == 2 && canal != 4 && canal != 5 && canal != 7 && canal != 10) {
                    aud2 += pessoas
                    }
                if (canal != 2 && canal == 4 && canal != 5 && canal != 7 && canal != 10) {
                    aud4 += pessoas
                    }
                if (canal != 2 && canal != 4 && canal == 5 && canal != 7 && canal != 10) {
                    aud5 += pessoas
                    }
                if (canal != 2 && canal != 4 && canal != 5 && canal == 7 && canal != 10) {
                    aud7 += pessoas
                    }
                if (canal != 2 && canal != 4 && canal != 5 && canal != 7 && canal == 10) {
                    aud10 += pessoas
                    }
                if (canal != 2 && canal != 4 && canal != 5 && canal != 7 && canal != 10){
                    aud_indecisos += pessoas
                    }
            total += pessoas
            }
        if (canal == 0){}
    }
    percent2 = (100 * aud2) / total
    percent4 = (100 * aud4) / total
    percent5 = (100 * aud5) / total
    percent7 = (100 * aud7) / total
    percent10 = (100 * aud10) / total
    percent_indecisos = (100 * aud_indecisos) / total

    console.log('\n-- Resultado --\n\n',
    '\nCanal 2 ----------> ',percent2,'%',
    '\nCanal 4 ----------> ',percent4,'%',
    '\nCanal 5 ----------> ',percent5,'%',
    '\nCanal 7 ----------> ',percent7,'%',
    '\nCanal 10 ---------> ',percent10,'%',
    '\nIndecisos/Outros -> ',percent_indecisos,'%')
}
main()