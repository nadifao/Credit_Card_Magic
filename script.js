
let count = 0;

document.getElementById('donation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    const cardRegex = /^(4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14})$/;

    const cardInput = document.getElementById('credit-card');
    if (!cardRegex.test(cardInput.value)) {
        document.getElementById('card-error-message').style.display = 'block';
        valid = false;
    } else {
      count++;
        document.getElementById('card-error-message').style.display = 'none';
    }

    if (count >= 2) {
        alert('Thank you!');
    }


});

document.getElementById('cvv-number').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    const cardRegex = /^[1-9][0-9]{2}$/;

    const cardInput = document.getElementById('cvv');
    if (!cardRegex.test(cardInput.value)) {
        document.getElementById('cvv-error-message').style.display = 'block';
        valid = false;
    } else {
      count ++;
        document.getElementById('cvv-error-message').style.display = 'none';
        if (count >= 2) {
            alert('Thank you!');
        }
    }


});



document.getElementById('expiration date').addEventListener('submit', function(event) {
    event.preventDefault();
    let valid = true;

    const monthRegex = /^1[0-2][/]2[4-9]$|^0[1-9][/]2[4-9]$/;

    const cardInput = document.getElementById('cvv');
    if (!monthRegex.test(cardInput.value)) {
        document.getElementById('cvv-error-message').style.display = 'block';
        valid = false;
    } else {
      count ++;
        document.getElementById('cvv-error-message').style.display = 'none';
        if (count >= 2) {
            alert('Thank you!');
        }
    }


});

// if (count >= 1) {
//     alert('Thank you!');
// }
