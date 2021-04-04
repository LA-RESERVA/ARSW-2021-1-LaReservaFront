var apiRecuperarContraseña = (function () {
    function recuperarContraseña() {
        var password = document.getElementById("contraseña").value;
        var confirm = document.getElementById("confirmarContraseña").value;
        if (password === "" || confirm === "") {
            alert("Todos los campos son requeridos.");
        } else {
			if (password != confirm){
				alert("Las contraseñas deben coincidir");
				
			}
			//window.location.href = "login.html";
			/*
            const options = {
                method: 'GET',
                url: "https://proyecto-arsw.herokuapp.com/usuarios/" + username + "/" + password
            };
            axios.request(options).then(function (response) {
                console.log(response);
                if (response.data === "cliente") {
                    window.location.href = "/busquedaCanchasClientesLista.html";
                }
                if (response.data === "propietario") {
                    window.location.href = "/landingPropietarios.html";
                }
            }).catch(function (error) {
                console.error(error);
            });*/

        }
    }
    return {
        recuperarContraseña: recuperarContraseña
    }
})();