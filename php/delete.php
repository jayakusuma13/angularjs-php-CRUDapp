<?php
header('content-type: application/json; charset=utf-8');
header("Access-Control-Allow-Origin: *");
$dbhost = 'localhost';
$db = 'data';
$name = 'root';
$pass = '';

$dbconn = mysqli_connect($dbhost,$name,$pass,$db);
$get = file_get_contents("php://input");
$data = json_decode($get);
$id = $data->id;

$query = mysqli_query($dbconn,"DELETE FROM posts where id=$id");

 ?>
