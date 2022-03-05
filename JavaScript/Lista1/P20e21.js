const prompt = require('prompt-sync')()

console.log('...Conversor de Temperatura V1.0...','\n','Selecione a conversão que deseja realizar','\n')
console.log('1 - °C para °F','\n','2 - °F para °C','\n','Qualquer outro botão - Sair')

//entrada
var opcao = Number(prompt('Digite a opção: '))

//processamento
if (opcao == 1) {
    var c = Number(prompt('Insira a t°C = '))
    var f = (9 * c + 160)/5
    //saída
    console.log('t°F = ',f)
}
//processamento
if (opcao == 2) {
    var f = Number(prompt('Insira a t°F = '))
    var c = (5 * f - 160)/9
    //saída
    console.log('t°C = ',c)
}
//saída
console.log('Programa finalizado!')