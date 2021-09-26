<?php
    include '../headers.php';

    $bd = include "../db.php";
    $sentencia = $bd->query("CALL `consulta_dia`()");
    $mascotas = $sentencia->fetchAll(PDO::FETCH_OBJ);
 
    echo json_encode($mascotas);
    
?>