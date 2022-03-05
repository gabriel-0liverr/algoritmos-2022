const prompt = require('prompt-sync')()

function main() {
    console.log('## Pesquisa de 100 Pessoas ##\nSelecione as Opções...\n')

    let pessoa = 0
    let contador = 100
    let contador_mulheres = 0
    let contador_homens = 0
    let total_idade_mulheres = 0
    let total_idade_homens = 0
    let n_mulheres_solteiras = 0
    let n_homens_solteiros = 0
    let n_30_divorciadas = 0

    while (contador != 0) {
        pessoa ++
        console.log('\nPessoa ',pessoa,'\n1 - Masculino  |  2 - Feminino')
        let sexo = Number(prompt('Sexo: '))
        let idade = Number(prompt('Idade: '))
        console.log('1 - Casado  |  2 - Solteiro  |  3 - Divorciado  |  4 - Viúvo')
        let estado = Number(prompt('Estado Civil: '))

            if (sexo == 2) { //sexo feminino
                total_idade_mulheres += idade
                contador_mulheres++

                if (estado == 2) { //estado solteira
                    n_mulheres_solteiras++
                }
                
                if (idade > 30 && estado == 3) {
                    n_30_divorciadas++
                }
            }
            if (sexo == 1) { //sexo masculino
                total_idade_homens += idade
                contador_homens++

                if (estado == 2) { //estado solteiro
                    n_homens_solteiros++
                }
            }
        contador--  
    }
    med_idade_mulheres = total_idade_mulheres / contador_mulheres
    med_idade_homens = total_idade_homens / contador_homens
    percent_homens_solt = (100 * n_homens_solteiros) / contador_homens
    percent_mulheres_solt = (100 * n_mulheres_solteiras) / contador_mulheres

    console.log('\nResultado...\nMédia de idade das mulheres: ',med_idade_mulheres.toFixed(1),
    '\nMédia de idade dos homens: ',med_idade_homens.toFixed(1),
    '\nO percentual de homens solteiros: ',percent_homens_solt.toFixed(1),
    '\nO percentual de mulheres solteiras: ',percent_mulheres_solt.toFixed(1),
    '\nA quantidade de mulheres divorciadas acima de 30 anos: ',n_30_divorciadas)
}
main()