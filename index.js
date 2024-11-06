// let um = document.getElementById('quadrado1');
// let dois = document.getElementById('quadrado2');
// let tres = document.getElementById('quadrado3');

// um.addEventListener('click', function() {
//     if (um.style.backgroundColor === 'brown') {
//         um.style.backgroundColor = 'blue';
//     } else {
//         um.style.backgroundColor = 'red';
//     }
// });

// dois.addEventListener('click', function() {
//     if (dois.style.backgroundColor === 'green') {
//         dois.style.backgroundColor = 'yellow';
//     } else {
//         dois.style.backgroundColor = 'black';
//     }
// });

// tres.addEventListener('click', function() {
//     if (tres.style.backgroundColor === 'pink') {
//         tres.style.backgroundColor = 'orange';
//     } else {
//         tres.style.backgroundColor = 'purple';
//     }
// });

//EX 2

// let botao = document.getElementById('botao');
// let h3 = document.getElementById('h3');
// let zerar = document.getElementById('zerar');
// let i = 1;

// botao.addEventListener('click', function() {
//     h3.innerText = `Você clicou no botão ${i++} vezes`;
// });

// zerar.addEventListener('click', function() {
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
//         botao.innerText = 'ver';
//     }
// });




//EX 4
// let botao = document.getElementById('botao');
// let fraseInicial = document.getElementById('fraseInicial');

//     botao.addEventListener('click', function() {
//         let escreva = prompt("mude a frase");
//         fraseInicial.innerText = escreva;
//     });


//Ex 5
//     document.addEventListener("keydown", (event) => {
//         let pressione = document.getElementById("pressione");
//         pressione.innerText = `Você clicou no: ${event.key}`;
// });
    
// Ex 6
let votar = document.getElementById('votar');
let alan = document.getElementById('alan');
let borre = document.getElementById('borre');

alan.style.display = 'none';
borre.style.display = 'none';

votar.addEventListener('click', function() {
    votar.style.display = 'none';
    let voto = prompt("Qual seu voto (Alan patrick ou Borré)?");
    if (voto === 'Alan patrick') {
        prompt('Você tem certeza?');
        alert('Parabens, voce votou no Alan patrick');
        alan.style.display = 'block';
        
        
    } else if (voto === 'Borré') {
        prompt('Você tem certeza?');
        alert('Parabens, voce votou no Borré');
        borre.style.display = 'block';
    } else {
        alert('Voto NULO')
    }
});


// Desafio

// let adicionar = document.getElementById('adicionar')
// let lista = document.getElementById('lista')
// let arrayI = [];

// adicionar.addEventListener('click', function() {
// let add = prompt('adicionar um item na lista? (sim ou nao)');

//     if (add === 'sim') {
//         let item = prompt('qual item ?');
//         arrayI.push(item);
//         alert('item adicionado com sucesso');
//         lista.innerText = 'Esses são os itens presentes na lista:' + arrayI;
//     } else {
//         alert('Nenhum item adicionado!');
//         adicionar.style.display = 'none';
//         lista.innerText = 'nenhum item adicionado';
//     }
// })

