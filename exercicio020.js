// Classe base Carro
class Carro {
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
    }

    acelerar() {
        this.velocidade += 10;
        return ` ${this.nome} acelerou para ${this.velocidade} km/h`;
    }
}

// Classe filha CarroElétrico
class CarroEletrico extends Carro {
    constructor(nome, bateria) {
        super(nome);
        this.bateria = bateria; // porcentagem
    }

    carregar() {
        this.bateria = 100;
        return ` ${this.nome} está totalmente carregado`;
    }

    usarBateria() {
        if (this.bateria <= 0) {
            return ` ${this.nome} sem bateria`;
        }

        this.bateria -= 10;
        return ` Bateria atual: ${this.bateria}%`;
    }

    status() {
        return ` ${this.nome} | Velocidade: ${this.velocidade} km/h | Bateria: ${this.bateria}%`;
    }
}

// Instância
const carroE = new CarroEletrico("Tesla", 80);

// Funções de interface
function acelerar() {
    document.getElementById("resultado").innerHTML = carroE.acelerar();
}

function carregar() {
    document.getElementById("resultado").innerHTML = carroE.carregar();
}

function usarBateria() {
    document.getElementById("resultado").innerHTML = carroE.usarBateria();
}

function status() {
    document.getElementById("resultado").innerHTML = carroE.status();
}