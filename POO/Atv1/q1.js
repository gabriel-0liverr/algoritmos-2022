const prompt = require('prompt-sync')()

function main()
{
    let num = Number(prompt('Insira um número inteiro: '))
    
    num_ant = num - 1
    num_pos = num + 1

    console.log('\nNumero digitado: ',num,
    '\nNumero antecessor: ',num_ant,
    '\nNúmero posterior: ',num_pos)
}
main()