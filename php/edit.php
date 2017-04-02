<?php
header('content-type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
$dbhost = 'localhost';
$db = 'app';
$name = 'root';
$pass = '';

$dbconn = mysqli_connect($dbhost,$name,$pass,$db);
$get = file_get_contents("php://input");
$data = json_decode($get);
$id = $data->id;
$title = $data->title;
$text = $data->text;

$query = mysqli_query($dbconn,"UPDATE posts SET title='$title',text='$text' where id=$id");

 ?>
