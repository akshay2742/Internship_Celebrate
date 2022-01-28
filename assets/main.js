function myfunction() {
    var x = document.getElementById("mobile_links");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function image_1() {
    var x = document.getElementById("image-1");
    var y = document.getElementById("image-2");
    var z = document.getElementById("image-3");
    x.style.transform = "scale(0.8)";
    y.style.transform = "scale(0.7)";
    z.style.transform = "scale(0.6)";
    x.style.right = "0px";
    y.style.right = "120px";
    z.style.right = "270px";
    x.style.zIndex = 2;
    y.style.zIndex = 1;
    z.style.zIndex = 0;


}

function image_2() {
    var x = document.getElementById("image-1");
    var y = document.getElementById("image-2");
    var z = document.getElementById("image-3");
    x.style.transform = "scale(0.7)";
    y.style.transform = "scale(0.8)";
    z.style.transform = "scale(0.7)";
    x.style.right = "40px";
    y.style.right = "250px";
    z.style.right = "380px";
    x.style.zIndex = 1;
    y.style.zIndex = 2;
    z.style.zIndex = 1;

}

function image_3() {
    var x = document.getElementById("image-1");
    var y = document.getElementById("image-2");
    var z = document.getElementById("image-3");
    x.style.transform = "scale(0.6)";
    y.style.transform = "scale(0.7)";
    z.style.transform = "scale(0.8)";
    x.style.right = "80px";
    y.style.right = "290px";
    z.style.right = "500px";
    x.style.zIndex = 0;
    y.style.zIndex = 1;
    z.style.zIndex = 2;

}