<?php
header("Access-Control-Allow-Origin: *");
$dbhost = 'localhost';
$db = 'data';
$name = 'root';
$pass = '';
/*
$dbconn = new PDO ("mysql:host={$dbhost};dbname={$db}",$name,$pass);
$sql = $dbconn->prepare("select * from posts");
$sql->execute();
$fetch = $sql->fetchAll();
while($post = $sql->fetch(PDO::FETCH_ASSOC)){
  echo $post['title'];
  echo $post['text'];
  $output .= '{"title":"'.$post['title'].'",';
  $output .= '"text":"'.$post['text'].'"}';
}
*/
$dbconn = mysqli_connect($dbhost,$name,$pass,$db);
$query = mysqli_query($dbconn,"select * from posts");
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
