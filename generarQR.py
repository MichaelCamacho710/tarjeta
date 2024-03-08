import qrcode

# URL de la página
url = "https://michaelcamacho710.github.io/tarjeta/"

# Crear un objeto QRCode
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)

# Añadir los datos a codificar al objeto QRCode
qr.add_data(url)
qr.make(fit=True)

# Crear una imagen QRCode
img = qr.make_image(fill_color="black", back_color="white")

# Guardar la imagen como un archivo PNG en el directorio actual
img.save("codigo_qr.png")

print("Código QR guardado como 'codigo_qr.png'")
