const prompt = require('prompt-sync')()

//entrada
var latao = Number(prompt('Insira uma determinada quantidade de Latão em kg: '))

//processamento
cobre = latao * 0.7
zinco = latao * 0.3

//saída
console.log('Para se obter ',latao,'kg de Latão são necessários: ','\n',
cobre,'kg de Cobre e ',zinco,'kg de Zinco')