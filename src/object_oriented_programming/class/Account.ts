import { DioAccount } from "./DioAccount";
export class Account extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

}