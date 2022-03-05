const prompt = require('prompt-sync')()

function hexa(x,y) {
    if (x == 10) {
        y += 'A'
    }
    else if (x == 11) {
        y += 'B'
    }
    else if (x == 12) {
        y += 'C'
    }
    else if (x == 13) {
        y += 'D'
    }
    else if (x == 14) {
        y += 'E'
    }
    else if (x == 15) {
        y += 'F'
    }
    else {
        y += x
    }
    return y
}

function main() {
    console.log('## Conversor de Base ##\n')

    const decimal = Number(prompt('Insira um número de base Decimal: '))
    
    //calculo binario
    let binario = ''
    let quociente = decimal
    let resto
    while (quociente >= 2) {
        resto = (quociente % 2)
        quociente = (quociente / 2) - ((quociente / 2) %1)

        binario += resto
    }
    if (quociente < 2 && quociente >= 1) {
        binario += 1
    }
    else if (quociente <= 0) {
        binario += 0
    }
    binario = binario.split('').reverse().join('')
    
    //calculo hexadecimal
    let hexadecimal = ''
    let quo = decimal
    let rest = 0
    while (quo >= 16) {
        rest = (quo % 16)
        quo = (quo / 16) - ((quo / 16) %1)

        hexadecimal = hexa(rest,hexadecimal)
    }
    hexadecimal = hexa(quo,hexadecimal)
    hexadecimal = hexadecimal.split('').reverse().join('') 
    
    //resultado
    console.log('Em base Binária: ',binario,'\nEm base Hexadecimal: ',hexadecimal)
}
main()