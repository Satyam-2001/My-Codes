import easyocr
reader=easyocr.Reader(['en'])
results=reader.readtext('python project/handwritten/images/faltu.jpeg')
print(results.character)
for i in results:
    print(i)