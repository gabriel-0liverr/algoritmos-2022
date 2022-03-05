const prompt = require('prompt-sync')()

function main()
{
    console.log('Informe 3 valores\n')

    let num1 = Number(prompt('Valor 1: '))
    let num2 = Number(prompt('Valor 2: '))
    let num3 = Number(prompt('Valor 3: '))
    
    //1 valor menor
    if (num1 < num2 && num1 < num3) {
        console.log('Menor valor: ',num1)
    }
    if (num2 < num1 && num2 < num3) {
        console.log('Menor valor: ',num2)
    }
    if (num3 < num2 && num3 < num1) {
        console.log('Menor valor: ',num1)
    }
    //2 valores menores
    if (num1 == num2 && num1 < num3) {
        console.log('Menores valores: ',num1)
    }
    if (num3 == num2 && num3 < num1) {
        console.log('Menores valores: ',num3)
    }
    if (num1 == num3 && num1 < num2) {
        console.log('Menores valores: ',num1)
    }
    //valores iguais
    if (num1 == num2 && num2 == num3) {
        console.log('Todos os valores são iguais!')
    }
}
main()