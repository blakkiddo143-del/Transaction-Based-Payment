let userBalance = 5000;
let merchantBalance = 2000;

function processPayment() {

    let amount = parseFloat(document.getElementById("amount").value);
    let message = document.getElementById("message");

    let tempUserBalance = userBalance;
    let tempMerchantBalance = merchantBalance;

    if (isNaN(amount) || amount <= 0) {
        message.innerHTML = "❌ Enter valid amount!";
        message.className = "error";
        return;
    }

    if (tempUserBalance >= amount) {

        tempUserBalance -= amount;
        tempMerchantBalance += amount;

        // COMMIT Simulation
        userBalance = tempUserBalance;
        merchantBalance = tempMerchantBalance;

        document.getElementById("userBalance").innerText = userBalance;
        document.getElementById("merchantBalance").innerText = merchantBalance;

        message.innerHTML = "✅ Transaction Successful (COMMIT)";
        message.className = "success";

    } else {

        // ROLLBACK Simulation
        message.innerHTML = "❌ Transaction Failed - Insufficient Balance (ROLLBACK)";
        message.className = "error";
    }

    document.getElementById("amount").value = "";
}
