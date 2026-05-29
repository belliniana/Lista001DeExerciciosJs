// Classe base
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    emitirSom() {
        return "Som genérico de animal";
    }
}

// Classe filha (herança)
class Cachorro extends Animal {
    constructor(nome) {
        super(nome);
    }

    emitirSom() {
        return " Latido";
    }
}

// Instância
const cachorro = new Cachorro("Rex");

// Função para exibir
function mostrarSom() {
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
    Nome: ${cachorro.nome} <br>
    Som: ${cachorro.emitirSom()}
  `;
}