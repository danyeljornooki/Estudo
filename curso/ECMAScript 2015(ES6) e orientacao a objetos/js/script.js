/*
// 3 escopos : global, função e bloco

var serie = 'friends'

x()

function x() {
    var serie = 'Game of thrones'
    console.log('Função: ' + serie);
    
    
    if (true) {
        console.log('Bloco dentro da função: ' + serie);
    }
}

if (true) {
    console.log('global: ' + serie);
}


// diferença entre var e let o let ficara disponivel no bloco em que ele foi criado e var pode ser usado após sua criação em qualquer escopo
if (true) {
    var nome = 'Jorge'
    console.log(nome);
}

console.log(nome);

if (true) {
    let serie = 'Friends'
    console.log(serie);
    
}

console.log(serie);


// const não pode ser alterado
const SERIE = 'Friends'

function x() {
    const SERIE = 'the walking dead'
    console.log('Dentro da funcao: '+ SERIE);
    
}

x()

console.log('Escopo global: '+ SERIE);

function nome(param) {
    if (true) {
        console.log('aqui:'+ SERIE);
    }
}

nome(x())

// Template String
// se usa com crase e abre ${}
let nome = 'jorge'
// console.log('Salve ' + nome);
// console.log(`oi ${nome}, tudo certo?`);

// console.log(`7 + 7 = ${7+7}`);

function calcular(x, y) {
    return x* y
}

console.log(`A multiplicação de 8 * 8 = ${calcular(8,8)}`);


// Parametros default
function contaUmaHistoria(personagem = 'Fuba', atividade = 'passear', dono = 'Jorge') {
    document.write(`Era uma vez um cachorro chamado ${personagem}, ele adorava ${atividade} e seu dono era o ${dono} e eles viveram felizes para sempre`)
}

contaUmaHistoria()
document.write(`<br><br>`)
contaUmaHistoria('repolho', 'correr', 'Lucas')
document.write(`<br><br>`)
contaUmaHistoria(undefined, 'correr', undefined)


// Arrow function

// let quadrado = function(x = 5){
//     return x * x 
// }

// let quadrado = (x) => {
//     return x * x
// }

// let quadrado = x => x * x //return implícito

// document.write(quadrado(3))

// let parOuImpar = function (numero) {
//     if (numero % 2 === 0) {
//         return 'par'
//     } else{
//         return 'impar'
//     }
// }

// if ternario ((logica)? 'Se verdadeiro' : 'Se falso')
let parOuImpar = x => (x % 2 === 0) ? 'Par' : 'Impar'


document.write(parOuImpar(6))


// Orientação a Objetos

// Paradigma procedural
// Chamada de procedimentos (procedures)para manipulação de dados

// let a = 10
// let b = 7
// let operador = 'mult'

// let calcular = function(a, b, operador) {
//     return operador === 'mult'? console.log(a * b): ''
// }

// calcular(a, b, operador)

// Paradigma de Orientação a Objetos
// Estruturas de dados com comportamento

class Calculadora {

    constructor(){
        this.a = 10
        this.b = 7
        this.operador = 'mult'
    }

    calcular(){
        this.operador === 'mult'? console.log(this.a * this.b): ''
    }
}

Calculadora = new Calculadora()
Calculadora.calcular()


// ------OO Pilar da Abstração-------
// modelo da objeto
class ContaBancaria {
    // agencia
    // numeroConta
    // saldo
    // limite

    constructor() {
        this.agencia = 1075
        this.numeroConta = 123456
        this.saldo = 50
        this.limite = 450
    }

    // metodo
    depositar(valorDeposito) {
        this.saldo += valorDeposito
    }

    sacar(valorSaque) {
        this.saldo -= valorSaque
    }

    consultarSaldo() {
        return this.saldo
    }
}

// Entidade
let x = new ContaBancaria()
let y = new ContaBancaria()

console.log(x.consultarSaldo());

x.depositar(450)
console.log(x.consultarSaldo());

x.sacar(200)
console.log(x.consultarSaldo());

console.log(y.consultarSaldo());


// -------- Da abstração a objeto-------

// um software de marcenaria
// cadeira e sofá

// ----paradigma procedural---

// cadeira
// let qtde_pernas = 4
// let giratoria = false
*/
// let cor = 'azul'

// Array de cadeiras
let cadeiras = []

cadeiras[0] = Array()
cadeiras[0]['qtde_pernas'] = 4
cadeiras[0]['giratoria'] = false
cadeiras[0]['cor'] = 'azul'

cadeiras[1] = Array()
cadeiras[1]['qtde_pernas'] = 1
cadeiras[1]['giratoria'] = true
cadeiras[1]['cor'] = 'vermelha'

function gira_cadeira(indice) {
    if (cadeiras[indice]['giratoria'] === true) {
        document.write('Girou')
        console.log('Girou');
    } else {
        console.log('Cadeira não é giratoria');
    }
}

function adicionar_cadeira(qtde_pernas, giratoria, cor) {
    let cadeira = []

    cadeira['qtde_pernas'] = qtde_pernas
    cadeira['giratoria'] = giratoria
    cadeira['cor'] = cor


    cadeiras.push(cadeira)
}

adicionar_cadeira(3, false, 'verde')

console.log(cadeiras);

gira_cadeira(0)

// // Paradigma de OO
// class Cadeira {
//     constructor(qtde_pernas, giratoria, cor) {
//         this.qtde_pernas = qtde_pernas
//         this.giratoria = giratoria
//         this.cor = cor
//     }

//     gira_cadeira() {
//         this.giratoria === true ? 'Girou' : 'Cadeira não é giratoria'
//     }
// }

// let x = new Cadeira()
// console.log(x.gira_cadeira(4, false, 'verde'));
