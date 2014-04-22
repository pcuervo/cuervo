<?php
	$nombre = $_POST['nombre'];
	$email = $_POST['email'];
	$mensaje = $_POST['cuentanos-mas'];

	$header = "MIME-Version: 1.0\r\n";
	$header .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$header .= "To: Some One <miguel@pcuervo.com>\r\n"; 
    $header .= "Return-Path: Some One <miguel@pcuervo.com>\r\n"; 
    $header .= "From: Some One <miguel@pcuervo.com>\r\n"; 
    $header .= "Organization: My Organization\r\n"; 
 
    $msg = '<html><body>';
    $msg .= '<h1>msg cuervo</h1>';
    $msg .= '<div><p>'.$nombre.' ha mandado un correo</p>';
    $msg .= '<p>'.$email.'</p>';
    $msg .= '<p>'.$mensaje.'</p></div>';
    $msg .= '</body></html>';


    mail("miguel@pcuervo.com", "Test Message", $msg, $header); 

	echo json_encode(array("nombre" => $nombre));
?>