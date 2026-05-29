// Classe Conta
class Conta {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    sacar(valor) {
        if (valor <= 0) {
            return " Valor inválido";
        }

        if (this.saldo - valor < 0) {
            return "Operação negada: saldo não pode ficar negativo";
        }

        this.saldo -= valor;
        return `✔️ Saque realizado. Saldo atual: R$ ${this.saldo}`;
    }

    depositar(valor) {
        if (valor <= 0) {
            return " Valor inválido";
        }

        this.saldo += valor;
        return `✔️ Depósito realizado. Saldo: R$ ${this.saldo}`;
    }
}

// Instância
const conta = new Conta("Ana", 500);

// Funções da interface
function sacar() {
    const valor = Number(document.getElementById("valor").value);
    document.getElementById("resultado").innerHTML = conta.sacar(valor);
}

function depositar() {
    const valor = Number(document.getElementById("valor").value);
    document.getElementById("resultado").innerHTML = conta.depositar(valor);
}