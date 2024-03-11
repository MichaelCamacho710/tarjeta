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
function addContact(contact) {
  if ('contacts' in navigator) {
    navigator.contacts.save(contact)
      .then(result => {
        console.log('Contacto guardado:', result);
      })
      .catch(error => {
        console.error('Error al guardar el contacto:', error);
      });
  } else {
    console.warn('La API de Contactos no está disponible en este navegador.');
  }
}

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

  // Crea un objeto FileReader para leer el archivo de contacto
  var reader = new FileReader();
  reader.onload = function(event) {
    // Crea un objeto ContactAddress con la dirección del contacto
    var address = new ContactAddress({
      streetAddress: 'Dg 25G - 95A-55',
      postalCode: '',
      city: '',
      country: '',
      formatted: 'Dg 25G - 95A-55'
    });

    // Crea un objeto Contact con la información del contacto
    var contact = new Contact({
      name: 'Adriana del Pilar',
      givenName: 'Adriana',
      familyName: 'Forero Ceballos',
      organization: 'SERVICIOS POSTALES NACIONALES',
      phoneNumbers: [new ContactField('work', '3105618204', false)],
      emails: [new ContactField('work', 'adriana.mora@4-72.com.co', false)],
      addresses: [address],
      photo: [new ContactField('', 'https://i.postimg.cc/fRGhb5tY/apfc.png', false)]
    });

    // Agrega el contacto a la lista de contactos del usuario
    addContact(contact);
  };

  // Lee el archivo de contacto como texto
  reader.readAsText(blob);
});

