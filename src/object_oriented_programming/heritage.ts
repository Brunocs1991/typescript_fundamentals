abstract class Account {
    name: string;
    accountNumber: number;
    balance: number = 0;


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
    getBalance() {
        console.log(`The balance of ${this.name} account is ${this.balance}`);
    }
}

class PeopleAccount extends Account {
    docId: number
    constructor(name: string, accountNumber: number, docId: number) {
        super(name, accountNumber);
        this.docId = docId;
    }

    getDocId() {
        console.log(`The document ID is ${this.docId}`);
    }
}

const peopleAccount: PeopleAccount = new PeopleAccount('John Doe admin', 1234567890, 123456789);
console.log(peopleAccount);
peopleAccount.deposit(500);
peopleAccount.withdraw(200);
peopleAccount.getDocId();
peopleAccount.getBalance();

console.log('-------------------');

const account: PeopleAccount = new PeopleAccount('Jane Doe', 9876543210, 987654321);
console.log(account);
account.deposit(1000);
account.withdraw(500);