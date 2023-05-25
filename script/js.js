        var inputElement1 = document.getElementById("fio");
		var inputElement2 = document.getElementById("login");
		var inputElement3 = document.getElementById("psw");
        var inputElement4 = document.getElementById("email");
		registrationButton = document.getElementById("registration");
		
		registrationButton.onclick = function() {
		  var fio = inputElement1.value;
		  localStorage.setItem("fio", fio);
		
		  var login = inputElement2.value;
		  localStorage.setItem("login", login);
		
		  var psw = inputElement3.value;
		  localStorage.setItem("psw", psw);

          var email = inputElement4.value;
		  localStorage.setItem("email", email);
		
		  alert("Данные успешно сохранены!");
		};

		