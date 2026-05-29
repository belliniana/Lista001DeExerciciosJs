// Classe Pessoa
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        return `Olá, meu nome é ${this.nome}`;
    }
}

function falar() {
    const nome = document.getElementById("nome").value;
    const resultado = document.getElementById("resultado");

    if (nome === "") {
        resultado.innerHTML = "Digite um nome!";
        return;
    }

    const pessoa = new Pessoa(nome);

    resultado.innerHTML = pessoa.falar();
}