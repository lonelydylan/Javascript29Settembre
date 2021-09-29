class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

class BankAccountVip extends BankAccount {
  #INTEREST_PERC = 3;
  #INTEREST_THRESHOLD = 1000;

  constructor(initialAmount) {
    super(initialAmount);
  }

  deposit(amount) {
    if (amount >= this.#INTEREST_THRESHOLD) {
      super.deposit(this.#calculateAmountWithInterest(amount));
    } else {
      super.deposit(amount);
    }
  }

  #calculateAmountWithInterest(amount) {
    const interestAmount = (amount * this.#INTEREST_PERC) / 100;

    return amount + interestAmount;
  }
}

const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();