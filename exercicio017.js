// Classe base
class Forma {
    desenhar() {
        return "Desenhando uma forma genérica";
    }
}

// Círculo
class Circulo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    desenhar() {
        return ` Desenhando um círculo com raio ${this.raio}`;
    }
}

// Quadrado
class Quadrado extends Forma {
    constructor(lado) {
        super();
        this.lado = lado;
    }

    desenhar() {
        return `⬛ Desenhando um quadrado com lado ${this.lado}`;
    }
}

// Instâncias
const circulo = new Circulo(10);
const quadrado = new Quadrado(5);

// Funções para exibir
function mostrarCirculo() {
    document.getElementById("resultado").innerHTML = circulo.desenhar();
}

function mostrarQuadrado() {
    document.getElementById("resultado").innerHTML = quadrado.desenhar();
}