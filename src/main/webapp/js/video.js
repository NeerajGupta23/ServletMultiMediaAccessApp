var input = document.getElementById("imageLoc");
var form = document.getElementById("myForm");
var image1 = document.getElementById("i1");
var image2 = document.getElementById("i2");

function myFun(event) {
    input.setAttribute("value", event.currentTarget.loc);
    form.submit();
};

image1.loc = "multimedia/video/video1.mp4";
image1.addEventListener('click', myFun, false);

image2.loc = "multimedia/video/video2.mp4";
image2.addEventListener('click', myFun, false);