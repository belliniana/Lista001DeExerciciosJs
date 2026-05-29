// Classe base
class Conta {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    sacar(valor) {
        if (valor > this.saldo) {
            return "❌ Saldo insuficiente";
        }
        this.saldo -= valor;
        return `✔️ Saque realizado. Saldo: R$ ${this.saldo}`;
    }

    depositar(valor) {
        this.saldo += valor;
        return `✔️ Depósito realizado. Saldo: R$ ${this.saldo}`;
    }
}

// Classe filha
class ContaPoupanca extends Conta {
    constructor(titular, saldo, taxaJuros) {
        super(titular, saldo);
        this.taxaJuros = taxaJuros;
    }

    aplicarJuros() {
        this.saldo += this.saldo * (this.taxaJuros / 100);
        return `💰 Juros aplicados. Saldo: R$ ${this.saldo.toFixed(2)}`;
    }
}

// Instância
const conta = new ContaPoupanca("Ana", 1000, 5);

// Função para ações
function sacar() {
    document.getElementById("resultado").innerHTML = conta.sacar(200);
}

function depositar() {
    document.getElementById("resultado").innerHTML = conta.depositar(300);
}

function juros() {
    document.getElementById("resultado").innerHTML = conta.aplicarJuros();
}