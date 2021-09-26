<?php    
    include "../../../headers.php";
    include 'plantilla.php';
    
    $bd = include "../../../db.php";
	$sentencia = $bd->query("CALL `consulta_dia`()");
    $resultado = $sentencia->fetchAll(PDO::FETCH_OBJ); 
    
    $pdf = new PDF();
	$pdf->AliasNbPages();
	$pdf->AddPage();
	$pdf->SetFillColor(232,232,232);
    $pdf->SetFont('Arial','B',14);
    $pdf->text(110,24.5, $resultado[0]->Fecha,1,0,'C',1);
	$pdf->SetFont('Arial','B',12);
	$pdf->Cell(36,6,'Fecha',1,0,'C',1);
	$pdf->Cell(36,6,'Secadero',1,0,'C',1);
	$pdf->Cell(36,6,'Horno',1,0,'C',1);
    $pdf->Cell(36,6,'Perdidos',1,0,'C',1);
	$pdf->Cell(36,6,'Total',1,1,'C',1);
	$pdf->SetFont('Arial','',10);
   
    if(sizeof($resultado)>0)
    {
        for($i = 0; $i < sizeof($resultado) ; $i++) {
            $pdf->Cell(36,6,($resultado[$i]->Fecha),1,0,'C');
            $pdf->Cell(36,6,($resultado[$i]->Secadero."unidades"),1,0,'C');
            $pdf->Cell(36,6,(($resultado[$i]->Horno."unidades")),1,0,'C');
            $pdf->Cell(36,6,($resultado[$i]->Secadero - $resultado[$i]->Horno."unidades"),1,0,'C');
            $pdf->Cell(36,6,(($resultado[$i]->Horno."unidades")),1,1,'C');
	    }
    }
    else
    {
        echo "No existen registros";
    }
	//Create file
    $pdf->Output();
?>