var apiRecuperarContraseña = (function () {
    function recuperarContraseña() {
        var usuario = document.getElementById("usuario").value;
        if (usuario === "") {
            alert("Debe llenar el campo solicitado.");
        } else {
			//window.location.href = "recuperarContraseña.html";
			const options={
				method: 'GET',
                url: "https://proyecto-arsw.herokuapp.com/usuarios/send-email/"+ usuario
			};
			
            axios.request(options).then(function (response) {
                console.log(response);
                if (response.data === null) {
					alert("El correo no se encuentra registrado.");
                }
            }).catch(function (error) {
                console.error(error);
            });

        }
    }
    return {
        recuperarContraseña: recuperarContraseña
    }
})();