<?php
    header("Access-Control-Allow-Origin: http://localhost:4200");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

    $bd = include "../db.php";
    $sentencia = $bd->query("CALL app_ultimo_registro();");
    $mascotas = $sentencia->fetchAll(PDO::FETCH_OBJ);
    echo json_encode($mascotas);
?>