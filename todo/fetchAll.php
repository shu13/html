<?php

$servername = "localhost";
$username = "root";
$password = "freegooglepass";
$dbname = "myDB";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if(!$conn){
	die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM  todos";
$result = mysqli_query($conn, $sql);

if(mysqli_num_rows($result) > 0){
	while($row = mysqli_fetch_assoc($result)){
		if($row["completed"]==1){
			echo "<div style='text-decoration:line-through'>".$row["task"]."</div>";
		}else{
		echo "<div>".$row["task"]."</div>";
		}
	}
}else{
}

mysqli_close($conn);
?>
