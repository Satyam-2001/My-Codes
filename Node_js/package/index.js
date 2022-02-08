const Image = require("jpg-js");

img = Image.open("img.jpg");

//Rotating image clockwise
img.crop([0,0,1200,1200]);

//Saving processed image as image.jpg
img.save("img.jpg")