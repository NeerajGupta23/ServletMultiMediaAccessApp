var input = document.getElementById("imageLoc");
var form = document.getElementById("myForm");
var image1 = document.getElementById("i1");
var image2 = document.getElementById("i2");

function myFun(event) {
    input.setAttribute("value", event.currentTarget.loc);
    form.submit();
};

image1.loc = "multimedia/pdf/pdf1.pdf";
image1.addEventListener('click', myFun, false);

image2.loc = "multimedia/pdf/pdf2.pdf";
image2.addEventListener('click', myFun, false);