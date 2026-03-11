function validateForm(){
    let shopper = document.forms["checkout-form"]["shopper"].value;

    document.forms["checkout-form"]["shopper"].value = shopper.trim();

    if(shopper.trim() === ""){
        alert("Name is required!")
        return false;
    }
}