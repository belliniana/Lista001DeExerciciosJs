// Classe Veiculo
class Veiculo {
    constructor(nome, precisaManutencao = false) {
        this.nome = nome;
        this.precisaManutencao = precisaManutencao;
    }

    status() {
        return this.precisaManutencao
            ? ` ${this.nome} precisa de manutenção`
            : ` ${this.nome} está ok`;
    }
}

// Classe Empresa (composição)
class Empresa {
    constructor() {
        this.frota = [];
    }

    adicionarVeiculo(veiculo) {
        this.frota.push(veiculo);
        return ` ${veiculo.nome} adicionado à frota`;
    }

    listarVeiculos() {
        return this.frota.map(v => v.status()).join("<br>");
    }

    listarManutencao() {
        const necessitam = this.frota.filter(v => v.precisaManutencao);

        if (necessitam.length === 0) {
            return " Nenhum veículo precisa de manutenção";
        }

        return necessitam.map(v => ` ${v.nome}`).join("<br>");
    }
}

// Instância
const empresa = new Empresa();

// Veículos
const v1 = new Veiculo("Carro 1", false);
const v2 = new Veiculo("Carro 2", true);
const v3 = new Veiculo("Van", true);

// Adicionando frota
empresa.adicionarVeiculo(v1);
empresa.adicionarVeiculo(v2);
empresa.adicionarVeiculo(v3);

// Funções de interface
function listarFrota() {
    document.getElementById("resultado").innerHTML =
        empresa.listarVeiculos();
}

function listarManutencao() {
    document.getElementById("resultado").innerHTML =
        empresa.listarManutencao();
}