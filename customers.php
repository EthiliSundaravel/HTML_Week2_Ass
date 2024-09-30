<?php
phpinfo();
error_reporting(E_ALL);
ini_set('display_errors', 1);
// Database connection code
$con = mysqli_connect('localhost', 'root', '', 'tbc');

// Check connection
if (!$con) {
    die("Connection failed: " . mysqli_connect_error());
}

// Prepare and bind
$stmt = $con->prepare("INSERT INTO customers (lastname, firstName) VALUES (?, ?)");
$stmt->bind_param("ss", $lastName, $firstName);

// Get the post records
$lastName = $_POST['lastName'];
$firstName = $_POST['firstName'];

// Execute the statement
if ($stmt->execute()) {
    echo "Contact Records Inserted";
} else {
    echo "Error: " . $stmt->error;
}

// Close the statement and connection
$stmt->close();
$con->close();
?>
