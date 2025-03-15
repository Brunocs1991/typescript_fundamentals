import { DioAccount } from './DioAccount';
export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    getLoan = () => {
        console.log(`The loan of ${this.name} account is ${this.balance}`);
    }


    deposit = (amount: number): number => {
        return amount;
    }
}