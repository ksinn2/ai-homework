// DOM Elements
const categoryInput = document.getElementById('category');
const amountInput = document.getElementById('amount');
const addExpenseBtn = document.getElementById('add-expense');
const expenseList = document.getElementById('expense-list');
const calculateBtn = document.getElementById('calculate');
const resultContent = document.getElementById('result-content');
const totalAmountEl = document.getElementById('total-amount');
const averageDailyEl = document.getElementById('average-daily');
const topExpensesEl = document.getElementById('top-expenses');

// Array to store expenses
let expenses = [];

// Sample data for demonstration (can be removed)
function loadSampleData() {
    const sampleExpenses = [
        { category: 'Groceries', amount: 15000 },
        { category: 'Rent', amount: 40000 },
        { category: 'Transportation', amount: 5000 },
        { category: 'Entertainment', amount: 10000 },
        { category: 'Communication', amount: 2000 },
        { category: 'Gym', amount: 3000 }
    ];
    
    sampleExpenses.forEach(expense => {
        expenses.push(expense);
        addExpenseToTable(expense);
    });
}

// Display expense in the table
function addExpenseToTable(expense) {
    const row = document.createElement('tr');
    
    const categoryCell = document.createElement('td');
    categoryCell.textContent = expense.category;
    
    const amountCell = document.createElement('td');
    amountCell.textContent = formatCurrency(expense.amount);
    
    const actionCell = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        expenses = expenses.filter(exp => exp !== expense);
        row.remove();
    });
    
    actionCell.appendChild(deleteBtn);
    
    row.appendChild(categoryCell);
    row.appendChild(amountCell);
    row.appendChild(actionCell);
    
    expenseList.appendChild(row);
}

// Format currency
function formatCurrency(amount) {
    return '$' + amount.toLocaleString();
}

// Add new expense
addExpenseBtn.addEventListener('click', () => {
    const category = categoryInput.value.trim();
    const amount = parseFloat(amountInput.value);
    
    if (category === '' || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid category and amount');
        return;
    }
    
    const expense = { category, amount };
    expenses.push(expense);
    
    addExpenseToTable(expense);
    
    // Clear inputs
    categoryInput.value = '';
    amountInput.value = '';
    categoryInput.focus();
});

// Calculate results
calculateBtn.addEventListener('click', () => {
    if (expenses.length === 0) {
        alert('Please add at least one expense');
        return;
    }
    
    // Calculate total
    const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    
    // Calculate average daily (assuming 30 days in a month)
    const averageDaily = totalAmount / 30;
    
    // Find top 3 expenses
    const sortedExpenses = [...expenses].sort((a, b) => b.amount - a.amount);
    const topExpenses = sortedExpenses.slice(0, 3);
    
    // Display results
    totalAmountEl.textContent = formatCurrency(totalAmount);
    averageDailyEl.textContent = formatCurrency(averageDaily);
    
    // Clear previous top expenses
    topExpensesEl.innerHTML = '';
    
    // Add top expenses to list
    topExpenses.forEach(expense => {
        const li = document.createElement('li');
        li.textContent = `${expense.category} (${formatCurrency(expense.amount)})`;
        topExpensesEl.appendChild(li);
    });
    
    // Show results
    resultContent.classList.remove('hidden');
});

// Allow pressing Enter to add expense
amountInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        addExpenseBtn.click();
    }
});

// Initialize with sample data (optional)
// Uncomment the next line to load sample data automatically
loadSampleData(); 