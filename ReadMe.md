
# Simulation of Bank Account
This project demonstrates a simple simulation of bank account operations using JavaScript,HTML and CSS. The BankAccount class supports various functionalities including deposit, withdrawal, fund transfer, interest addition, and viewing account details. The HTML interface allows users to interact with these functionalities through a web page.

![BankAccountSimulationPic](https://github.com/Chakri1407/TokenStakingDapp/blob/main/Client/src/assets/Project-pic.png)

## Table of Contents
- Features 
- Prerequisites
- Installation
- Usage 
   - Deposit
   - Withdraw
   - Transfer
   - Add Interest
   - Get Account Details
- Class Details
   - BankAccount
- HTML & CSS Interface
- License

## Features
- Deposit funds into a bank account
- Withdraw funds from a bank account
- Transfer funds between bank accounts
- Add interest to a bank account balance
- View account details, including transaction history

## Prerequisites 
- A web browser (e.g., Chrome, Firefox, Safari)

## Installation 
1. Create a new directory for your project.
2. Inside this directory, create three files: ``` index.html ```,``` Style.css```  and ```app.js```.
3. Copy the respective codes provided into  ``` index.html ```,``` Style.css```  and ```app.js```.
4. Open ```index.html``` in your web browser to run the simulation.
5. or, you can clone it with this github link:  ``` link ```

# Usage

### Deposit 
1. Enter the amount you want to deposit in the "Enter Amount To Deposit" field.
2. Click the 'Submit' button to receive the following information: 
![DepositPic](https://github.com/Chakri1407/TokenStakingDapp/blob/main/Client/src/assets/Project-pic.png)

### Withdraw
1. Enter the amount you want to withdraw in the "Enter Amount To Withdraw" field.
2. Click the 'Submit' button to receive the following information: 
![WithdrawPic](https://github.com/Chakri1407/TokenStakingDapp/blob/main/Client/src/assets/Project-pic.png)

### Transfer
1. Enter the amount you want to transfer in the "Enter Amount To Transfer" field.
2. Click the 'Submit' button to receive the following information:
![TransferPic](https://github.com/Chakri1407/TokenStakingDapp/blob/main/Client/src/assets/Project-pic.png)

### Add Interest
1. Enter the interest rate you want to add in the "Add Interest" field.
2. Click the 'Submit' button to receive the following information:
![AddInterestPic](https://github.com/Chakri1407/TokenStakingDapp/blob/main/Client/src/assets/Project-pic.png)

### Get Account Details
1. Enter the account number in the "Get Account Details" field.
2. Click the 'Submit' button to receive the following information:
![AccountDetailsPic](https://github.com/Chakri1407/TokenStakingDapp/blob/main/Client/src/assets/Project-pic.png)

## Class Details
### BankAccount
#### Constructor

- ``` constructor(accountNumber, accountHolder) ```  
- Initializes a new instance of the BankAccount class.
- Parameters: 
   - ```accountNumber``` (number): The account number.
   - ```accountHolder``` (string): The name of the account holder.

#### Methods
- ```deposit(amount)```
    - Deposits a specified amount into the account.
    - Parameters:
        - ```amount``` (number): The amount to deposit. Must be greater than zero.

- ```withdraw(amount)```
     - Withdraws a specified amount from the account if sufficient funds are available.
     - Parameters:
       - ``` amount``` (number): The amount to withdraw. Must be greater than zero and less than or equal to the current balance.

- ```transfer(amount, account2)```
   - Transfers a specified amount from this account to another account.
   - Parameters:
      - ```amount``` (number): The amount to transfer. Must be greater than zero and less than or equal to the current balance.
      - ```account2``` (BankAccount): The target account to transfer the funds to.

- ```addInterest(rate)```
   - Adds interest to the account balance based on the specified rate.
   - Parameters:
      - ```rate``` (number): The interest rate. Must be greater than zero.
- ```recordTransaction(type, amount)```
   - Records a transaction in the account's transaction history.
   - Parameters:
      - ```type``` (string): The type of transaction (e.g., "Deposit", "Withdraw").
      - ```amount``` (number): The amount involved in the transaction.
- ```getAccountDetails()```
   - Displays the account details, including account number, account holder name, current balance, and transaction history.

## HTML & CSS Interface 
The HTML and CSS interface provides a simple web page for interacting with the ```BankAccount class```. The interface includes fields for depositing, withdrawing, transferring funds, adding interest, and viewing account details.
## Authors

- [@ChakravarthyN](https://github.com/Chakri1407)

## License

[MIT](https://choosealicense.com/licenses/mit/)


## FAQ

#### Question 
For any Questions, Kindly reach me @ [![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/chakravarthy-naik-9626bb1ba/)
