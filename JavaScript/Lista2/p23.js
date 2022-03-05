const prompt = require('prompt-sync')()

console.log('Insira duas datas (dd/mm/aaaa)\n')

var d1 = Number(prompt('Dia: '))
var m1 = Number(prompt('Mês: '))
var a1 = Number(prompt('Ano: '))
console.log(d1,'/',m1,'/',a1)

var d2 = Number(prompt('Dia: '))
var m2 = Number(prompt('Mês: '))
var a2 = Number(prompt('Ano: '))
console.log(d2,'/',m2,'/',a2)


if (a1 > a2) {
    console.log('Data mais recente: ',d1,'/',m1,'/',a1)

}
if (a1 < a2) {
    console.log('Data mais recente: ',d2,'/',m2,'/',a2)

}
if (a1 == a2) {
    if (m1 > m2) {
        console.log('Data mais recente: ',d1,'/',m1,'/',a1)
    }
    if (m1 < m2) {
        console.log('Data mais recente: ',d2,'/',m2,'/',a2)
    }
    if (m1 == m2) {
        if (d1 > d2) {
            console.log('Data mais recente: ',d1,'/',m1,'/',a1)
        }
        if (d1 < d2) {
            console.log('Data mais recente: ',d2,'/',m2,'/',a2)
        }
        if (d1 == d2) {
            console.log('As datas são iguais!')
        }
    }
}