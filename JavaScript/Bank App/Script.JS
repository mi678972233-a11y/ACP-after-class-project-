// Select elements
let balanceEl = document.getElementById("balance");
let incomeEl = document.getElementById("income");
let expenseEl = document.getElementById("expense");
let list = document.getElementById("list");

let balance = 0;
let income = 0;
let expense = 0;

// Add transaction function
function addTransaction() {

    let desc = document.getElementById("desc").value;
    let amount = Number(document.getElementById("amount").value);
    let type = document.getElementById("type").value;

    if (desc === "" || amount === "") {
        alert("Please enter values");
        return;
    }

    // Create list item
    let li = document.createElement("li");
    li.textContent = desc + " : " + amount + " PKR";
    list.appendChild(li);

    // Update values
    if (type === "income") {
        income += amount;
        balance += amount;
    } else {
        expense += amount;
        balance -= amount;
    }

    // Update UI
    balanceEl.textContent = balance;
    incomeEl.textContent = income;
    expenseEl.textContent = expense;

    // Clear inputs
    document.getElementById("desc").value = "";
    document.getElementById("amount").value = "";
}