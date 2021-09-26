<?php
include '../headers.php';

if (empty($_GET["fecha"])) {
    exit("No se pudo obtener la fecha");
}


$fecha = $_GET["fecha"];

$val = "'".$fecha ."'";

$bd = include "../db.php";

$sentencia = $bd->query("CALL consulta_una_fecha(".$val.");");
$resultado = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($resultado);
?>
