<?php

include 'config.php';


header("Content-Type: application/json");


$method = $_SERVER['REQUEST_METHOD'];
$input = json_decode(file_get_contents('php://input'), true);


if($method=='POST'){
    $data=$input;
    echo $data['Usuario'];
    usuario($data);
    
    
}
function usuario($data){
    $conn = connection();
    $Usuario= $data['Usuario'];
    $Contrasena= $data['Contrasena'];
    $Estado= $data['Rol'];
    $Rol= $data['Estado'];
    $query= "INSERT INTO usuarios (usuarios_nom,password,rol,estado_usuario) VALUES ('$Usuario', '$Contrasena','$Estado','$Rol')";
    mysqli_query ( $conn, $query);
    
    
}




?>