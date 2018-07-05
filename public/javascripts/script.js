document.onreadystatechange = function () {

    if (document.readyState == "complete") {
        
        checkLoginState();


    }
  }
  function checkLoginState(){
    FB.getLoginStatus(function(response) {
        if(response.status == "connected"){
            alert("Você está logado no facebook")
            console.log(response.authResponse);
        }
        else if (response.status == "not_authorized"){
            alert("De permissão para o app")
        }
        else if(response.status == "unknown"){
            alert("Se conecte ao facebook e de autorização meu bro")
        }
        else{
            console.log(response)
        }
    });
}