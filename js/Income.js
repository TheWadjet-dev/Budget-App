class Income extends Data {
    static incomeCounter = 0;

    constructor(description, value) {
        super(description, value);
        this._incomeId = ++Income.incomeCounter;
    }

    get incomeId() {
        return this._incomeId;
    }
}
