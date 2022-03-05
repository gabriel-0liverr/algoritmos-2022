const prompt = require('prompt-sync')()

console.log('Considerando um jogo\nInsira o seu horário de início (hh:mm)...')
var h1 = Number(prompt('Horas: '))
var m1 = Number(prompt('Minutos: '))

console.log('E o seu horário de término (hh:mm)...')
var h2 = Number(prompt('Horas: '))
var m2 = Number(prompt('Minutos: '))

if (h1 < h2) {
    h = h2 - h1
    m = (m1%60) + m2
    console.log('Duração do Jogo => ',h,':',m)
}
if (h1 == h2) {
    h = 0
    if (m1 > m2) {
        m = m1 - m2
        console.log('Duração do Jogo => ',h,':',m)
    } else {
        m = m2 - m1
        console.log('Duração do Jogo => ',h,':',m)
    }
}
if (h1 > h2) {
    h = (h1%24) + h2
    if (m1 > m2) {
        m = m1 - m2
        console.log('Duração do Jogo => ',h,':',m)
    } else {
        m = m2 - m1
        console.log('Duração do Jogo => ',h,':',m)
    }
}