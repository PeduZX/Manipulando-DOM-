//EX 1
// let um = document.getElementById('primeira');
// let dois = document.getElementById('segunda');


// um.addEventListener('click', function() {
//     let div = document.getElementById('primeira');
//     if (div.style.backgroundColor === 'red') {
//         div.style.backgroundColor = 'black';
//     } else {
//         div.style.backgroundColor = 'red';
//     }
// });

// dois.addEventListener('click', function() {
//     let div = document.getElementById('segunda');
//     if (div.style.backgroundColor === 'grey') {
//         div.style.backgroundColor = 'pink';
//     } else {
//         div.style.backgroundColor = 'grey';
//     }
// });

//EX 2

// let botao = document.getElementById('botao');
// let h3 = document.getElementById('h3');
// let reset = document.getElementById('reset');
// let i = 0;

// botao.addEventListener('click', function() {
//     h3.innerText = `Você clicou no botão ${i++} vezes`;
// });

// reset.addEventListener('click', function() {
//     i = 0;
//     h3.innerText = `Você clicou no botão 0 vezes`;
// });

//EX 3

// let botao = document.getElementById('botao');
// let frase = document.getElementById('frase');

// botao.addEventListener('click', function() {
//     if (frase.style.display === 'none') {
//         frase.style.display = 'block';
//         botao.innerText = 'Ocultar';
//     } else {
//         frase.style.display = 'none';
//         botao.innerText = 'Mostrar';
//     }
// });




//EX 4
// let botao = document.getElementById('botao');
// let mensagem = document.getElementById('mensagem');

//     botao.addEventListener('click', function() {
//         let escreva = prompt("Digite uma nova mensagem:");
//         mensagem.innerText = escreva;
//     });


//Ex 5
//     document.addEventListener("keydown", (event) => {
//         let mensagem = document.getElementById("mensagem");
//         mensagem.innerText = `Você pressionou: ${event.key}`;
// });
    
//Ex 6
// let votar = document.getElementById('votar');

// votar.addEventListener('click', function() {
//     votar.style.display = 'none';
//     let voto = prompt("Qual seu voto (Cr7 ou Messi)?");
//     if (voto === 'Cr7') {
//         prompt('Você tem certeza?');
//         alert('Parabens, voce votou no CR7');
        
//     } else if (voto === 'messi') {
//         prompt('Você tem certeza?');
//         alert('Parabens, voce votou no messi');
//     } else {
//         alert('Voto NULO')
//     }
// });


// Desafio

// let adicionar = document.getElementById('adicionar')
// let lista = document.getElementById('lista')
// let arrayI = [];

// adicionar.addEventListener('click', function() {
// let add = prompt('deseja adicionar item a lista?');

//     if (add === 'sim') {
//         let item = prompt('qual item deseja adicionar?');
//         arrayI.push(item);
//         alert('item adicionado com sucesso');
//         lista.innerText = 'Esses são os itens presentes na lista:' + arrayI;
//     } else {
//         alert('Nenhum item adicionado!');
//         adicionar.style.display = 'none';
//         lista.innerText = 'nenhum item adicionado';
//     }
// })

