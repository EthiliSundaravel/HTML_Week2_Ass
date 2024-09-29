<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');

$con = mysqli_connect('localhost', 'root', '','tbc');

// get the post records
$lastName = $_POST['lastName'];
$firstName= $_POST['firstName'];
//$email = $_POST['email'];
//$custphone = $_POST['custphone'];
//$custaddress = $_POST['custaddress'];
//$custmessage = $_POST['custmessage'];

// database insert SQL code
$sql = "INSERT INTO customers (lastname,firstName) VALUES ('$lastName','$firstName')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	echo "Contact Records Inserted";
}
?>

