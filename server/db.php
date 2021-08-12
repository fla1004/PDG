<?php
   
    $contraseña = "70738098";
    $usuario = "root";
    $nombre_base_de_datos = "pdg";
    try {
        
        return new PDO('mysql:host=localhost;dbname=' . $nombre_base_de_datos, $usuario, $contraseña);
    } catch (Exception $e) {
        echo "Ocurrió algo con la base de datos: " . $e->getMessage();
    }
    /*
   $dbhost = "localhost";
   $dbuser = "root";
   $dbpass = "70738098";
   $dbname = "pdg";

   $conn = mysqli_connect($dbhost,$dbuser,$dbpass,$dbname)
       or die("Problemas en la conexion");*/

  
?>