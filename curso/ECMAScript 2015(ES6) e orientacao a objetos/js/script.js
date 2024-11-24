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
// Entidade, Identidade, Caracteristicas, ações

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

// Paradigma de OO
class Cadeira {
    constructor(qtde_pernas, giratoria, cor) {
        this.qtde_pernas = qtde_pernas
        this.giratoria = giratoria
        this.cor = cor
    }

    giraCadeira() {
        if (this.giratoria === true) {
            console.log('Girou');
        } else{
            console.log('Cadeira não é giratoria');
        }
    }
}

// let cadeira = new Cadeira(4, false, 'azul')
// let cadeira2 = new Cadeira(1, true, 'vermelha')

// cadeira.giraCadeira()
// cadeira2.giraCadeira()

let cadeiras = []

cadeiras.push(new Cadeira(4, false, 'azul'))
cadeiras.push(new Cadeira(1, true, 'vermelha'))

console.log(cadeiras);


class Sofa {
    constructor(cor, qtde_lugares, reclinavel) {
        this.cor = cor
        this.qtde_lugares = qtde_lugares
        this.reclinavel = reclinavel
    }

    reclinarSofa(){
        if (this.reclinavel === true) {
            console.log('cor sofá: ' + this.cor + ', Esse sofá foi reclinado');
        } else{
            console.log('cor sofá: ' + this.cor + ', Esse sofá não é reclinavel')
        }
    }
}

let sofas = []
sofas.push(new Sofa('vermelha', 3, false))
sofas.push(new Sofa('marrom', 4, true))
sofas.push(new Sofa('verde', 2, true))

for (let index = 0; index < sofas.length; index++) {
    sofas[index].reclinarSofa()
}


// ----------- OO Pilar do Encapsulamento----------
// Seguro, Reutilizável

class Tv {
    constructor() {
        this._relacaoCanais = Array(2, 4, 5, 7, 10)
        this._canalAtivo = 5
        this._volume = 20
    }
    // getters setters
    get canalAtivo(){
        return this._canalAtivo
    }

    set canalAtivo(canal){
        // 
        if (this._relacaoCanais.indexOf(canal) !== -1){
            this._canalAtivo = canal
        }         
    }
}

let tv = new Tv()

tv.canalAtivo = 7
console.log(tv.canalAtivo);

// -------OO Pilar Herança-----
// Reutilizável, Manutenção

class Animal {
    constructor() {
        this.cor = ''
        this.tamanho = null
        this.peso = null
    }

    dormir(){
        console.log('dormir');
        
    }
}

class Cachorro extends Animal{
    constructor() {
        super()
        this.orelha = 'Grandes e caídas'
    }

    correr() {
        console.log('correr');
    }

    rosnar() {
        console.log('rosnar');
    }
}

class Passaro extends Animal{
    constructor() {
        super()
        this.bico = 'Curto'
    }

    voar() {
        console.log('Voar');
    }

}

class Papagaio extends Passaro{
    constructor() {
        super()
        this.bico = 'Médio'
        this.sabeFalar = true
    }

    falar(){
        console.log('Sabe falar');
    }
}

let cachorro = new Cachorro()
let passaro = new Passaro()
let papagaio = new Papagaio()

console.log(cachorro);
console.log(passaro);
console.log(papagaio);



class Animal {
    constructor(cor, tamanho, peso) {
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }

    dormir() {
        console.log('dormir');

    }
}
class Passaro extends Animal {
    constructor(bico, cor, tamanho, peso) {
        super(cor, tamanho, peso)
        this.bico = bico
    }

    voar() {
        console.log('Voar');
    }

}

class Papagaio extends Passaro {
    constructor(sabeFalar, cor, tamanho, peso) {
        super('Médio', cor, tamanho, peso)
        this.sabeFalar = sabeFalar
    }

    falar() {
        console.log('Sabe falar');
    }
}

// let papagaio = new Papagaio(true, 'verde', 24, 322)
// console.log(papagaio);

// let papagaio2 = new Papagaio(false, 'azul', 13, 150)
// console.log(papagaio2);

// // ----teste-----
// class Quadro {
//     constructor(altura, largura) {
//         this.altura = altura
//         this.largura = largura
//     }
// }

// class QuadroAnimal extends Quadro {
//     constructor(animal, cor, largura, altura) {
//         super(altura, largura)
//         this.animal = animal
//         this.cor = cor
//     }
// }

// // let zebra = new QuadroAnimal('zebra', 'branca', 200, 200)
// // console.log(`quadro do animal: ${zebra.animal} 
// //             Cor: ${zebra.cor} 
// //             tamanho ${zebra.altura}x${zebra.largura}`);

// function montarQuadro() {
//     let zebra = new QuadroAnimal('zebra', 'branca', 200, 200)
//     document.write(`quadro do animal: ${zebra.animal} 
//             Cor: ${zebra.cor} 
//             tamanho ${zebra.altura}x${zebra.largura}`);
// }


// ------OO Pilar Polimorfismo-----
// Reutilizável, Sobreescrita de metodos



class Animal {
    constructor(cor, tamanho, peso) {
        this.cor = cor
        this.tamanho = tamanho
        this.peso = peso
    }

    dormir() {
        console.log('dormir');

    }
}
class Passaro extends Animal {
    constructor(bico, cor, tamanho, peso) {
        super(cor, tamanho, peso)
        this.bico = bico
    }

    voar() {
        console.log('Voar');
    }

}

class Papagaio extends Passaro {
    constructor(sabeFalar, cor, tamanho, peso) {
        super('Médio', cor, tamanho, peso)
        this.sabeFalar = sabeFalar
    }

    falar() {
        console.log('Sabe falar');
    }
}

class Avestruz extends Passaro{
    constructor(){
        super('Grande', 'Branco e preto', 250, 15000)
    }

    enterrarCabeca(){
        console.log('Enterrar a cabeça');
        
    }

    voar(){
        console.log('Avestruz não voa doido');
        
    }
}

let papagaio = new Papagaio(true, 'verde', 24, 322)
console.log(papagaio);
papagaio.voar()

let avestruz = new Avestruz()
console.log(avestruz)
avestruz.voar()

// -----Objetos literais / estáticos
// ---Obejto literal----
class Produto{
    constructor(descricao, preco){
        this.descricao = descricao
        this.preco = preco
    }

    verDescricao(){
        console.log(`${this.descricao} por apenas R$${this.preco}`);
    }
}

let produto = new Produto('notbook', 2200)
produto.verDescricao()

// --------------------------------------------------

let produtoLiteral = {
    descricao: 'Geladeira',
    preco: 3000,
    verDescricao: function(){
        console.log(`${this.descricao} por apenas R$${this.preco}`);
    }
}

produtoLiteral.verDescricao()

// --------------------------
//  formulário -> servidor
//  recupera dados e monta um objeto literal
//  obj literal -> JSON -> HTTP -> Server -> armazena

// --------------------------------
// -------Melhoria de notação------

let nome = 'jorge' //document.getElementById('')
let idade = 22
let sexo = 'masculino'
let profissao = 'programador'

let objeto = {
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,
    exibirResumo: function () {
        console.log(`Nome: ${this.nome} idade: ${this.idade} sexo: ${this.sexo} profissão: ${this.profissao}`);

    }
}

objeto.exibirResumo()
// ----------------------------
let objeto2 = {
    nome, //onome = nome variavel / valor = valor da variavel
    idade,
    sexo,
    profissao,
    exibirResumo() {
        console.log(`Nome: ${this.nome} idade: ${this.idade} sexo: ${this.sexo} profissão: ${this.profissao}`);

    }
}
objeto2.exibirResumo()
*/

let pessoa = {
    nome: 'Jose',
    idade: 34
}

console.log(pessoa.nome)

pessoa.nome = 'fernanda'
pessoa.idade = 23

console.log(pessoa.nome, pessoa.idade)