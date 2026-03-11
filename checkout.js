
const QUERY = window.location.search;
const PARAMS = new URLSearchParams(QUERY);

function processData(){

    let shopper = PARAMS.get("shopper");
    let appleAmount = PARAMS.get("appleAmount");
    let bananaAmount = PARAMS.get("bananaAmount");
    let paymentAmount = PARAMS.get("paymentAmount");

    let applePrice = 7*(appleAmount);
    let bananaPrice = 3*(bananaAmount);
    let totalCost = applePrice + bananaPrice;
    let change = paymentAmount - totalCost;

    document.getElementById("greetings").innerText = `Hello, ${shopper} :D !!!`;
    document.getElementById("appleAmount").innerText = `Apple Quantity: ${appleAmount}`;
    document.getElementById("bananaAmount").innerText = `Banana Quantity: ${bananaAmount}`;
    document.getElementById("totalCost").innerText = `Total Cost: $${totalCost}`;

    if (paymentAmount < totalCost) {
        document.getElementById("paymentAmount").innerText = "Payment is insufficient";
    } else {
        document.getElementById("paymentAmount").innerText = `Payment Provided: $${paymentAmount}`;
        document.getElementById("change").innerText = `Change: $${change}`;
    }
}


