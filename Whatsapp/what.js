//assingning variables

var num,msg;

function sendMsg(){
    num=document.getElementById("numb").value;
    msg=document.getElementById("message").value;

    try{
        window.open("https://wa.me/" +"91"+num +"?text="  +msg, "_blank").focus()
    }catch (e){
        //for unsupported browser
        window.location.assign("https://wa.me/" +"91"+num +"?text=" + msg, "_blank")

}
}