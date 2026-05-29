// Classe Musica
class Musica {
    constructor(nome, duracao) {
        this.nome = nome;
        this.duracao = duracao; // em minutos
    }

    exibir() {
        return `${this.nome} - ${this.duracao} min`;
    }
}

// Classe Playlist
class Playlist {
    constructor() {
        this.musicas = [];
    }

    adicionar(musica) {
        this.musicas.push(musica);
        return `Musica ${musica.nome} adicionada`;
    }

    ordenarPorDuracao() {
        this.musicas.sort((a, b) => a.duracao - b.duracao);
        return "Playlist ordenada por duração";
    }

    listar() {
        if (this.musicas.length === 0) {
            return "Playlist vazia";
        }

        return this.musicas.map(m => m.exibir()).join("<br>");
    }
}

// Instância
const playlist = new Playlist();

// Músicas de exemplo
playlist.adicionar(new Musica("Musica A", 4));
playlist.adicionar(new Musica("Musica B", 2));
playlist.adicionar(new Musica("Musica C", 5));

// Funções de interface
function adicionarMusica() {
    const nome = document.getElementById("nome").value;
    const duracao = Number(document.getElementById("duracao").value);

    document.getElementById("resultado").innerHTML =
        playlist.adicionar(new Musica(nome, duracao));
}

function ordenar() {
    document.getElementById("resultado").innerHTML =
        playlist.ordenarPorDuracao();
}

function listar() {
    document.getElementById("resultado").innerHTML =
        playlist.listar();
}