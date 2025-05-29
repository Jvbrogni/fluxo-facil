export class TransactionBuilder {
    private transaction: any = {};

    static create() {
        return new TransactionBuilder();
    }

    withDescription(description: string) {
        this.transaction.description = description;
        return this;
    }

    withDate(date: string) {
        this.transaction.date = date;
        return this;
    }

    withCategory(category?: string) {
        if (category) this.transaction.category = category;
        return this;
    }

    withAmount(amount: number) {
        this.transaction.amount = amount;
        return this;
    }

    build() {
        return this.transaction;
    }
}
