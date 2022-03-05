const prompt = require('prompt-sync')()

function main()
{
    let s = (prompt('Digite uma string: '))
    let str_final = ''

    for (i = 0; i < s.length; i++){
        if (s[i] == 'a'||s[i] == 'e'||s[i] == 'i'||s[i] == 'o'||s[i] == 'u'){
            str_final += '_'
        }
        else if (s[i] == 'A'||s[i] == 'E'||s[i] == 'I'||s[i] == 'O'||s[i] == 'U'){
            str_final += '_'
        }
        else {
            str_final += s[i]
        }
    }
    console.log('\nString final: ',str_final)
}
main()