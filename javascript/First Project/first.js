'use strict';

let dark = true;


document.getElementById('get_file').onclick = function() {
    document.getElementById('my_file').click();
};

function changeState(){
    var input = document.getElementById("mode");
    var header = document.getElementById("head");
    if(dark){
        document.body.style.backgroundImage = 'url("d.jpg")';
        header.style.backgroundColor = 'rgb(16, 137, 156)';
        input.src = "light1.png";
        dark = false;
    }
    else{
        document.body.style.backgroundImage = 'url("b.jpg")';
        header.style.backgroundColor = 'rgb(44, 25, 101)';
        input.src = "dark3.png";
        dark = true;
    }
}

function btn() {
    var input = document.getElementById("file_path");
    var fReader = new FileReader();
    fReader.readAsDataURL(input.files[0]);
    console.log(input.files[0].name);
    fReader.onloadend = function (event) {
        var src = event.target.result;
        var url = `http://127.0.0.1:5000/`;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name: input.files[0].name,
                src
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        })
    }
}
