
//--------Funções de callback--------

// function exibirArtigo(id, callbacksuc, callbackerro){
//     if (true) {
//         callbacksuc('Funcções de callback em js', 'funcções de callback são muito ....')
//     } else{
//         callbackerro('Erro ao recuperar os dados')
//     }
// }

// var callbacksuc = function(titulo, descricao){
//     document.write('<h1>' + titulo + '</h1>')
//     document.write('<hr')
//     document.write('<p>' + descricao + '</p>')
// }

// var callbackerro = function(erro){
//     document.write('<p><b>Erro</b>' + erro + '</p>')
// }

// exibirArtigo(1, callbacksuc, callbackerro)

// ----------DATAS---------

/*
var data = new Date()

data.getDate()

// document.write(data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear() + '<br>')
// 16/11/2024

//Adicionar/remover dias
document.write(data.toString())
data.setDate(data.getDate() + 1)
document.write('<br>')
document.write(data.toString() + '<br>')

//Adicionar/remover Meses
document.write(data.toString())
data.setMonth(data.getMonth() + 1)
document.write('<br>')
document.write(data.toString() + '<br>')

//Adicionar/remover Anos
document.write(data.toString())
data.setFullYear(data.getFullYear() + 1)
document.write('<br>')
document.write(data.toString())


//15/01/2023
var data1 = new Date(2023, 0, 15)
document.write(data1.toString() + '<hr>')
//23/01/2024
var data2 = new Date(2023, 0, 23)
document.write(data2.toString())
document.write('<hr><br><br>')

// --------converterdatas para algo que possamos calcular--------

document.write(data1.getTime())
document.write('<hr>')
document.write(data2.getTime())

// 1 de janeiro de 1970

document.write('<br><hr><br>')
// encontrar quantidade de milissegundos entre data1 e data2
var mil_entre_datas = Math.abs(data1.getTime() - data2.getTime())
document.write(mil_entre_datas)
document.write('<br><hr><br>')


// 1 dia tem 24, cada hora tem 60 minutos, cada minuto tem 60
//  seg e cada segundo tem 1000 milissegundos
// então enquantos milissegundos extistem em um dia:

var mil_por_dia = (1*24*60*60*1000)
document.write('1 dia tem: ' + mil_por_dia + ' Milissegundos')
document.write('<br><hr><br>')
document.write('Adiferença entre data1 e data2 é: ' + Math.ceil(mil_entre_datas / mil_por_dia) + ' dia(s)')

------------Atividade-----------

var num1 = prompt('digite um numero')
var operacao = prompt('digite a operação "soma" ou "subtração" (sem aspas)')
var num2 = prompt('digite número 2')

function calcular(num1, ope, num2){
    switch (ope) {
        case "soma":
            var result = parseInt(num1) + parseInt(num2)
            return result = 'O resultado é: ' + result;
        case "subtração":
            var result = parseInt(num1) - parseInt(num2)
            return result = 'O resultado é: ' + result
        ;
        default:
            return result = 'operação inválida';
    }
}

document.write(calcular(num1,operacao, num2))


// ---------Eventos Mouse------------

// Onclick - dispara função após um clique
// ondblclick - dispara quando clicar duas vezes
// onmouseover - dispara quando passar mouse por cima

// ---------Eventos com Teclado----------

// onkeydown - dispara função após clicar uma tecla
// onkeyup - dispara  após soltar a tecla
// okyepress - somente quando a tecla pressionada for um caracter

// ---------Eventos janela----------

// onresize - associado ao body que dispara ao mudar o tamanho da tela
// onscroll - quando dar um scroll em um elemento

// ---------Eventos formularios----------

// onfocus - quando o elemento estiver em foco
// onblur - quando o elemento perder o foco
//onchange - quando o estado do elemento é modificado
function acao() {
    alert('Evento disparado')
}
function acao2() {
    alert('Evento 2 disparado')
}


// --------DOM---------

// --------Selecionando elementos da página------------

// getElementByid() - seleciona o elemento pelo ID
// getElementByTagName() - seleciona o elemento pelo nome da tag
// getElementByClassName() - seleciona o elemento nome da classe
// getElementByName() - seleciona o elemento pelo nome do name

<input
    id="nome_usuario"
    class="campo_texto"
    name="name"
/>

// ----------Manipulando valores de inputs----------

 
 
 function distribuiCaracter() {
    // selecionar o valor digitado
    var caracter = document.getElementById('entrada').value
    // limpar campo digitação
    document.getElementById('entrada').value = ''

    // limpar espaços em branco nas extremidades da string
    caracter.trim()

    switch (caracter) {
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            // adicionar o caracter no campo referente a números
            document.getElementById('numeros').value = caracter
            break;
        default:
            // adicionar o caracter no campo referente a letrar
            document.getElementById('letras').value = caracter

    }
}


// -------Manipulando estilos de elementos---------

// HTML

 <div class="bg-primary">
        <h1>Manipulando Estilo</h1>
        <button class="btn btn-outline-light" onclick="modificaEstilo('#FF0000')">vermelho</button>
        <button class="btn btn-outline-light" onclick="modificaEstilo('#00ff00')">verde</button>
        <button class="btn btn-outline-light" onclick="modificaEstilo('#0000ff')">azul</button>
    </div>

    <div class="w-50 h-25" id="quadrado">

    </div>
// /HTML

 function modificaEstilo(cor) {
    document.getElementById('quadrado').style.background = cor
    
}

// ----------Array----------

// var lista_frutas = Array()

var lista_frutas = []


lista_frutas[1] = 'banana'
lista_frutas[2] = 'Maça'
lista_frutas['x'] = 'Morango'
lista_frutas[4] = 'uva'

var lista_frutas = Array('Banana', 'maça', 'morango', 'uva')
var lista_frutas = ['Banana', 'maça', 'morango', 'uva']

console.log(lista_frutas);

// ---------array multidimensionais----------

 var lista_coisas = []
 lista_coisas['frutas'] = ['banana', 'Maçã', 'Morango', 'Uva']
 lista_coisas['pessoas'] = ['joão', 'José', 'maria']
 
 document.write(lista_coisas['frutas'][3]);
 document.write(lista_coisas['pessoas'][1]);
 
 
 // --------inclusão e remoção arrays---------
 
 var lista_coisas = []
 lista_coisas['frutas'] = ['banana', 'Maçã']
 lista_coisas['pessoas'] = []
 
 lista_coisas['frutas'].push('Morango')
 lista_coisas['frutas'].unshift('uva')
 
 console.log(lista_coisas['frutas']);
 
 
 // var lista_frutas = []
 // incluir elemento no final array
 // lista_frutas.push('Uva')
 
 // incluir elemento no inicio array
 // lista_frutas.unshift('Morango')
 
 // excluir elemento no final array
 // lista_frutas.pop('')
 
 // excluir elemento no inicio array
 // lista_frutas.shift('')
 
 // console.log(lista_frutas);
 
 
 //  ------Metodo de pesquisa-----------
 
 var lista_frutas = []
 
 lista_frutas[0] = 'Banana'
 lista_frutas[1] = 'Maçã'
 lista_frutas[2] = 'Morango'
 lista_frutas[3] = 'Uva'
 
 // busca de dados indexOf
 
 var auxiliar = lista_frutas.indexOf('Maçã')
 
 if(auxiliar === -1){
    console.log('elemento não existe');
    
} else{
    console.log('Elemento existe e está na posição ' + auxiliar);

}


// -----------array ordenação---------

var lista_frutas = []

lista_frutas[0] = 'Morango'
lista_frutas[1] = 'Maçã'
lista_frutas[2] = 'Banana'
lista_frutas[3] = 'Uva'

var auxiliar = lista_frutas.sort()

console.log(auxiliar);

var lista_numeros = []

lista_numeros[0] = 12
lista_numeros[1] = 3
lista_numeros[2] = 12
lista_numeros[3] = 42
lista_numeros[4] = 2

var auxiliar = lista_numeros.sort(ordenaNumeros)

console.log(auxiliar);

// Funciona tanto com string númerica ou inteiros
function ordenaNumeros(a, b) {
    return a - b
    // < 0 = a ordenado antes de b
    // > 0 = b ordenado antes de a
    // == a ordem é mantida
}


// Atividade 

var lista_palavras = []

function adicionar() {
    var palavra = document.getElementById('palavras').value
    
    if (palavra === '') {
        alert('Informe um valor válido')
    } else {
        for (let index = -1; index < lista_palavras.length; index++) {
    
            if ((lista_palavras[index] === palavra) === true) {
                alert('Objeto já foi adicionado')
                var validacao = true
                break
            } else {
                var validacao = false
            }
        }
    }
if (validacao === false) {
    lista_palavras.push(palavra)
    
}
document.getElementById('palavras').value = ''
}


function ordenar() {
    console.log(lista_palavras);
}


// --------estrutura de repetição---------

var x = 1

while (x <= 10) {
    
document.write(x + '<br>')
x++
}
 
var x = 11

// do while

do{


    document.write(x + '<br>')
    // break 
    // continue
} while(x <= 10){
    
    while(x <= 11){
        document.write(x + '<br>')
    }
}

// for

for (let index = 10; index > 0; index--) {
    console.log(index);
    // break
    // continue
}


var lista_frutas = ['Banana', 'Maçã', 'Morango', 'Uva']

var y = 0

while(y < lista_frutas.length){
    document.write(lista_frutas[y] + '<br>')
    y++
}

// -------Tabuada----------
for (let y = 1; y <= 10; y++) {

    for (let x = 1; x <= 10; x++) {
        document.write(y + ' X ' + x + ' = ' + (y * x) + '<br>')

    }
    document.write('<hr>')
}

// ---------for in----------

// for in mais usado em indices não ordenados

var lista_convidados = ['Jorge', 'ana', 'danyue', 'adsad']

for(var x  in lista_convidados){
console.log('Índice ' + x + ' Valor ' + lista_convidados[x]);
 
}

// ---------foreach-------

// var listaFuncionarios = ['Viviane', 'Rosângela', 'Miguel', 'Lucas', 'Fernanda']
var listaFuncionarios = Array()
listaFuncionarios['x'] = 'Viviane'
listaFuncionarios[false] = 'Rosângela'
listaFuncionarios[3] = 'Miguel'
listaFuncionarios[27] = 'Lucas'
listaFuncionarios[-12] = 'Fernanda'
//forEach começa a partir de 0 (cuidado!!!)

var f = function(valor, indice){
    console.log(valor, indice)
}

listaFuncionarios.forEach(f)

// listaFuncionarios.forEach(function(valor, indice, array) {
//   //logica
//   console.log('indice ' + indice + ' | valor:' + valor)
//   if(valor === 'Lucas'){
//     array[indice] = 'Um novo valor'
//   }
//   console.log(array)
// })

// try, catch, throw e finally

//netflix

    
    var video = Array()

    video[1] = Array()
    video[1]['nome'] = 'Fullmetal Alchemist'
    video[1]['categoria'] = 'Anime'

    function getVideo(video){

      try {
      //lógica
      //http
      console.log(video[0]['nome'])
      } catch(erro) {
        tratarErro
        console.log('Agora sim podemos tratar esse erro')
        throw new Error('Houve um erro mas não se preocupe, estamos trabalhando nisso agora!')
      } finally {
        console.log('Sempre passa por aqui (try / catch)')
      }

      console.log('A aplicação não morreu')
    }
    function tratarErro(e){
      console.log(e)
    }
    getVideo(video)


*/

