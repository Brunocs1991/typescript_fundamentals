import { DioAccount } from './DioAccount';
export class PeopleAccount extends DioAccount {
    docId: number
    constructor(name: string, accountNumber: number, docId: number) {
        super(name, accountNumber);
        this.docId = docId;
    }

    getDocId() {
        console.log(`The document ID is ${this.docId}`);
    }
}