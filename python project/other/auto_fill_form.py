import urllib
import urllib3
import urllib.request
import webbrowser
import mechanize

br = mechanize.Browser()
br.open("https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp")
print(br.select_form(br.title()))
#br.form.find_control(id="Username")


'''
name =  "name field"
data = {
        "name" : 'Satyam',
        "Username" : "lohiyasatyam@gmail.com"
       }

f = urllib.parse.urlencode(data)
f = f.encode('utf-8')


content = urllib.request.Request("https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp",
        method="GET",data=f)
print (content.data)
webbrowser.open(content.get_full_url())
print(content.get_full_url())
'''