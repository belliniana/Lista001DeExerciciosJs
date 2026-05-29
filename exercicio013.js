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

// Classe filha usando super()
class Gerente extends Funcionario {
    constructor(nome, salario, departamento) {
        super(nome, salario); // chama o construtor da classe pai
        this.departamento = departamento;
    }

    descrever() {
        return `${this.nome} é gerente do ${this.departamento} e recebe R$ ${this.salario}`;
    }
}

// Instância
const gerente = new Gerente("Carlos", 8000, "Tecnologia");

// Função para exibir na tela
function mostrarGerente() {
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = gerente.descrever();
}