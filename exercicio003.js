// Classe Retângulo
class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;
    }

    calcularArea() {
        return this.largura * this.altura;
    }
}

function calcular() {
    const largura = Number(document.getElementById("largura").value);
    const altura = Number(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");

    if (!largura || !altura) {
        resultado.innerHTML = "Preencha todos os campos!";
        return;
    }

    const retangulo = new Retangulo(largura, altura);

    resultado.innerHTML = `Área: ${retangulo.calcularArea()}`;
}