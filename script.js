// Función para agregar la clase 'card--flipped'
function flipCard(card) {
    card.addClass('card--flipped');
  }
  
  // Función para quitar la clase 'card--flipped'
  function unflipCard(card) {
    card.removeClass('card--flipped');
  }
  
  // Evento clic en el botón de activación
  $('.card-trigger').on('click', function (e) {
    e.preventDefault();
    const card = $(this).closest('.card');
    flipCard(card);
  });
  
  // Evento clic en el botón de cierre
  $('.card-close').on('click', function () {
    const card = $(this).closest('.card');
    unflipCard(card);
  });

  
  $('.card-trigger').on('click', function (e) {
    e.preventDefault();
    console.log('Botón "See Tips" clickeado');
    const card = $(this).closest('.card');
    flipCard(card);
  });

  

//   ANIMACION BOTON VER MAS
// document.getElementById('verMasBtn').addEventListener('click', function () {
//     document.querySelector('.table-container').classList.toggle('expanded');
//   });
  


document.getElementById('verMasBtn').addEventListener('click', function () {
    const elements = document.querySelectorAll('.element-container');
    elements.forEach(element => element.classList.toggle('expanded'));
  });

  

// script para desenfocar al poner cursor en datos personales

 // Agrega y quita la clase desenfocado en hover
 document.querySelectorAll('p').forEach(element => {
    element.addEventListener('mouseover', () => {
      document.querySelectorAll('p').forEach(otherElement => {
        otherElement.classList.remove('enfocado');
        otherElement.classList.add('desenfocado');
      });
      element.classList.add('enfocado');
      element.classList.remove('desenfocado');
    });

    element.addEventListener('mouseout', () => {
      document.querySelectorAll('p').forEach(otherElement => {
        otherElement.classList.remove('enfocado', 'desenfocado');
      });
    });
  });


// Muestra el modal

 /* $("#modalContainer").show();
// Cierra el modal al hacer clic en el botón "Cerrar"
$("#modalButton").on("click", function() {
  $("#modalContainer").hide();
});*/


//   FUNCION AGREGAR CONTACTO
$(".qrc_addtocontact").on("click", function(e){
  e.preventDefault();

  // Verifica si la página está siendo cargada dentro de un iframe
  if (window.self !== window.top) {
    return;
  }

  // Crea los datos de contacto en formato vCard (VCF)
  var vCardData = "BEGIN:VCARD\n" +
                  "VERSION:3.0\n" +
                  "FN:Adriana del Pilar\n" +  // Nombre
                  "N:Forero Ceballos;Adriana del Pilar;;;\n" +  // Apellidos;Nombre
                  "ORG:SERVICIOS POSTALES NACIONALES\n" +  // Empresa
                  "TEL:3105618204\n" +
                  "EMAIL:adriana.mora@4-72.com.co\n" +
                  "ADR: Dg 25G - 95A-55\n" +
                  "PHOTO;TYPE=JPEG:https://i.postimg.cc/fRGhb5tY/apfc.png\n" +  // Agrega la URL de la imagen
                  "END:VCARD";

  // Crea un Blob con los datos vCard
  var blob = new Blob([vCardData], { type: "text/vcard" });

  // Verifica si el navegador es de Windows
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, "contacto.vcf");
  } else {
    // Crea un enlace para descargar el archivo de contacto
    var downloadLink = document.createElement("a");
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = "contacto.vcf";

    // Agrega el enlace al cuerpo del documento
    document.body.appendChild(downloadLink);

    // Simula un clic en el enlace para descargar el archivo de contacto
    downloadLink.click();

    // Elimina el enlace del cuerpo del documento después de un breve período
    setTimeout(function() {
      document.body.removeChild(downloadLink);
      window.URL.revokeObjectURL(blob);
    }, 1000); // 1000 milisegundos (1 segundo)
  }
});

