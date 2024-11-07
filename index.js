// let um = document.getElementById('primeira');
// let dois = document.getElementById('segunda');
// let tres = document.getElementById('terceira');

// um.addEventListener('click', function() {
//     if (um.style.backgroundColor === 'red') {
//         um.style.backgroundColor = 'black';
//     } else {
//         um.style.backgroundColor = 'red';
//     }
// });

// dois.addEventListener('click', function() {
//     if (dois.style.backgroundColor === 'grey') {
//         dois.style.backgroundColor = 'pink';
//     } else {
//         dois.style.backgroundColor = 'grey';
//     }
// });

// tres.addEventListener('click', function() {
//     if (tres.style.backgroundColor === 'green') {
//         tres.style.backgroundColor = 'brown';
//     } else {
//         tres.style.backgroundColor = 'green';
//     }
// });


//EX 2

// let botao = document.getElementById('botao');
// let h3 = document.getElementById('h3');
// let reset = document.getElementById('reset');
// let i = 1;

// botao.addEventListener('click', function() {
//     h3.innerText = `Você clicou no botão ${i++} vezes`;
// });

// reset.addEventListener('click', function() {
//     i = 1;
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
let votar = document.getElementById('votar');
let messi = document.getElementById('messi');
let cr7 = document.getElementById('cr7');
let vtosM = document.getElementById('vtosM')
let vtosC = document.getElementById('vtosC')
let contadorM = 0;
let contadorC = 0;

messi.style.display = 'none';
cr7.style.display = 'none';

votar.addEventListener('click', function() {
    let voto = prompt("Qual seu voto (Cr7 ou Messi)?").toLowerCase(); 
    if (voto === 'cr7') {
        messi.style.display = 'none';
       let confirmar = prompt('Você tem certeza?').toLowerCase(); 
       if (confirmar === 'sim') {
           alert('Parabéns, você votou no CR7');
           contadorC++
           cr7.style.display = 'block';
       } else {
           votar.style.display = 'block';
           votar.innerText = "Vote de novo";
       }
    } else if (voto === 'messi') {

        cr7.style.display = 'none';
       let confirmar2 = prompt('Você tem certeza?').toLowerCase();
       if (confirmar2 === 'sim') {
           alert('Parabéns, você votou no Messi');
           contadorM++
           messi.style.display = 'block';
       } else {
           votar.style.display = 'block';
           votar.innerText = "Vote de novo";
       }
    } else {
        alert('Voto NULO');
        votar.style.display = 'block';
    }
  

    vtosM.innerText = `Essa é a quantidade de votos do MESSI : ${contadorM}`
    vtosC.innerText = `Essa é a quantidade de votos do CRISTIANO RONALDO:  ${contadorC}`
});



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

