// Classe Elevador
class Elevador {
    constructor(totalAndares, capacidade) {
        this.andarAtual = 0;
        this.totalAndares = totalAndares;
        this.capacidade = capacidade;
        this.pessoas = 0;
    }

    entrar() {
        if (this.pessoas >= this.capacidade) {
            return "Elevador cheio";
        }

        this.pessoas++;
        return `Pessoa entrou. Total: ${this.pessoas}`;
    }

    sair() {
        if (this.pessoas <= 0) {
            return "Não há pessoas no elevador";
        }

        this.pessoas--;
        return `Pessoa saiu. Total: ${this.pessoas}`;
    }

    subir() {
        if (this.andarAtual >= this.totalAndares) {
            return "Já está no último andar";
        }

        this.andarAtual++;
        return `Subiu para o andar ${this.andarAtual}`;
    }

    descer() {
        if (this.andarAtual <= 0) {
            return "Já está no térreo";
        }

        this.andarAtual--;
        return `Desceu para o andar ${this.andarAtual}`;
    }

    status() {
        return `Andar: ${this.andarAtual} | Pessoas: ${this.pessoas}/${this.capacidade}`;
    }
}

// Instância
const elevador = new Elevador(10, 5);

// Funções de interface
function entrar() {
    document.getElementById("resultado").innerHTML = elevador.entrar();
}

function sair() {
    document.getElementById("resultado").innerHTML = elevador.sair();
}

function subir() {
    document.getElementById("resultado").innerHTML = elevador.subir();
}

function descer() {
    document.getElementById("resultado").innerHTML = elevador.descer();
}

function status() {
    document.getElementById("resultado").innerHTML = elevador.status();
}