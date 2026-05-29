// Classe Produto
class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }

    aplicarDesconto(porcentagem) {
        const desconto = (this.preco * porcentagem) / 100;
        this.preco = this.preco - desconto;
    }
}

function aplicar() {
    const nome = document.getElementById("nome").value;
    const preco = Number(document.getElementById("preco").value);
    const desconto = Number(document.getElementById("desconto").value);
    const resultado = document.getElementById("resultado");

    if (!nome || !preco || !desconto) {
        resultado.innerHTML = "Preencha todos os campos!";
        return;
    }

    const produto = new Produto(nome, preco);

    produto.aplicarDesconto(desconto);

    resultado.innerHTML = `
    Produto: ${produto.nome} <br>
    Preço com desconto: R$ ${produto.preco.toFixed(2)}
  `;
}