const prompt = require('prompt-sync')()

//entrada

var num = Number(prompt('Insira um número entre 0 e 100: '))

//processamneto e saída

if (num == 1) {
    console.log(num,' não é primo!')
}

if (num > 1){
    if (num == 2) {
        console.log(num,' é primo!')
    
    } else {
    
        if (num % 2 == 0 || num % 3 == 0 || num % 5 == 0 || num % 7 == 0) {
            console.log(num,' não é primo!')
        } else {
            console.log(num,' é primo!')
        }
    }
}
if (num < 0) {
    console.log('ERRO!!! VALOR INVÁLIDO!!!')
}
if (num == 0) {
    console.log(num,' não é primo!')
}