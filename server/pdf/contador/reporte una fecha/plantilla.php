<?php  
	include "../../../headers.php";
	require '../../../fpdf/fpdf.php';
	
	class PDF extends FPDF
	{
		function Header()
		{
			$this->Image('../../../../src/assets/img/logo/descarga.jpg', 15, 10, 20 );
			$this->SetFont('Arial','B',15);
			$this->Cell(30);
			$this->Cell(120,10, 'Reporte contador de piezas',0,0,'C');
			$this->Ln(8);
			$this->Cell(150,10,utf8_decode('Registros del día: '),0,0,'C');
			$this->Ln(20);
		}
		function Footer()
		{
			$this->SetY(-15);
			$this->SetFont('Arial','I', 8);
			$this->Cell(0,10, 'Pagina '.$this->PageNo().'/{nb}',0,0,'C' );
		}	
	}
?>