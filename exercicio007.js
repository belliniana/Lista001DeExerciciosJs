// Classe Temperatura
class Temperatura {
    constructor(celsius) {
        this.celsius = celsius;
    }

    paraFahrenheit() {
        return (this.celsius * 9 / 5) + 32;
    }
}

// Função principal
function converter() {
    const celsius = Number(document.getElementById("celsius").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(celsius)) {
        resultado.innerHTML = "Digite um valor válido!";
        return;
    }

    const temp = new Temperatura(celsius);

    resultado.innerHTML = `${celsius}°C = ${temp.paraFahrenheit()}°F`;
}