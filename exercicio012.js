// Classe base
class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    descrever() {
        return `${this.nome} recebe R$ ${this.salario}`;
    }
}

// Classe filha
class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
        super(nome, salario);
        this.departamento = departamento;
    }

    descrever() {
        return `${this.nome} é gerente do ${this.departamento} e recebe R$ ${this.salario}`;
    }
}

// Instância
const gerente = new Gerente("Ana", 5000, "TI");

// Função para exibir
function mostrarGerente() {
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = gerente.descrever();
}