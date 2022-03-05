const prompt = require('prompt-sync')()

//entrada

var ang = Number(prompt('Insira um ângulo entre 0° e 360°: '))

//processamento e saída

if (ang < 0 || ang > 360) {
    console.log('VALOR INVÁLIDO!')
}

if (ang <= 90 && ang >= 0) {
    console.log('O ângulo ',ang,'° pertence ao primeiro quadrante!')
}

if (ang > 90 && ang <= 180) {
    console.log('O ângulo ',ang,'° pertence ao segundo quadrante!')
}

if (ang > 180 && ang <= 270) {
    console.log('O ângulo ',ang,'° pertence ao terceiro quadrante!')
}

if (ang > 270 && ang <= 360) {
    console.log('O ângulo ',ang,'° pertence ao quarto quadrante!')
}