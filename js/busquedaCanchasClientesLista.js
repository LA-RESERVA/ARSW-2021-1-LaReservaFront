var apiLandingPropietarios = (function () {
    function busquedaCanchasClientesLista() {
        const options = {
            method: 'GET',
            url: "https://proyecto-arsw.herokuapp.com/api/sedes/listar"
        };
        axios.request(options).then(function (response) {
            response.data.map(function (record) {
                $("#sedes").append(
                    "<button type='button' class='btn btn-danger b1 d-block'>" + record.nombre + "</button>" +
                    "<button type='button' class='btn btn-danger dropdown-toggle dropdown-toggle-split'" +
                    "data-bs-toggle='dropdown' aria-expanded='false'>" +
                    "<span class='visually-hidden'>Toggle Dropdown</span>" +
                    "</button>" +
                    "<ul class='dropdown-menu'>" +
                    "<li><a class='dropdown-item' href='#'>Cancha 1</a></li>" +
                    "<li><a class='dropdown-item' href='#'>Cancha 2 </a></li>" +
                    "<li><a class='dropdown-item' href='#'>Cancha 3 </a></li>" +
                    " <li><a class='dropdown-item' href='#'>Cancha 4</a></li>" +
                    "<li>" +
                    " <hr class='dropdown-divider'>" +
                    "</li>" +
                    " <li><a class='dropdown-item dis' href='#'>Separated link</a></li>" +
                    "</ul>"
                );

            });

        }).catch(function (error) {
            console.error(error);
        });

    }

    return {
        busquedaCanchasClientesLista: busquedaCanchasClientesLista
    };
})();
