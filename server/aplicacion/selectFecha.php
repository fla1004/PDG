<?php
header("Access-Control-Allow-Origin: http://localhost:4200");

if (empty($_GET["fecha"])) {
    exit("No se pudo obtener la fecha");
}


$fecha = $_GET["fecha"];

$val = "'".$fecha ."'";

$bd = include "../db.php";

$sentencia = $bd->query("CALL app_consulta_fecha(".$val.");");
$resultado = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($resultado);
?>
