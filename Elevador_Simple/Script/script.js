let imagemAtual = 1;

const andarAtual =document.getElementById();

function alternarImagem() {

    const imagemElemento = document.getElementById('imagem');
    const numeroElemento = document.getElementById('num-display');
    const numeroAndarElemento = document.getElementById('tex-andar-atual');

    if (imagemAtual === ) {

        imagemElemento.src = '../img/ELevador1_N1.png';
        imagemElemento.alt = 'Imagem 2';
        imagemAtual = 2;

        //Mudar o display com o valor do andar
        andarAtual = 'N1';
        numeroElemento.textContent = andarAtual
        numeroAndarElemento.textContent = andarAtual


    } else {
        imagemElemento.src = 'imagem1.jpg';
        imagemElemento.alt = 'Imagem 1';
        imagemAtual = 1;
    }
}


function elevador1() {
    const imagemElemento = document.getElementById('imagem');
    const numeroElemento = document.getElementById('num-display');
    const numeroAndarElemento = document.getElementById('tex-andar-atual');

    alternarImagem();
}


function elevador2() {
    const imagemElemento = document.getElementById('imagem');
    const numeroElemento = document.getElementById('num-display');
    const numeroAndarElemento = document.getElementById('tex-andar-atual');
    
    alternarImagem();
}



function compararValores(numeroApertado, posicaoElevador1, posicaoElevador2) {

    if (numeroApertado > posicaoElevador1 && numeroApertado < posicaoElevador2) {
        elevador1()
    } else if (numeroApertado > posicaoElevador2 && numeroApertado < posicaoElevador1) {
        elevador2();
    } else {
        elevador1() || elevador2();
    }
}


function definirEnvia() {

    compararValores();
}