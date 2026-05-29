// Classe Veiculo
class Veiculo {
    constructor(nome) {
        this.nome = nome;
    }
}

// Classe Estacionamento
class Estacionamento {
    constructor(capacidade) {
        this.capacidade = capacidade;
        this.veiculos = [];
    }

    estacionar(veiculo) {
        if (this.veiculos.length >= this.capacidade) {
            return " Estacionamento lotado";
        }

        this.veiculos.push(veiculo);
        return ` ${veiculo.nome} estacionado`;
    }

    sair(nome) {
        const tamanhoAntes = this.veiculos.length;

        this.veiculos = this.veiculos.filter(
            v => v.nome.toLowerCase() !== nome.toLowerCase()
        );

        if (this.veiculos.length === tamanhoAntes) {
            return " Veículo não encontrado";
        }

        return ` ${nome} saiu do estacionamento`;
    }

    listar() {
        if (this.veiculos.length === 0) {
            return "Estacionamento vazio";
        }

        return this.veiculos.map(v => ` ${v.nome}`).join("<br>");
    }

    vagasRestantes() {
        return ` Vagas restantes: ${this.capacidade - this.veiculos.length}`;
    }
}

// Instância
const estacionamento = new Estacionamento(3);

// Funções de interface
function estacionar() {
    const nome = document.getElementById("nome").value;

    document.getElementById("resultado").innerHTML =
        estacionamento.estacionar(new Veiculo(nome));
}

function sair() {
    const nome = document.getElementById("nome").value;

    document.getElementById("resultado").innerHTML =
        estacionamento.sair(nome);
}

function listar() {
    document.getElementById("resultado").innerHTML =
        estacionamento.listar();
}

function vagas() {
    document.getElementById("resultado").innerHTML =
        estacionamento.vagasRestantes();
}