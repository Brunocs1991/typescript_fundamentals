import { Account } from './class/Account';

const newAccount: Account = new Account('John Doe', 1234567890);
console.log(newAccount);
newAccount.deposit(500);
newAccount.withdraw(200);

const anotherAccount: Account = new Account('Jane Doe', 9876543210);
console.log(anotherAccount);
anotherAccount.deposit(1000);
anotherAccount.withdraw(500);