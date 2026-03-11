
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

    document.getElementById("greetings").innerText = `Thank you for ordering :D !!!`;
    document.getElementById("shopperName").innerText = `Customer: ${shopper}`;
    document.getElementById("appleAmount").innerText = `Apple Quantity: ℛℳ ${appleAmount}`;
    document.getElementById("bananaAmount").innerText = `Banana Quantity: ℛℳ ${bananaAmount}`;
    document.getElementById("totalCost").innerText = `Total Cost: ℛℳ ${totalCost}`;

    if (paymentAmount < totalCost) {
        document.getElementById("paymentAmount").innerText = "Payment is insufficient";
    } else {
        document.getElementById("paymentAmount").innerText = `Payment Provided: ℛℳ ${paymentAmount}`;
        document.getElementById("change").innerText = `Change: ℛℳ ${change}`;
    }
}
