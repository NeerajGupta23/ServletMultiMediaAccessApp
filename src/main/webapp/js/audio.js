var input = document.getElementById("imageLoc");
var form = document.getElementById("myForm");
var image1 = document.getElementById("i1");
var image2 = document.getElementById("i2");

function myFun(event) {
    input.setAttribute("value", event.currentTarget.loc);
    form.submit();
};

image1.loc = "multimedia/audio/music1.mp3";
image1.addEventListener('click', myFun, false);

image2.loc = "multimedia/audio/music2.mp3";
image2.addEventListener('click', myFun, false);