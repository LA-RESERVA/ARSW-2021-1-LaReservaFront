var apiLandingPropietarios = (function () {
    var canchas = [];
    function busquedaCanchasClientesLista() {
        const options = {
            method: 'GET',
            url: "https://proyecto-arsw.herokuapp.com/api/sedes/listar"
        };
        axios.request(options).then(function (response) {
            response.data.map(function (record) {
                //callback
                retornarCachasDeSede(record.nombre, mostrarCanchas);
            });
        }).catch(function (error) {
            console.error(error);
        });

    }
    function retornarCachasDeSede(nombre, callback) {
        const options = {
            method: 'GET',
            url: 'https://proyecto-arsw.herokuapp.com/api/sedes/listar/' + nombre
        };
        axios.request(options).then(function (response) {
            response.data.map(function (record) {
                canchas.push(record);
            });
            callback(nombre);
        }).catch(function (error) {
            console.error(error);
        });
    }

    function mostrarCanchas(nombre) {
        var canchasSedes = "";

        canchas.map((cancha) => {
            canchasSedes = canchasSedes.concat(`<li><a class='dropdown-item' href='reservaCliente.html?id=${cancha.id}'>${cancha.titulo}</a></li>`);
        });
        $("#sedes").append(
            "<button type='button' href='vistaSedeCliente.html' class='btn btn-danger b1 d-block'>" + nombre + "</button>" +
            "<button type='button' class='btn btn-danger dropdown-toggle dropdown-toggle-split'" +
            "data-bs-toggle='dropdown' aria-expanded='false'>" +
            "<span class='visually-hidden'>Toggle Dropdown</span>" +
            "</button>" +
            "<ul class='dropdown-menu'>" +
            canchasSedes +
            "<li>" +
            " <hr class='dropdown-divider'>" +
            "</li>" +
            "</ul>"
        );

        canchas = [];
    }

    return {
        busquedaCanchasClientesLista: busquedaCanchasClientesLista
    };

})();
