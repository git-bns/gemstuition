var picPaths = ['images/icons/reginow1.png','images/icons/reginow2.png'];
var curPic = -1;
//preload the images for smooth animation
var imgO = new Array();
for(i=0; i < picPaths.length; i++) {
    imgO[i] = new Image();
    imgO[i].src = picPaths[i];
}

function swapImage() {
    curPic = (++curPic > picPaths.length-1)? 0 : curPic;
    imgCont.src = imgO[curPic].src;
    setTimeout(swapImage,1000);
}

window.onload=function() {
    imgCont = document.getElementById('regiImgFlash');
    swapImage();
}