
$(document).ready(function(){
  var savedLogin = localStorage.getItem("login");
  var savedPassword = localStorage.getItem("psw");


  joinButton = document.getElementById("vhod");
  
  joinButton.onclick = function() {
  
      var inputLogin = document.getElementById("login1").value;
      var inputPassword = document.getElementById("psw1").value;

      if (inputLogin == savedLogin && inputPassword == savedPassword) {
          window.location.href = "profile.html";
        } else {
            $("#wrongpsw").html("Введен неверный пароль.")
          }
        }
        
    }); 
