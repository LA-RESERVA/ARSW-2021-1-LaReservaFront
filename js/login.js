var attemp = 0;
var apiLogin = (function () {
    function autenticarUsuario() {

        var username = document.getElementById("username").value;
        var password = document.getElementById("contraseña").value;
        if (username === "" || password === "") {
            alert("Todos los campos son requeridos.");
        } else {
            const options = {
                method: 'GET',
                url: "https://back-la-reserva.herokuapp.com/usuarios/login?usr=" + username + "&pwd=" + password
            };
            axios.request(options).then(function (response) {
                console.log(response);
				if (response.data.rol === "cliente") {
                    window.location.href = "/busquedaCanchasClientesLista.html";
                }
                if (response.data.rol === "propietario") {
                    window.location.href = "/landingPropietarios.html?id="+response.data.id;
                }
                
            }).catch(function (error) {
                alert("Este usuario no se encuentra registrado o la contraseña es incorrecta");
            });

        }
    }
	

    return {
        autenticarUsuario: autenticarUsuario,
    }
})();