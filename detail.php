<?php
header("Access-Control-Allow-Origin: *");
$dbhost = 'localhost';
$db = 'data';
$name = 'root';
$pass = '';

$dbconn = mysqli_connect($dbhost,$name,$pass,$db);
/*$request = json_decode( file_get_contents('php://input') );
$variable = $request->data
$id = $variable->id;*/
//echo $id;
$id = $_GET['id'];
echo $id;
//$id = 7;
$query = mysqli_query($dbconn,"select * from posts where id=$id");
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
