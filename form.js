function fn8(){
    var usr= document.getElementById("username");
    var pas= document.getElementById("password");
    var usro= document.getElementById("username").value;
    var regex= /E00/;
    // var regex= /[a-x A-X]00/;
    var regex= /[^a-x A-X]00/;
    if(regex.test(username))
{
    alert("Valid User");
} else {
    alert("Invalid user");
    document.getElementById("labelusername").style.visibility="visible";   
}  
//  if(usr.value.trim()==""){
//         alert("Value Fields cant be empty");
//         usr.style.border="solid 3px red"; 
//         document.getElementById("labelusername").style.visibility="visible"; 
//         return false;
//     }
//     else if(pas.value.trim()==""){
//         alert("Value Fields cant be empty");
//         return false;
//     }
//     else if(pas.value.trim().length<5){
//         alert("Value Fields cant be empty");
//         return false;
//     }
    // else{
    //     return true;
    // }
}