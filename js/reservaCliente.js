var cancha;
var apiReservaCliente = (function () {
    function cargarPagina() {
		//var id = document.getElementById("contenido").text;
		const valores = window.location.search;
		const urlParams = new URLSearchParams(valores);
		var id = urlParams.get('id');
		const options={
				method: 'GET',
                url: "https://proyecto-arsw.herokuapp.com/api/canchas/listar/"+ id
		};
		axios.request(options).then(function (response) {
                //console.log(response.data.sede);
				cancha = response.data;
                document.getElementById("titulo").textContent = response.data.sede;
				document.getElementById("nombreCancha").textContent = response.data.titulo;
				document.getElementById("precio").textContent = "Precio: $"+response.data.precio;
				document.getElementById("descripcion").textContent = response.data.descripcion;
            }).catch(function (error) {
                console.error(error);
            });
    }
	
	function hacerReserva() {
		//var id = document.getElementById("contenido").text;
		//console.log(id);
		console.log(document.getElementById("nuevo").value);
		var inicio;
		var fin;
		if(document.getElementById("nuevo").value == 1){
			inicio = "8:00";
			fin = "9:00";
		}else if(document.getElementById("nuevo").value == 2){
			inicio = "9:00";
			fin = "10:00";
		}else{
			inicio = "13:00";
			fin = "14:00";
		}

		var fecha = document.getElementById("fecha").value;
		var url = "https://proyecto-arsw.herokuapp.com/agenda/reserva";
		axios.post(url, {"cancha": cancha.id, "usuario": "sf.bug", "fecha":fecha, 
                "horainicio": inicio, "horafin": fin})
                    .then(res => {
                        alert("Se ha realizado la reserva.");
                        //window.location.href="/login.html";
                    }
                    );
    }
	
    return {
        cargarPagina: cargarPagina,
		hacerReserva : hacerReserva
    }
})();