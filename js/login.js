var apiLogin = (function () {
    function autenticarUsuario() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("contraseña").value;
        if (username === "" || password === "") {
            alert("Todos los campos son requeridos.");
        } else {
            const options = {
                method: 'GET',
                url: "https://proyecto-arsw.herokuapp.com/usuarios/" + username + "/" + password
            };
            axios.request(options).then(function (response) {
                if (response.data==="cliente"){
                    window.location.href="/busquedaCanchasClientesLista.html";
                }
                if (response.data==="propietario"){
                    window.location.href="/landingPropietarios.html";
                }
            }).catch(function (error) {
                console.error(error);
            });
        }
    }
})();