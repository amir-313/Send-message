function sendMessage(){
    const number = document.querySelector("#number").value;
    const message = document.querySelector("#message").value;
    try{
        window.open("https://wa.me/"+ number +"?text=" +message).focus();
    }catch{
        window.location.assign("https://wa.me/"+ number +"?text=" +message)
    }
}