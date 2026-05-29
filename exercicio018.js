// Classe base
class Usuario {
    constructor(nome) {
        this.nome = nome;
    }

    apresentar() {
        return `Usuário: ${this.nome}`;
    }
}

// Professor
class Professor extends Usuario {
    constructor(nome) {
        super(nome);
    }

    lancarNota(aluno, nota) {
        return ` Professor ${this.nome} lançou nota ${nota} para ${aluno}`;
    }
}

// Aluno
class Aluno extends Usuario {
    constructor(nome) {
        super(nome);
    }

    entregarTrabalho() {
        return ` Aluno ${this.nome} entregou o trabalho`;
    }
}

// Instâncias
const professor = new Professor("Carlos");
const aluno = new Aluno("Ana");

// Funções de exibição
function mostrarProfessor() {
    document.getElementById("resultado").innerHTML =
        professor.lancarNota(aluno.nome, 9);
}

function mostrarAluno() {
    document.getElementById("resultado").innerHTML =
        aluno.entregarTrabalho();
}