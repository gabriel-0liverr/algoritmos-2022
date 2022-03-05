const prompt = require('prompt-sync')()

function main()
{
    console.log('...Conversor Dólar para real...\n')
    let dol = Number(prompt('Insira um valor em dólar: $'))
    
    cotacao = 5.39
    real = dol * 5.39

    console.log('\nCotação: ',cotacao,
    '\nValor convertido: R$',real.toFixed(2))
}
main()