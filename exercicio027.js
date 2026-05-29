// Classe Contato
class Contato {
    constructor(nome, telefone) {
        this.nome = nome;
        this.telefone = telefone;
    }

    exibir() {
        return ` ${this.nome} - ${this.telefone}`;
    }
}

// Classe Agenda (composição)
class Agenda {
    constructor() {
        this.contatos = [];
    }

    adicionar(contato) {
        this.contatos.push(contato);
        return `✔️ Contato ${contato.nome} adicionado`;
    }

    excluirPorNome(nome) {
        const tamanhoAntes = this.contatos.length;

        this.contatos = this.contatos.filter(
            c => c.nome.toLowerCase() !== nome.toLowerCase()
        );

        if (this.contatos.length === tamanhoAntes) {
            return " Contato não encontrado";
        }

        return ` Contato ${nome} removido`;
    }

    listar() {
        if (this.contatos.length === 0) {
            return "Agenda vazia";
        }

        return this.contatos.map(c => c.exibir()).join("<br>");
    }
}

// Instância
const agenda = new Agenda();

// Contatos de exemplo
agenda.adicionar(new Contato("Ana", "1111-1111"));
agenda.adicionar(new Contato("Carlos", "2222-2222"));
agenda.adicionar(new Contato("Mariana", "3333-3333"));

// Funções de interface
function adicionarContato() {
    const nome = document.getElementById("nome").value;
    const tel = document.getElementById("telefone").value;

    document.getElementById("resultado").innerHTML =
        agenda.adicionar(new Contato(nome, tel));
}

function excluirContato() {
    const nome = document.getElementById("nome").value;

    document.getElementById("resultado").innerHTML =
        agenda.excluirPorNome(nome);
}

function listarContatos() {
    document.getElementById("resultado").innerHTML =
        agenda.listar();
}