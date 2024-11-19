<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $amount = $_POST['amount'];
    $name = $_POST['name'];
    $email = $_POST['email'];

 
    if (empty($amount) || empty($name) || empty($email)) {
        die("All fields are required!");
    }

    echo "<h1>Thank you, $name!</h1>";
    echo "<p>Your donation of \$$amount will make a huge difference in these puppies' lives.</p>";
}
?>

/*this is so funkyyyugitrofejighure8u9wfdoijfhurwa stackoverflow my saviour.*/
