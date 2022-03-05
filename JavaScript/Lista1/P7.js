const prompt = require('prompt-sync')()

//entrada
var n1 = Number(prompt('Insira um primeiro numero: '))

var n2 = Number(prompt('Insira um segundo numero: '))

var n3 = Number(prompt('Insira um terceiro numero: '))

//processamento
r1 = n1 + n2

if (n3>n2) {
    r2 = n3 - n2
}
else {
    r2 = n2 - n3
}

//saída
console.log('\n','A soma dos dois primeiros números é ',r1)
console.log('\n','A diferença entre os dois últimos números é ',r2)