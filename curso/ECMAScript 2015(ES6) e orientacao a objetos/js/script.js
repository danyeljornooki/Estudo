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

*/

