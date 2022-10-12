var id=0;
var seconds=0;
function printmsg(){
    document.getElementById("op").innerHTML=seconds+" seconds";
    seconds++;
}
function start(){
id=window.setInterval(printmsg,1000);
}
function end(){
window.clearInterval(id);
}