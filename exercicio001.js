// Classe Livro
class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    exibirInfo() {
        return `Título: ${this.titulo} | Autor: ${this.autor}`;
    }
}

// Instâncias
const livro1 = new Livro("Dom Casmurro", "Machado de Assis");
const livro2 = new Livro("O Alquimista", "Paulo Coelho");

function mostrarLivros() {
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
    <div class="livro">${livro1.exibirInfo()}</div>
    <div class="livro">${livro2.exibirInfo()}</div>
  `;
}