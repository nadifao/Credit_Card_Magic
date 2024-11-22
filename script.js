
document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;
    
    const cardRegex = /^(4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/;
    
    const cardInput = document.getElementById('credit-card');
    if (!cardRegex.test(cardInput.value)) {
        document.getElementById('error-message').style.display = 'block';
        valid = false;
    } else {
        document.getElementById('error-message').style.display = 'none';
    }
    
    if (valid) {
        alert('Thank you!');
    }
});

