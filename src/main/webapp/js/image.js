var input = document.getElementById("imageLoc");
var form = document.getElementById("myForm");
var image1 = document.getElementById("i1");
var image2 = document.getElementById("i2");

function myFun(event) {
    input.setAttribute("value", event.currentTarget.src);
    form.submit();
};

image1.addEventListener('click', myFun, false);
image2.addEventListener('click', myFun, false);