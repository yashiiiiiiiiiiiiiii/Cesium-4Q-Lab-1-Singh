function validateForm(){
    let shopper = document.forms["checkout_form"]["shopper"].value;
    document.forms["checkout_form"]["shopper"].value = shopper.trim();

    if(shopper.trim() === ""){
        alert("Name is required.");
        return false;
    }
    return true;
}
