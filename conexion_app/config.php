<?php

function connection (){
$host = 'localhost'; // El host de la base de datos
$user = 'root'; // El usuario de la base de datos
$password = ''; // Sin contraseña
$database = 'bd_proceso_app'; // Nombre de la base de datos

return new mysqli($host, $user, $password, $database);
}
?>
