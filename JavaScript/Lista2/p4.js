const prompt = require('prompt-sync')()

//entrada

var num = Number(prompt('Insira um número de dois dígitos: '))

//processamento e saída

var und = num%10
    n = (num - num%10)/10

var dzn = n%10

if (und == dzn) {
    console.log('Os dois dígitos são iguais!')
}
else {
    console.log('Os dois dígitos são diferentes!')
}