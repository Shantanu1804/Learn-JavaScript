var interval=0;
var opacity=0;
function FadeOut() {
    interval = setInterval(hide, 100);
}
function FadeIn(){
    interval = setInterval(show, 100);
}
function hide(){
    var image= document.getElementById("img");
    opacity=Number(window.getComputedStyle(image).getPropertyValue("opacity"));
    if(opacity>0){
        opacity=opacity-0.1;
        image.style.opacity=opacity;
    }
    else{
        clearInterval(interval);
    }
}
function show(){
    var image= document.getElementById("img");
    opacity=Number(window.getComputedStyle(image).getPropertyValue("opacity"));
    if(opacity<1){
        opacity=opacity+0.1;
        image.style.opacity=opacity;
    }
    else{
        clearInterval(interval);
    }
}