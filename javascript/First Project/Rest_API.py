from flask import Flask,jsonify,request
from PIL import Image
from base64 import b64decode
import io

app = Flask(__name__)


@app.route('/',methods=['GET', 'POST'])
def convert():
    file = request.json['src']
    i = 0
    for s in file:
        i+=1
        if s == ',':
            break
    image = b64decode(file[i:]) 
    img = Image.open(io.BytesIO(image))
    img = img.mode("RGB")
    i = 0
    fp = request.json['name']
    for s in fp:
        i+=1
        if s == '.':
            break
    print(fp[:i] + ".pdf")
    img.save(fp[:i] + ".pdf")
    return "Done"

app.run(debug=False,port=5000)