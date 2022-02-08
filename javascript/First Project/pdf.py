from PIL import Image

image1 = Image.open("200310633314_income certificate(1)_page-0001.jpg")
im1 = image1.convert('RGB')
im1.save("Downloads/new.pdf")