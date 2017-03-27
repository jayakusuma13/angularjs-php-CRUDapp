<?php
header("Access-Control-Allow-Origin: *");
$dbhost = 'localhost';
$db = 'data';
$name = 'root';
$pass = '';

$dbconn = mysqli_connect($dbhost,$name,$pass,$db);
$get = file_get_contents("php://input");
$data = json_decode($get);
$id = $data->id;
$query = mysqli_query($dbconn,"select * from posts where id = '$id'");
$output = "";
while($post = mysqli_fetch_array($query)){
  if($output != ""){
    $output .= ",";
  };
  $output .= '{"id":"'.$post['id'].'","title":"'.$post['title'].'","text":"'.$post['text'].'"}';
};
$output = '['.$output.']';
echo $output;

 ?>
