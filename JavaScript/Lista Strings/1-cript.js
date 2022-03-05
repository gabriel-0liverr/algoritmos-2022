const prompt = require('prompt-sync')()

function main() {
    const frase = prompt('Insira uma frase: ')
    let nova_frase = ''
    let frase_invertida = ''

    for (let contador = 0; contador != frase.length; contador++){
        
        if (frase[contador] == 'A' || frase[contador] == 'E' || frase[contador] == 'I' || frase[contador] == 'O' || frase[contador] == 'U') {
            nova_frase += frase[contador]          
        }
        if (frase[contador] != 'A' && frase[contador] != 'E' && frase[contador] != 'I' && frase[contador] != 'O' && frase[contador] != 'U') {
            if (frase[contador] == 'a' || frase[contador] == 'e' || frase[contador] == 'i' || frase[contador] == 'o' || frase[contador] == 'u') {
                nova_frase += frase[contador]          
            }
            if (frase[contador] != 'a' && frase[contador] != 'e' && frase[contador] != 'i' && frase[contador] != 'o' && frase[contador] != 'u') {
                nova_frase += '#'
            }
            
        }
        
    }
    for (let contador = nova_frase.length - 1; contador != -1; contador--){
        frase_invertida += nova_frase[contador]
    }

    console.log('Frase criptografada: ',frase_invertida)
}
main()