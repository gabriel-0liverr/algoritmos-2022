const prompt = require('prompt-sync')()

function por_cento(p,x){
    let result = (x*p)/100
    return result
}

function main()
{
    console.log('Atribua valores à...')
    let p = Number(prompt('P = '))
    let x = Number(prompt('X = '))

    result = por_cento(p,x)

    console.log('\n',p,'% de ',x,' = ',result)
}
main()