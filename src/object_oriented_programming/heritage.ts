import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';

const peopleAccount: PeopleAccount = new PeopleAccount('John Doe admin', 1234567890, 123456789);
console.log(peopleAccount);
peopleAccount.deposit(500);
peopleAccount.withdraw(200);
peopleAccount.getDocId();
peopleAccount.getBalance();

console.log('-------------------');

const account: CompanyAccount = new CompanyAccount('Jane Doe', 9876543210);
console.log(account);
console.log(account.deposit(5000));
account.withdraw(500);
account.getLoan();