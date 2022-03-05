const prompt = require('prompt-sync')()

function horario(s){
    let hr,min
    let result = ''

    min = (s - s%60)/60
    s = s%60
    hr = (min - min%60)/60
    min = min%60

    result = hr + ':' + min + ':' + s
    return result
}

function main()
{
    let s = Number(prompt('Digite um tempo em segundos = '))

    result = horario(s)

    console.log('\nHorário(hh:mm:ss)= ',result)
}
main()