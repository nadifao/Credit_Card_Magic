
document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission for validation
    let valid = true;
    
    // Card validation regex for Visa or MasterCard
    const cardRegex = /^(4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/;
    
    // Validate credit card number
    const cardInput = document.getElementById('credit-card');
    if (!cardRegex.test(cardInput.value)) {
        document.getElementById('error-message').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('error-message').style.display = 'none';
    }
    
    // Additional validation can be added for other fields
    // If all fields are valid, you can proceed with form submission
    if (valid) {
        alert('Thank you!');
        // Proceed with form submission if needed:
        // this.submit();
    }
});

