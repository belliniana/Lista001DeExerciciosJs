// Classe Animal
class Animal {
    constructor(nome, tipo) {
        this.nome = nome;
        this.tipo = tipo;
    }

    descrever() {
        return `Eu sou um ${this.tipo} e meu nome é ${this.nome}`;
    }
}

// Instâncias
const animal1 = new Animal("Rex", "cachorro");
const animal2 = new Animal("Mimi", "gato");
const animal3 = new Animal("Piu", "pássaro");

// Função para exibir
function mostrarAnimais() {
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
    ${animal1.descrever()} <br>
    ${animal2.descrever()} <br>
    ${animal3.descrever()}
  `;
}