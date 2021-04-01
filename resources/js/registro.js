/* global axios */
var apiclient = (function () {
    var url = "https://proyecto-arsw.herokuapp.com/usuarios/cliente";

    function registrarCliente() {

        var nombre = document.getElementById("nombre").value;
        var apellidos = document.getElementById("apellido").value;
        var username = document.getElementById("username").value;
        var celular = document.getElementById("celular").value;
        var email = document.getElementById("correo").value;
        var documento = document.getElementById("ndoc").value;
        var password = document.getElementById("contraseña").value;
        var pwdconfirmacion = document.getElementById("confcont").value;

        if(nombre === "" || apellidos === "" || username === "" || celular === "" || email === "" || documento === "" || password === "" || pwdconfirmacion === ""){
            alert("Todos los campos son requeridos.");
        }else{
            if (password !== pwdconfirmacion){
                alert("Las contaseñas con coinciden.");
            }else{
               axios.post(url, {"nombre": nombre, "apellidos": apellidos, "username":username, 
                "password": password, "celular": celular, "email": email, "rol":"cliente", 
                "documento": documento})
                    .then(res => {
                        alert("Usuario registrado satisfactoriamente.");
                        window.location.replace("https://proyecto-arsw.herokuapp.com/login.html");
                    }
                    ); 
            }
        }
    }

    return {
        registrarCliente:registrarCliente
    };
})();
