var cancha;
var apiReservaCliente = (function () {
	function cargarPagina() {
		//var id = document.getElementById("contenido").text;
		const valores = window.location.search;
		const urlParams = new URLSearchParams(valores);
		var id = urlParams.get('id');
		const options = {
			method: 'GET',
			url: "https://back-la-reserva.herokuapp.com/canchas?id=" + id
		};

		axios.request(options).then(function (response) {
			//console.log(response.data.sede);
			cancha = response.data;
			document.getElementById("nombreCancha").textContent = response.data.titulo;
			document.getElementById("precio").textContent = "Precio: $" + response.data.precio;
		

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
		const horarios = {
			"8:00-9:00": 1, "9:00-10:00": 2,
			"10:00-11:00": 3, "11:00-12:00": 4,
			"12:00-13:00": 5, "13:00-14:00": 6,
			"14:00-15:00": 7, "15:00-16:00": 8,
			"16:00-17:00": 9, "17:00-18:00": 10,
			"18:00-19:00": 11, "19:00-20:00": 12,
			"20:00-21:00": 13, "21:00-22:00": 14,
			"23:00-24:00": 15
		}
		for (const property in horarios) {
			var a = property;
			var b = horarios[property]
			if(a==="Hora"){
				alert("Porfavor ingrese una hora")
				break; 

			}
			if (document.getElementById("nuevo").value == b) {
				var inicio = a; 

			}
		}
		var fecha = document.getElementById("fecha").value;
		var url = "https://back-la-reserva.herokuapp.com/horarios/crear";
		axios.post(url, {
			"cancha": cancha.id, "dia": fecha,
			"hora": inicio, "estado": true
		})
			.then(res => {
				alert("Se ha realizado la reserva.");
				//window.location.href="/login.html";
			}
			);
	}

	return {
		cargarPagina: cargarPagina,
		hacerReserva: hacerReserva
	}
})();