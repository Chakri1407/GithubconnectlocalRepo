class BankAccount {
  constructor(accountNumber, accountHolder) {
    this.accountNumber = accountNumber;
    this.accountHolder = accountHolder;
    this.balance = 0;
    this.TxHistory = [];
  }
  
  // to add amount to the account balance
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.recordTransaction("Deposit", amount);
    } else {
      alert("Deposited amount must be greater than zero");
    }
  }

  // testing comment while using git
  // to withdraw amount from account balance
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.recordTransaction("Withdraw", amount);
    } else if (amount > this.balance) {
      alert("Insufficient funds for withdrawal");
    } else {
      alert("Withdraw amount must be greater than zero");
    }
  }

  //To transfer amount to another account
  transfer(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.withdraw(amount);
      account2.deposit(amount);
      this.recordTransaction("Transfer to " + account2.accountNumber, amount);
      account2.recordTransaction("Transfer from" + this.accountNumber, amount);
      console.log(`${amount} transferred to ${account2.accountNumber}`);
    } else if (amount > this.balance) {
      alert("Insufficient funds for transfer");
    } else {
      alert("Transfer amount must be greater than zero");
    }
  }

  // To add interesr rate
  addInterest(rate) {
    if (rate > 0) {
      let interest = this.balance * (rate / 100);
      this.balance += interest;
      this.recordTransaction("Interest", interest);
      console.log(`${interest} of added to ${this.accountNumber}`);
    } else {
      alert("Invalid interest rate entered");
    }
  }

  // to record a transaction
  recordTransaction(type, amount) {
    const date = new Date();
    this.TxHistory.push({ date, type, amount, balance: this.balance });
  }
  
  // to get AccountDetails
  getAccountDetails() {
  alert(`Account# ${this.accountNumber}, 
    AccountHolder:${this.accountHolder},
    balance:${this.balance} 
    and Tx logs:${this.TxHistory}`);
  return; 
    
  }
}

//For Example: taking 2 accounts
const account1 = new BankAccount(1000123, "PersonA");
const account2 = new BankAccount(1000456, "PersonB");


document.getElementById("myDepositButton").onclick = function () {
  let amount = parseInt(document.getElementById("Deposit").value);
  if (isNaN(amount) || amount <= 0) {
    alert("Invalid amount entered");
    return;
  } else {
    account1.deposit(amount);
    alert(`${amount} Deposit to ${account1.accountNumber}`);
  }
};
document.getElementById("myWithdrawButton").onclick = function () {
  let amount = parseInt(document.getElementById("Withdraw").value);
  if (isNaN(amount) || amount <= 0) {
    alert("Invalid amount entered");
    return;
  } else {
    account1.withdraw(amount);
    alert(`${amount} was withdrawn from ${account1.accountNumber} `);
  }
};
document.getElementById("myTransferButton").onclick = function () {
  let amount = parseInt(document.getElementById("Transfer").value);
  if (isNaN(amount) || amount <= 0) {
    alert("Invalid amount entered");
    return;
  } else {
    account1.transfer(amount, account2.accountNumber);
    alert(`${amount} was Transferred to ${account2.accountNumber} `);
  }
};

document.getElementById("myInterestButton").onclick = function () {
  let rate = parseInt(document.getElementById("Interest").value);
  if (isNaN(rate) || rate <= 0) {
    alert("Invalid interest rate entered");
    return;
  } else {
    account1.addInterest(rate);
    alert(`Interest rate of ${rate}% was added to ${account1.accountNumber}`);
  }
};

document.getElementById("myAccountNumberButton").onclick = function(){
  for (let i = 0; i < account1.TxHistory.length; i++) { 
  console.log(account1.TxHistory[i]);
  }
  return account1.getAccountDetails();
}
