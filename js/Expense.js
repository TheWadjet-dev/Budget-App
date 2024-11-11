class Expense extends Data {
    static expenseCounter = 0;

    constructor(description, value) {
        super(description, value);
        this._expenseId = ++Expense.expenseCounter;
    }

    get expenseId() {
        return this._expenseId;
    }
}
