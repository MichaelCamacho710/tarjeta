

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tarjeta de Presentación</title>
  <link rel="stylesheet" href="css/styles.css">
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <link rel="shortcut icon" href="img/icon.png" type="image/png" />
</head>

<body>
  <img src="img/logo.png" alt="Profile Picture" class="logo">
  <div class="contianer">
    <div class="card">
      <div class="card-container">
        <div class="card-front">
          <div class="content-container">
            <!-- Aquí la imagen y el cargo -->
            <div class="card-image" style="background-image: url('img/funcionarios/apfc.png');"></div>
            <p class="pAnalista"><?php echo $Cargo; ?></p>
          </div>
          <div class="card-textWrapper">
            <!-- Aquí el nombre, cargo, área y función -->
            <h2 class="card-subHeading">Ing. <?php echo $Nombre; ?></h2>
            <h3 class="card-heading">Ocupa el cargo de <?php echo $Cargo; ?> en el área <?php echo $Area; ?>, desempeñando funciones avanzadas en <?php echo $Funcion; ?>.</h3>
            <button id="verMasBtn"><a href="#" class="card-trigger link--styled">Ver más</a></button>
          </div>
        </div>
        
        <div class="card-back">
          <h2 class="datosPersonales">Datos Personales</h2>
          <div class="card-close"></div>
          <div class="table-container">
            <table width="100%" class="info-table">
              <tr>
                <!-- Aquí la información de contacto -->
                <td class="element-container">
                  <h4><b>Email:</b></h4>
                  <p><a href="mailto:<?php echo $Email; ?>"><?php echo $Email; ?></a></p>
                  <h4><b>Celular:</b></h4>
                  <p><a href="tel:<?php echo $Celular; ?>"><i class="fas fa-phone"></i>&nbsp;<?php echo $Celular; ?></a></p>
                  <h4><b>Teléfono fijo:</b></h4>
                  <p><a href="tel:<?php echo $TelefonoFijo; ?>"><i class="fas fa-phone"></i>&nbsp;<?php echo $TelefonoFijo; ?></a></p>
                </td>
                <td class="element-container">
                  <h4><b>Página Web:</b></h4>
                  <p><a href="<?php echo $PaginaWeb; ?>"><?php echo $PaginaWeb; ?></a></p>
                  <h4><b>Dirección:</b></h4>
                  <p><?php echo $Direccion; ?></p>
                  <h4><b>Código Postal:</b></h4>
                  <p><?php echo $CodigoPostal; ?></p>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL INFORMACION AÑADIR A CONTACTOS -->
  <!-- <div id="modalContainer">
    <div id="myModal">
      <p>Se descargará un archivo con el contacto solicitado, luego lo podrás guardar en el dispositivo o en tu cuenta de preferencia. Posterior a esto, búscalo en tus contactos.</p>
      <button id="modalButton">Cerrar</button>
    </div>
  </div> -->

  <script src="script.js"></script>

  
</body>

</html>
<?php include 'conexion.php'; ?>