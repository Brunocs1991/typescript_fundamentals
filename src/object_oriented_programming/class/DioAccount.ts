export abstract class DioAccount {
    name: string;
    accountNumber: number;
    balance: number = 0;


    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    deposit = (amount: number): void => {
        console.log(`Depositing ${amount} to ${this.name} account`);
    }

    withdraw = (amount: number): void => {
        console.log(`Withdrawing ${amount} from ${this.name} account`);
    }
    getBalance = (): void => {
        console.log(`The balance of ${this.name} account is ${this.balance}`);
    }
}