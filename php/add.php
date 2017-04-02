<?php
header('content-type: application/json; charset=utf-8');
header("access-control-allow-origin: *");
$dbhost = 'localhost';
$db = 'data';
$name = 'root';
$pass = '';

$dbconn = mysqli_connect($dbhost,$name,$pass,$db);
$get = file_get_contents("php://input");
$data = json_decode($get);
$title = $data->title;
$text = $data->text;
$action = "insert into posts (title,text) VALUES ('$title','$text')";
$query = mysqli_query($dbconn,$action);
 ?>
