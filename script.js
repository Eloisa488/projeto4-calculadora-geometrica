option = prompt(`
    escolha uma das opçoes 
    1 - calcular a area do triangulo 
    2 - calcular a area do retangulo 
    3 - calcular a area do quadrado
    4 - calcular5 a area do trapezio 
    5 - calcular a area do circulo 
    6 - sair 
    `)
function calcularareadotriangulo(base,altura) {
    return (base*altura)/2
}
function calcularareadoRetangulo(base,altura) {
    return (base*altura)
}
function calcularareadoquadrado(lado) {
    return lado * lado
}
function calcularareadotrapezio(baseMaior,baseMenor,altura) {
    return (baseMaior + baseMenor) * altura / 2
}
function calcularareadocirculo(raio) {
    return  3.14 * (raio * raio)
}
do {
    switch(option) {
        case '1':
            let base = parseInt(prompt('digite a base '))
            let altura = parseInt(prompt('digite a altura '))
            alert(calcularareadotriangulo(base,altura))
            break
        case '2':
            let base1 = parseInt (prompt('digite a base '))
            let altura1 = parseInt(prompt('digite a altura '))
            alert(calcularareadoRetangulo(base1,altura1))
            break
        case '3':
            let lado = parseInt (prompt('digite o lado '))
            alert(calcularareadoquadrado(lado))
            break
        case '4': 
            let baseMenor = parseInt(prompt('digite base menor'))
            let baseMaior = parseInt(prompt('digite base maior'))
            let altura2 = parseInt(prompt('digite altura'))
            alert(calcularareadotrapezio(baseMaior,baseMenor,altura2))
            break
        case '5':
            let raio = parseInt(prompt('digite o raio'))
            alert(`essa é a area do circulo ${areaDC(area)}`)
            break 




    }
}  while(option != '6')