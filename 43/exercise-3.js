class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new ValoreNegativo();
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new ValoreNegativo();
    }

    if (this.#amount < amount) {
      throw new PrelievoNonValido();
    }

    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}


class ValoreNegativo extends Error{
  constructor(){
    super();
    this.name = 'ValoreNegativoErr'
    this.message = 'Il valore deve essere positivo.'
  }
}
class PrelievoNonValido extends Error{
  constructor(){
    super();
    this.name = 'PrelievoNonValidoErr'
    this.message = 'Si può prelevare solo una somma pari o inferiore al proprio saldo.'
  }
}
try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log('Something went wrong during bank account operations');
}