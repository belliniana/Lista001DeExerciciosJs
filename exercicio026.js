// Classe Conta
class Conta {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
        return ` ${this.titular} recebeu R$ ${valor}`;
    }

    sacar(valor) {
        if (valor <= 0) return "❌ Valor inválido";

        if (this.saldo < valor) {
            return ` ${this.titular} não tem saldo suficiente`;
        }

        this.saldo -= valor;
        return ` ${this.titular} sacou R$ ${valor}`;
    }

    transferir(valor, contaDestino) {
        if (this.sacar(valor).includes("❌")) {
            return ` Transferência negada`;
        }

        contaDestino.depositar(valor);

        return ` ${this.titular} transferiu R$ ${valor} para ${contaDestino.titular}`;
    }

    status() {
        return `${this.titular} | Saldo: R$ ${this.saldo}`;
    }
}

// Contas
const conta1 = new Conta("Ana", 1000);
const conta2 = new Conta("Carlos", 500);

// Funções de interface
function transferir() {
    const resultado = document.getElementById("resultado");

    resultado.innerHTML = conta1.transferir(200, conta2);
}

function status() {
    document.getElementById("resultado").innerHTML = `
    ${conta1.status()} <br>
    ${conta2.status()}
  `;
}