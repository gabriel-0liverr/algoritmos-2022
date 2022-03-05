const prompt = require('prompt-sync')()

function main()
{
    let s = (prompt('Digite uma string: '))
    let a = prompt('Digite um caractere que se encontra na string: ')
    let b = prompt('Digite um outro caractere aleatório: ')
    let str_final = ''

    for (i = 0; i < s.length; i++){
        if (s[i] == a){
            str_final += b
        } else {
            str_final += s[i]
        }
    }
    console.log('\nString final: ',str_final)
}
main()