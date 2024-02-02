const imagensPorAndar = {
    "-2": "url_da_imagem_subsolo_2.jpg",
    "-1": "url_da_imagem_subsolo_1.jpg",
    "0": "../img/Elevador1_N1.png",
    "1": "../img/Elevador1_N2.png",
    "2": "../img/Elevador1_N3.png",

    // ... adicione mais URLs para os outros andares
};

// Variável para o andar atual (inicialmente no térreo)
let andarAtual = 0;

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
    const imagemElemento = document.getElementById('imagem');
    imagemElemento.src = urlImagem;

    console.log(`Exibindo imagem do andar ${andarAtual}: ${urlImagem}`);
    // Aqui você pode atualizar a imagem na interface do usuário com a URL correspondente
}

const button = document.querySelector("input");
const paragraph = document.querySelector("p");

button.addEventListener("click", updateButton);

function updateButton() {
    if (button.value === "Iniciar máquina") {
        button.value = "Parar máquina";
        console.log(button)
        paragraph.textContent = "A máquina foi iniciada!";
    } else {
        button.value = "Iniciar máquina";
        paragraph.textContent = "A máquina está parada.";
    }
}



function compararValores(numeroApertado, posicaoElevador1, posicaoElevador2) {

    const numeroApertado = document.getElementById('btn-1');
    numeroApertado.value = 3;
    console.log(numeroApertado)
    const posicaoElevador1 = andarAtual;
    const posicaoElevador2 = 6;

   

    console.log(posicaoElevador1)

    if (numeroApertado > posicaoElevador1 && numeroApertado < posicaoElevador2) {
        subir()
    } else if (numeroApertado > posicaoElevador2 && numeroApertado < posicaoElevador1) {
        descer()
    } else {
        console.log("AMBOS PODEM")
        /*  elevador1() || elevador2(); */
    }
}