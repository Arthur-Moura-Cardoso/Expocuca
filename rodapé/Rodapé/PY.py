import qrcode
img = qrcode.make('https://www.google.com.br/maps/place/ETEC+Professor+Camargo+Aranha/@-23.5532247,-46.6005173,17z/data=!4m6!3m5!1s0x94ce5935e6d7f161:0xe1e8049a33dc964b!8m2!3d-23.5532296!4d-46.5979424!16s%2Fg%2F120khbv1?entry=ttu')
type(img)  # qrcode.image.pil.PilImage
img.save("some_file.png")