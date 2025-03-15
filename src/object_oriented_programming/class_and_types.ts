class Account {
    name: string;
    accountNumber: number;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    deposit(amount: number) {
        console.log(`Depositing ${amount} to ${this.name} account`);
    }

    withdraw(amount: number) {
        console.log(`Withdrawing ${amount} from ${this.name} account`);
    }
}

const newAccount: Account = new Account('John Doe', 1234567890);
console.log(newAccount);
newAccount.deposit(500);
newAccount.withdraw(200);

const anotherAccount: Account = new Account('Jane Doe', 9876543210);
console.log(anotherAccount);
anotherAccount.deposit(1000);
anotherAccount.withdraw(500);