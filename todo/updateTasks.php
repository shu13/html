<?php
$servername = "localhost";
$username = "root";
$password = "freegooglepass";
$dbname = "myDB";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!conn){
  die("failed: " . mysqli_connect_error());
}

$completed = $_POST["completed"];
$task = $_POST["task"];

$sql = "UPDATE todos SET completed = '$completed' WHERE task = '$task' LIMIT 1";

if(mysqli_query($conn, $sql)){
  echo "updated successfully";
}else{
  echo "error: " . $sql . mysqli_error($conn);
}

mysqli_close($conn);

?>
