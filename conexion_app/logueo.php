<?php
header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

include 'config.php';


header("Content-Type: application/json");


$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);


if($method=='POST'){
    $data=$input;
    logueo($data);
    
    
}
function logueo($data){
    $conn = connection();
    $Usuario= $data['Usuario'];
    $query= "select Password from usuarios where usuarios_nom='$Usuario';";
    mysqli_query ( $conn, $query); 
    foreach ($conn->query($query) as $row) {print $row['Password'] . "\t";}
    $Contrasena=$row['Password'];
}   



?>