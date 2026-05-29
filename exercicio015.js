// Classe base
class Veiculo {
    constructor(nome) {
        this.nome = nome;
    }

    mover() {
        return `${this.nome} está se movendo`;
    }
}

// Classe filha Carro
class Carro extends Veiculo {
    constructor(nome) {
        super(nome);
    }

    mover() {
        return `🚗 ${this.nome} está dirigindo na estrada`;
    }
}

// Classe filha Avião
class Aviao extends Veiculo {
    constructor(nome) {
        super(nome);
    }

    mover() {
        return ` ${this.nome} está voando no céu`;
    }
}

// Instâncias
const carro = new Carro("Fusca");
const aviao = new Aviao("Boeing 747");

// Função para exibir
function moverCarro() {
    document.getElementById("resultado").innerHTML = carro.mover();
}

function moverAviao() {
    document.getElementById("resultado").innerHTML = aviao.mover();
}