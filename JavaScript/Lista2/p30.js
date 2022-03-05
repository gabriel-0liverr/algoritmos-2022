const prompt = require('prompt-sync')()

console.log('Insira um número')


var x = Number(prompt('x: '))


dezd = x%100
deze = (x/100) - (dezd/100)
soma = dezd + deze

if (soma * soma == x) {
    console.log(x,' obedece a característica!')
} else {
    console.log(x,' não obedece a característica!')
}