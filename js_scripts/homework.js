
function imagech(){
    im=document.getElementById("njr")
    // console.log(ocument.getElementById("njr"))

    img1="file:///E:/expertzlab/images/njr.jpg"
    img2="file:///E:/expertzlab/images/logo.jpg"

    if  (im.src==img1) {
        im.src=img2;
    }
    else {
        im.src=img1;
    }
    
}
