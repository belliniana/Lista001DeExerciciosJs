// Classe ItemPedido
class ItemPedido {
    constructor(nome, quantidade, preco) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
    }

    calcularTotal() {
        return this.quantidade * this.preco;
    }
}

// Instância
const item = new ItemPedido("Mouse", 2, 50);

// Função para exibir
function mostrarTotal() {
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
    Produto: ${item.nome} <br>
    Quantidade: ${item.quantidade} <br>
    Preço unitário: R$ ${item.preco} <br>
    Total: R$ ${item.calcularTotal()}
  `;
}