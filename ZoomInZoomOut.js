var width=100;
var difference=2;
var interval=0;
function increase(){

    interval=setInterval(zoomIn,20);
}
function zoomIn(){
    if(width<200){
        width= width+difference;
        document.getElementById("img1").style.width=width;
    }
    else{
        clearInterval(interval);
    }
}

function decrease(){

    interval=setInterval(zoomOut,20);
}
function zoomOut(){
    if(width>200){
        width= width-difference;
        document.getElementById("img1").style.width=width;
    }
    else{
        clearInterval(interval);
    }
}