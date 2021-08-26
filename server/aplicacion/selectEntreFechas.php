<?php
    header("Access-Control-Allow-Origin: http://localhost:4200");

    if (empty($_GET["fecha1"]) && empty($_GET["fecha2"])) {
        exit("Fechas vacias");
    }
    if (empty($_GET["fecha1"]) || empty($_GET["fecha2"])) {
        exit("Una fecha vacia");
    }

    $fecha1 = $_GET["fecha1"];
    $fecha2 = $_GET["fecha2"];


    $bd = include "../db.php";

    $val1 = "'".$fecha1."'";
    $val2 = "'".$fecha2."'";


    $sentencia = $bd->query("CALL app_consulta_entre_fechas(".$val1.",".$val2.");");
    $resultado = $sentencia->fetchAll(PDO::FETCH_OBJ);
    echo json_encode($resultado);
?>
