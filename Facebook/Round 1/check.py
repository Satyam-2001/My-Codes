input_path = r'C:\Users\HP\Downloads\weak_typing_chapter_2_satyam_lohiya_submission_output.txt'
output_path = r"C:\Users\HP\Desktop\A2.txt"
f = open(input_path, 'r')
fw = open(output_path, 'r')
st=f.readlines()
s=fw.readlines()
if s == st:
    print('Done')
else:
    print('not')