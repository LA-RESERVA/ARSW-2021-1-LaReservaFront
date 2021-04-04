var apiRecuperarContraseña = (function () {
    function recuperarContraseña() {
        var correo = document.getElementById("correo").value;
        if (correo === "") {
            alert("Debe llenar el campo solicitado.");
        } else {
			window.location.href = "recuperarContraseña.html";
			/*const options={
				method: 'GET',
                url: "https://proyecto-arsw.herokuapp.com/usuarios/" + correo
			};
			
            axios.request(options).then(function (response) {
                console.log(response);
                if (response.data === null) {
					alert("El correo no se encuentra registrado.");
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