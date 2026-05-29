// Classe base
class Funcionario {
    constructor(nome, salarioBase) {
        this.nome = nome;
        this.salarioBase = salarioBase;
    }

    calcularSalario() {
        return this.salarioBase;
    }

    status() {
        return ` ${this.nome} | Salário: R$ ${this.calcularSalario()}`;
    }
}

// Vendedor (base + comissão)
class Vendedor extends Funcionario {
    constructor(nome, salarioBase, comissao) {
        super(nome, salarioBase);
        this.comissao = comissao;
    }

    calcularSalario() {
        return this.salarioBase + this.comissao;
    }
}

// Diretor (base + bônus fixo)
class Diretor extends Funcionario {
    constructor(nome, salarioBase, bonus) {
        super(nome, salarioBase);
        this.bonus = bonus;
    }

    calcularSalario() {
        return this.salarioBase + this.bonus;
    }
}

// Instâncias
const funcionario = new Funcionario("Ana", 2000);
const vendedor = new Vendedor("Carlos", 2000, 800);
const diretor = new Diretor("Mariana", 5000, 2000);

// Funções de interface
function mostrarFuncionario() {
    document.getElementById("resultado").innerHTML = funcionario.status();
}

function mostrarVendedor() {
    document.getElementById("resultado").innerHTML = vendedor.status();
}

function mostrarDiretor() {
    document.getElementById("resultado").innerHTML = diretor.status();
}