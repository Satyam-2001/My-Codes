from docx import Document
from docx.shared import Inches,Pt,RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH



file=Document("python project/document/document.docx")

para=file.paragraphs
color=[]
for diff in para:
   for par in diff.runs:
      print(par.underline)
    