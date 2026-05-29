// Classe Contador
class Contador {
    constructor() {
        this.valor = 0;
    }

    incrementar() {
        this.valor++;
    }

    decrementar() {
        this.valor--;
    }

    resetar() {
        this.valor = 0;
    }
}

const contador = new Contador();

function atualizar() {
    document.getElementById("valor").innerText = contador.valor;
}

function incrementar() {
    contador.incrementar();
    atualizar();
}

function decrementar() {
    contador.decrementar();
    atualizar();
}

function resetar() {
    contador.resetar();
    atualizar();
}