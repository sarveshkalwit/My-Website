<?php
	//db info
	$user = "user";
	$password = "password";
	$host = "host";
	$dbase = "emails.db";
	$table = "emails";
	
	//retrieve user data from site
	$time = time();
	$datetime = date("d/m/Y", time);
	$email = $_POST['user_email'];	
	$query("INSERT INTO $table (timestamp, email)
		VALUES (%s, %s)", ($time, $datetime));

	//establish connection to database
	$connection = mysql_connect($host, $user, $password);

	//insert values into database
	mysqli_query($connection, $query);

	//return success message and close connection
	echo 'success';
	mysql_close($connection);
?>
