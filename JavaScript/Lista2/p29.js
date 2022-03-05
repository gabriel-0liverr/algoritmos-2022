const prompt = require('prompt-sync')()

console.log('Insira um número de 4 dígitos')


var x = Number(prompt('x: '))

raiz = Math.sqrt(x)
dezd = x%100
deze = (x/100) - (dezd/100)

if (raiz == dezd + deze) {
    console.log(x,' é um quadrado perfeito!')
}
else {
    console.log(x,' não é um quadrado perfeito!')
}