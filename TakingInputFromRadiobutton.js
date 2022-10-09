function fn2(){
    var rd1= document.getElementById("rd1");
    var rd2= document.getElementById("rd2");
    if(rd1.checked==true){
        alert("You have selected "+ rd1.value);
    }else {
        alert("You have selected "+ rd2.value);
    }
}