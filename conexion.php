<?php
// Conexión a la base de datos
$servername = "127.0.0.1";
$username = "michael.camacho";
$password = "Mc2024.**";
$dbname = "tarjetas";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Consulta para obtener los datos de contacto
$sql = "SELECT * FROM DatosContacto";
$result = $conn->query($sql);

// Verificar si hay resultados y mostrar los datos
if ($result->num_rows > 0) {
    // Obtener la primera fila de resultados
    $row = $result->fetch_assoc();
    $nombre = $row["Nombre"];
    $cargo = $row["Cargo"];
    $area = $row["Area"];
    $funcion = $row["Funcion"];
    $email = $row["Email"];
    $celular = $row["Celular"];
    $telefonoFijo = $row["TelefonoFijo"];
    $paginaWeb = $row["PaginaWeb"];
    $direccion = $row["Direccion"];
    $codigoPostal = $row["CodigoPostal"];
} else {
    echo "No se encontraron resultados.";
}

// Cerrar conexión
$conn->close();
?>
