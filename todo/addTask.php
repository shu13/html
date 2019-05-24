<?php

$servername = "localhost";
$username = "root";
$password = "freegooglepass";
$dbname = "myDB";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if(!conn){
	die("Connection failed: " . mysqli_connect_error());
}

$q = $_REQUEST["q"];

$sql = "INSERT INTO todos (task) VALUES ('$q')";

if(mysqli_query($conn, $sql)){
	echo "New record created";
}else{
	echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
?>
