let expenses = [];

function addExpense() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (description && amount) {
        const expense = {
            id: Date.now(),
            description: description,
            amount: amount
        };

        expenses.push(expense);
        renderExpenses();
        document.getElementById('expenseForm').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    renderExpenses();
}

function renderExpenses() {
    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';
    
    expenses.forEach(expense => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${expense.description} - ${expense.amount}</span>
            <button onclick="deleteExpense(${expense.id})">Excluir</button>
        `;
        expenseList.appendChild(li);
    });
}