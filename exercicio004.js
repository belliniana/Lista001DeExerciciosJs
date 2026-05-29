// Classe Carro
class Carro {
    constructor() {
        this.velocidade = 0;
    }

    acelerar() {
        this.velocidade += 10;
    }

    resetar() {
        this.velocidade = 0;
    }
}

const carro = new Carro();

function atualizarTela() {
    document.getElementById("resultado").innerHTML =
        `Velocidade atual: ${carro.velocidade} km/h`;
}

function acelerar() {
    carro.acelerar();
    atualizarTela();
}

function resetar() {
    carro.resetar();
    atualizarTela();
}