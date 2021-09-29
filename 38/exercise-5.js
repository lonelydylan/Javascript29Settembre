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
  #minim_val = 1000;

  constructor(initialAmount){
    super(initialAmount);
  }

  deposit(amount){
    if (amount >= this.#minim_val){
      super.deposit(this.#calcolointeresse(amount));
    } else {
      super.deposit(amount);
    }
  }
  

  #calcolointeresse(amount){
    const inter = (amount * 3) / 100;
    return amount + inter;
  }

}



const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();