<?php 
      include "../../../../headers.php";
      include 'plantilla.php';
      
      $bd = include "../../../../db.php";

    if (empty($_GET["fecha1"]) && empty($_GET["fecha2"])) {
        exit("Fechas vacias");
    }
    if (empty($_GET["fecha1"]) || empty($_GET["fecha2"])) {
        exit("Una fecha vacia");
    }

    $fecha1 = $_GET["fecha1"];
    $fecha2 = $_GET["fecha2"];

    $val1 = "'".$fecha1."'";
    $val2 = "'".$fecha2."'";

    $sentencia = $bd->query("CALL app_consulta_entre_fechas(".$val1.",".$val2.");");
    $resultado = $sentencia->fetchAll(PDO::FETCH_OBJ); 
    
    $pdf = new PDF();
	$pdf->AliasNbPages();
	$pdf->AddPage();
	$pdf->SetFillColor(232,232,232);
    $pdf->SetFont('Arial','B',14);
    $pdf->text(95,24.5,($resultado[0]->Fecha) ,1,0,'C',1);
    $pdf->text(130,24.5,($resultado[sizeof($resultado)-1]->Fecha),1,0,'C',1);
	$pdf->SetFont('Arial','B',12);
	$pdf->Cell(45,6,'Fecha',1,0,'C',1);
	$pdf->Cell(45,6,'Densidad',1,0,'C',1);
	$pdf->Cell(45,6,'Viscosidad',1,0,'C',1);
    $pdf->Cell(45,6,'Temperatura',1,1,'C',1);
	$pdf->SetFont('Arial','',10);
   
    if(sizeof($resultado)>0)
    {
        for($i = 0; $i < sizeof($resultado) ; $i++) {
            if($resultado[$i]->IdSector == '1'){
                $pdf->Cell(45,6,($resultado[$i]->Fecha),1,0,'C');
                $pdf->Cell(45,6,utf8_decode($resultado[$i]->Densidad." kg/m³"),1,0,'C');
                $pdf->Cell(45,6,(($resultado[$i]->Viscosidad." cps")),1,0,'C');
                $pdf->Cell(45,6,utf8_decode($resultado[$i]->Temperatura." °C"),1,1,'C');
            }
	    }
    }
    else
    {
        echo "No existen registros";
    }
	//Create file
    $pdf->Output();
?>