// Classe Personagem
class Personagem {
    constructor(nome, vida, ataque) {
        this.nome = nome;
        this.vida = vida;
        this.ataque = ataque;
    }

    atacar(inimigo) {
        if (this.vida <= 0) {
            return ` ${this.nome} está sem vida e não pode atacar`;
        }

        inimigo.vida -= this.ataque;

        if (inimigo.vida < 0) inimigo.vida = 0;

        return ` ${this.nome} atacou ${inimigo.nome} e causou ${this.ataque} de dano`;
    }

    status() {
        return ` ${this.nome} | Vida: ${this.vida}`;
    }
}

// Instâncias
const jogador = new Personagem("Herói", 100, 20);
const inimigo = new Personagem("Monstro", 80, 15);

// Funções de interface
function atacar() {
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
    ${jogador.atacar(inimigo)} <br><br>
    ${jogador.status()} <br>
    ${inimigo.status()}
  `;
}

function status() {
    document.getElementById("resultado").innerHTML = `
    ${jogador.status()} <br>
    ${inimigo.status()}
  `;
}