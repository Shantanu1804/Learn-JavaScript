var id=0;
function printmsg(){
    document.getElementById("op").innerHTML="5 sec has passed";
}
function start(){
id=window.setTimeout(printmsg,5000);
}
function end(){
window.clearTimeout(id);
}