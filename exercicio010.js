// Classe Lampada
class Lampada {
    constructor() {
        this.ligada = false;
    }

    ligar() {
        this.ligada = true;
    }

    desligar() {
        this.ligada = false;
    }

    estado() {
        return this.ligada ? "💡 Ligada" : "💤 Desligada";
    }
}

// Instância única
const lampada = new Lampada();

// Funções da interface
function ligar() {
    lampada.ligar();
    atualizar();
}

function desligar() {
    lampada.desligar();
    atualizar();
}

function atualizar() {
    document.getElementById("resultado").innerHTML = lampada.estado();
}