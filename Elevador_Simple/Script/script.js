let imagemAtual = 1;
let andarAtuaL = 1;


const imagemElementoElevador1 = document.getElementById('elevador1');
const imagemElementoElevador2 = document.getElementById('elevador2');

function alternarImagem(imagemElementoElevador1,imagemElementoElevador2) {




    const numeroElemento = document.getElementById('num-display');
    const numeroAndarElemento = document.getElementById('tex-andar-atual');

    if (imagemAtual === 1) {

        imagemElemento.src = '../img/ELevador1_N1.png';
        imagemElemento.alt = 'Imagem 2';
        imagemAtual = 2;

         //Mudar o display com o valor do andar
         andarAtual = 'N1';
         numeroElemento.textContent = andarAtual
         numeroAndarElemento.textContent = andarAtual


 
    }


















































    if (imagemAtual === 1) {

        imagemElemento.src = '../img/ELevador1_N1.png';
        imagemElemento.alt = 'Imagem 2';
        imagemAtual = 2;

       

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
    const numeroApertado = document.getElementById('btn');
    compararValores(numeroApertado, );
}










const imagensPorAndar = {
    "-2": "url_da_imagem_subsolo_2.jpg",
    "-1": "url_da_imagem_subsolo_1.jpg",
    "0": "url_da_imagem_terreo.jpg",
    "1": "url_da_imagem_andar_1.jpg",
    "2": "url_da_imagem_andar_2.jpg",
    // Adicione mais URLs para os outros andares aqui
  };
  
  // Variável para o andar atual (inicialmente no subsolo)
  let andarAtual = -1;
  
  // Função para subir um andar
  function subir() {
    if (andarAtual < 9) {
      andarAtual++;
      exibirImagemDoAndar();
    } else {
      console.log("Você já está no último andar!");
    }
  }
  
  // Função para descer um andar
  function descer() {
    if (andarAtual > -2) {
      andarAtual--;
      exibirImagemDoAndar();
    } else {
      console.log("Você já está no subsolo!");
    }
  }
  
  // Função para exibir a imagem do andar atual
  function exibirImagemDoAndar() {
    const urlImagem = imagensPorAndar[andarAtual];
    console.log(`Exibindo imagem do andar ${andarAtual}: ${urlImagem}`);
    // Aqui você pode atualizar a imagem na interface do usuário com a URL correspondente
  }
  
  // Exemplo de uso
  subir(); // Exibindo imagem do andar 0: url_da_imagem_terreo.jpg
  subir(); // Exibindo imagem do andar 1: url_da_imagem_andar_1.jpg
  descer(); // Exibindo imagem do subsolo -1: url_da_imagem_subsolo_1.jpg
  