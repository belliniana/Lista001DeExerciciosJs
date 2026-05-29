// Classe Filme
class Filme {
    constructor(titulo, anoLancamento) {
        this.titulo = titulo;
        this.anoLancamento = anoLancamento;
    }

    temMaisDe10Anos() {
        const anoAtual = new Date().getFullYear();
        return (anoAtual - this.anoLancamento) > 10;
    }
}

// Função principal
function verificarFilme() {
    const titulo = document.getElementById("titulo").value;
    const ano = Number(document.getElementById("ano").value);
    const resultado = document.getElementById("resultado");

    if (!titulo || !ano) {
        resultado.innerHTML = "Preencha todos os campos!";
        return;
    }

    const filme = new Filme(titulo, ano);

    if (filme.temMaisDe10Anos()) {
        resultado.innerHTML = `🎬 "${filme.titulo}" tem mais de 10 anos.`;
    } else {
        resultado.innerHTML = `🎬 "${filme.titulo}" ainda é recente.`;
    }
}