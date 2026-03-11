const QUERY = window.location.search;
const PARAMS = new URLSearchParams(QUERY);

function processData(){
    let shopper = PARAMS.get("shopper");
    document.getElementById("greetings").innerText = `Hello, ${shopper}!`;  
    
    let appleQuantity = PARAMS.get("appleQuantity");

    let bananaQuantity = PARAMS.get("bananaQuantity");

    let paymentAmount = PARAMS.get("paymentAmount");

    let totalPrice = ((5)*appleQuantity) + ((3)*bananaQuantity);

    let change = paymentAmount - totalPrice;

    let result;

    if(change >= 0){
        result = `your change is ${change}`;
    }else if{
        result = "you don't have enough money";
    }

    document.getElementById("result").innerText = `Total cost is ${totalPrice}, ${result}.`;
}