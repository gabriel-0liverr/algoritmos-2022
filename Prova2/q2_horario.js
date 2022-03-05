const prompt = require('prompt-sync')()

function main() {
    const hora = prompt('Insira um horário (hh:mm:ss): ')
    let resultado = ''
    let unid = 0

    for (let contador = 0; contador != hora.length; contador++ ){
        if (hora[contador] == ':') {
            unid++
            if (unid == 1){
                resultado += ' hora(s), '
            }
            if (unid == 2) {
                resultado += ' minuto(s) e '
            }
        } else {
            resultado += hora[contador]
        }
    }
    resultado += ' segundo(s)'
    console.log('\nResultado: ',resultado)
}
main()