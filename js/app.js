const incomes = [
    new Income('Salary', 2100.00),
    new Income('Car Sale', 1500)
];

const expenses = [
    new Expense('Apartment Rent', 900),
    new Expense('Clothing', 400)
];

let loadApp = () => {
    loadHeader();
    loadIncomes();
    loadExpenses();
}

let totalIncomes = () => {
    let totalIncome = 0;
    for (let income of incomes) {
        totalIncome += income.value;
    }
    return totalIncome;
}

let totalExpenses = () => {
    let totalExpense = 0;
    for (let expense of expenses) {
        totalExpense += expense.value;
    }
    return totalExpense;
}

let loadHeader = () => {
    let budget = totalIncomes() - totalExpenses();
    let expensePercentage = totalExpenses() / totalIncomes();
    document.getElementById('budget').innerHTML = formatCurrency(budget);
    document.getElementById('percentage').innerHTML = formatPercentage(expensePercentage);
    document.getElementById('incomes').innerHTML = formatCurrency(totalIncomes());
    document.getElementById('expenses').innerHTML = formatCurrency(totalExpenses());
}

const formatCurrency = (value) => {
    return value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 });
}

const formatPercentage = (value) => {
    return value.toLocaleString('en-US', { style: 'percent', minimumFractionDigits: 2 });
}

const loadIncomes = () => {
    let incomesHTML = '';
    for (let income of incomes) {
        incomesHTML += createIncomeHTML(income);
    }
    document.getElementById('income-list').innerHTML = incomesHTML;
}

const createIncomeHTML = (income) => {
    let incomeHTML = `
    <div class="item clearStyles">
        <div class="item-description">${income.description}</div>
        <div class="right clearStyles">
            <div class="item-value">+${formatCurrency(income.value)}</div>
            <div class="item-delete">
                <button class='item-delete-btn'>
                    <ion-icon name="close-circle-outline"
                        onclick='deleteIncome(${income.incomeId})'></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return incomeHTML;
}

const deleteIncome = (incomeId) => {
    let indexToDelete = incomes.findIndex(income => income.incomeId === incomeId);
    incomes.splice(indexToDelete, 1);
    loadHeader();
    loadIncomes();
}

const loadExpenses = () => {
    let expensesHTML = '';
    for (let expense of expenses) {
        expensesHTML += createExpenseHTML(expense);
    }
    document.getElementById('expense-list').innerHTML = expensesHTML;
}

const createExpenseHTML = (expense) => {
    let expenseHTML = `
    <div class="item clearStyles">
        <div class="item-description">${expense.description}</div>
        <div class="right clearStyles">
            <div class="item-value">- ${formatCurrency(expense.value)}</div>
            <div class="item-percentage">${formatPercentage(expense.value / totalExpenses())}</div>
            <div class="item-delete">
                <button class='item-delete-btn'>
                    <ion-icon name="close-circle-outline"
                    onclick='deleteExpense(${expense.expenseId})'></ion-icon>
                </button>
            </div>
        </div>
    </div>
    `;
    return expenseHTML;
}

let deleteExpense = (expenseId) => {
    let indexToDelete = expenses.findIndex(expense => expense.expenseId === expenseId);
    expenses.splice(indexToDelete, 1);
    loadHeader();
    loadExpenses();
}

let addItem = () => {
    let form = document.forms['form'];
    let type = form['type'];
    let description = form['description'];
    let value = form['value'];
    if (description.value !== '' && value.value !== '') {
        if (type.value === 'income') {
            incomes.push(new Income(description.value, Number(value.value)));
            loadHeader();
            loadIncomes();
        } else if (type.value === 'expense') {
            expenses.push(new Expense(description.value, +value.value));
            loadHeader();
            loadExpenses();
        }
    }
}
