// Classe Livro
class Livro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }
}

// Classe Biblioteca (composição)
class Biblioteca {
    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro) {
        this.livros.push(livro);
        return ` Livro "${livro.titulo}" adicionado`;
    }

    buscarPorAutor(nomeAutor) {
        const encontrados = this.livros.filter(
            l => l.autor.toLowerCase() === nomeAutor.toLowerCase()
        );

        if (encontrados.length === 0) {
            return " Nenhum livro encontrado";
        }

        return encontrados
            .map(l => ` ${l.titulo} - ${l.autor}`)
            .join("<br>");
    }
}

// Instância
const biblioteca = new Biblioteca();

// Livros de exemplo
const l1 = new Livro("Dom Casmurro", "Machado de Assis");
const l2 = new Livro("Memórias Póstumas", "Machado de Assis");
const l3 = new Livro("O Alquimista", "Paulo Coelho");

// Adicionando livros
biblioteca.adicionarLivro(l1);
biblioteca.adicionarLivro(l2);
biblioteca.adicionarLivro(l3);

// Função de busca
function buscar() {
    const autor = document.getElementById("autor").value;
    document.getElementById("resultado").innerHTML =
        biblioteca.buscarPorAutor(autor);
}