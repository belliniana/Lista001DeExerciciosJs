// Classe Produto
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

// Classe Carrinho (composição: possui produtos)
class Carrinho {
    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);
        return ` ${produto.nome} adicionado ao carrinho`;
    }

    calcularTotal() {
        return this.produtos.reduce((total, p) => total + p.preco, 0);
    }

    listarProdutos() {
        if (this.produtos.length === 0) {
            return "Carrinho vazio";
        }

        return this.produtos
            .map(p => `• ${p.nome} - R$ ${p.preco}`)
            .join("<br>");
    }
}

// Instâncias
const carrinho = new Carrinho();

const p1 = new Produto("Teclado", 100);
const p2 = new Produto("Mouse", 50);
const p3 = new Produto("Headset", 200);

// Funções de interface
function adicionar() {
    document.getElementById("resultado").innerHTML =
        carrinho.adicionarProduto(p1);
}

function adicionarMouse() {
    document.getElementById("resultado").innerHTML =
        carrinho.adicionarProduto(p2);
}

function adicionarHeadset() {
    document.getElementById("resultado").innerHTML =
        carrinho.adicionarProduto(p3);
}

function total() {
    document.getElementById("resultado").innerHTML =
        ` Total: R$ ${carrinho.calcularTotal()}`;
}

function listar() {
    document.getElementById("resultado").innerHTML =
        carrinho.listarProdutos();
}