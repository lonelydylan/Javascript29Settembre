class BankAccount {
    #saldo = 0;
    constructor(saldo){
        this.#saldo = saldo;
    }
    deposit(valore) {
        this.#saldo += valore;
    }
    withdraw(valore) {
        this.#saldo -= valore;
    }
    view() {
        console.log(this.#saldo);
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();