const prompt = require('prompt-sync')()

function main() {
    console.log('## Pesquisa Eleitoral ##\n')

    let voto
    let pessoas = 0
    let total = 0
    let serra = 0
    let dilma = 0
    let ciro = 0
    let indecisos = 0
    let outros = 0
    let nulo = 0

    while (voto != -1) {
        console.log('\n# |Serra(45)|Dilma(13)|Ciro(23)|Indeciso(99)|',
                    '\n# |Outros(98)| Nulo/Branco(0) |Encerrar(-1)|')
        voto = Number(prompt('Informe sua intenção de voto: '))

        if (voto != -1) {
            pessoas ++

                if (voto == 45 && voto != 13 && voto != 23 && voto != 99 && voto != 98 && voto != 0) {
                    serra += pessoas
                    }
                if (voto != 45 && voto == 13 && voto != 23 && voto != 99 && voto != 98 && voto != 0) {
                    dilma += pessoas
                    }
                if (voto != 45 && voto != 13 && voto == 23 && voto != 99 && voto != 98 && voto != 0) {
                    ciro += pessoas
                    }
                if (voto != 45 && voto != 13 && voto != 23 && voto == 99 && voto != 98 && voto != 0){
                    indecisos += pessoas
                    }
                if (voto != 45 && voto != 13 && voto != 23 && voto != 99 && voto == 98 && voto != 0) {
                    outros += pessoas
                    }
                if (voto != 45 && voto != 13 && voto != 23 && voto != 99 && voto != 98 && voto == 0) {
                    nulo += pessoas
                    }
            total += pessoas
            }
        if (voto == -1){}
    }
    percent_serra = (100 * serra) / total
    percent_dilma = (100 * dilma) / total
    percent_ciro = (100 * ciro) / total
    percent_indecisos = (100 * indecisos) / total
    percent_outros = (100 * outros) / total
    percent_nulo = (100 * nulo) / total

    console.log('\n-- Resultado --\n\n',
    '\nSerra ------------> ',percent_serra.toFixed(1),'%',
    '\nDilma ------------> ',percent_dilma.toFixed(1),'%',
    '\nCiro -------------> ',percent_ciro.toFixed(1),'%',
    '\nIndecisos --------> ',percent_indecisos.toFixed(1),'%',
    '\nOutros -----------> ',percent_outros.toFixed(1),'%',
    '\nBranco/Nulo ------> ',percent_nulo.toFixed(1),'%',
    '\n\nTotal de entrevistados: ',total)

    if (percent_serra > 50 || percent_dilma > 50 || percent_ciro > 50) {
        console.log('Segundo Turno: Improvável!')
    } else {
        console.log('Segundo Turno: Provável!')        
    }
}
main()