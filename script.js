document.getElementById('date-input').addEventListener('input', function (e) {
    let input = e.target.value;

    input = input.replace(/\s+/g, ' ');

    input = input.replace(/([a-zA-Z]+)(\d)/, '$1 $2'); // Space after the word
    input = input.replace(/(\d{2})(\d)/, '$1 $2');     // Space after day

    e.target.value = input;
});