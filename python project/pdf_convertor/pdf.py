from PIL import Image

img=Image.open("python project/graph/graph_page.jpg").convert('RGB')
img.resize((img.height//4,img.width//4))
img.save(r'C:\Users\HP\Desktop\graph.pdf')