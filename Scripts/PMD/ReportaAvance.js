var pathserver = window.location.pathname;


if (pathserver.includes("Indicadores")) {

    pathserver = "/Indicadores";
}
else {
    pathserver = "";
}

function Catalogos()
{
    CargaFrecuencia();
    CargaSecretarias();
    GetEjes();
    GetSentido();

}
function CargaFrecuencia()
{
    
    $("#idfrecuencia").html("");
    $.ajax({
        type: 'POST',
        url: "GetFrecuencia",
        dataType: 'json',
        success: function (states)
        {
            $("#idfrecuencia").append('<option selected disabled="disabled">Frecuencia medición</option>');
            $.each(states, function (i, state) {
                $("#idfrecuencia").append('<option value="' + state.Value + '">' +
                    state.Text + '</option>');
            }); 
            $("#idfrecuencia").val($("#cargafrecuencia").val());
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}

function CargaSecretarias() {
    $("#idsecretaria").html("");
    $.ajax({
        type: 'POST',
        url: "GetSecretarias",
        dataType: 'json',
        success: function (states) {
            $("#idsecretaria").append('<option selected disabled="disabled">Secretaría</option>');
            $.each(states, function (i, state) {
                $("#idsecretaria").append('<option value="' + state.Value + '">' +
                    state.Text + '</option>');
            });
            $("#idsecretaria").val($("#cargasecre").val())
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}
function GetEjes()
{
    $("#Eje").html("");
    $.ajax({
        type: 'POST',
        url: "GetEje",
        dataType: 'json',
        success: function (states)
        {
            $("#Eje").append('<option selected disabled="disabled">Eje estratégico</option>');
            $.each(states, function (i, state) {
                $("#Eje").append('<option value="' + state.Value + '">' + state.Text + '</option>');
            });
            $("#Eje").val($("#cargaeje").val())
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}

function GetSentido() {
    $("#idsentido").html("");
    $.ajax({
        type: 'POST',
        url: "GetSentidoIndicador",
        dataType: 'json',
        success: function (states) {
            $("#idsentido").append('<option selected disabled="disabled">Sentido Indicador</option>');
            $.each(states, function (i, state) {
                $("#idsentido").append('<option value="' + state.Value + '">' +
                    state.Text + '</option>');
            });
            $("#idsentido").val($("#cargasentido").val())
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}

function Back() {
    path = pathserver + "/PlanMunicipal/Inicio";
    window.location = path;
}

function Valida(a) {
    var list = "<ul>";

    $("#list").html("");
    var ok = "";
     
    var idsentido = $("#idsentido").val();
    if (idsentido == null) { list = list + "<li>" + "Campo sentido está vacío" + "</li>"; ok = "false"; $('#idsentido').css('border-color', '#ff9688'); } else { $('#idsentido').css('border-color', '#ced4da'); }

    var idsecretaria = $("#idsecretaria").val();
    if (idsecretaria == null) { list = list + "<li>" + "Campo responsable está vacío" + "</li>"; ok = "false"; $('#idsecretaria').css('border-color', '#ff9688'); } else { $('#idsecretaria').css('border-color', '#ced4da'); }

    var resultado = $("#resultado").val();
    if (resultado.length <= 0) { list = list + "<li>" + "Campo resultado está vacío" + "</li>"; ok = "false"; $("#resultado").css('border-color', '#ff9688'); } else { $("#resultado").css('border-color', '#ced4da'); }

    var observaciones = $("#observaciones").val();
    if (observaciones.length <= 0) { list = list + "<li>" + "Campo observaciones está vacío" + "</li>"; ok = "false"; $('#observaciones').css('border-color', '#ff9688'); } else { $('#observaciones').css('border-color', '#ced4da'); }
     

    list = list + "</ul>";
    if (ok == "false") {
        $("#list").append(list);
        $("#exampleModal").modal("show");
    }
    else {
        if (a == 1) {
            var opcion = confirm("¿Estas seguro de enviar la información?");
            if (opcion == true)
            {
                Guarda(1);
            } 
        }
        else {
            Guarda(0);
        }
    }
}

function anio(evt) {
    var code = (evt.which) ? evt.which : evt.keyCode;
    if (code >= 48 && code <= 57) {
        return true;
    }
    else {
        return false;
    }
}
function Numeros(evt) {
    var code = (evt.which) ? evt.which : evt.keyCode;
    if (code == 8 || code == 46) {
        return true;
    }
    else if (code >= 48 && code <= 57) {
        return true;
    }
    else {
        return false;
    }
}
function Guarda(a)
{
    $('#spiner').modal('show');
    var formData = new FormData();
    formData.append("idindicador", $("#idindicador").val());
    formData.append("idsentido", $("#idsentido").val());
    formData.append("idsecretaria", $("#idsecretaria").val());
    formData.append("resultado", $("#resultado").val());
    formData.append("resulvariacion", $("#variacion").val());
    formData.append("observaciones", $("#observaciones").val());
    $.ajax(
        {
            type: 'POST',
            url: pathserver + "/PlanMunicipal/EditaRegistro",
            data: formData,
            cache: false,
            contentType: false,
            processData: false,
            success: function (data) {
                if (data.activo == true || data.activo == "true") {

                    setTimeout(function () { $('#spiner').modal('hide'); }, 500);
                    $("#list").append('<p style="text-align:center;">Se guardo la información correctamente  </p>');
                    $("#exampleModal").modal("show");
                    path = pathserver + "/PlanMunicipal/Inicio";

                    setTimeout(function () { window.location = path; }, 2000);

                }
                else {
                    setTimeout(function () {
                        $('#spiner').modal('hide');
                    }, 500);
                    $("#list").append("<p>Ocurrió un error al ingresar el registro, favor de volver a intentarlo</p>");
                    $("#exampleModal").modal("show");
                }
                setTimeout(function () {
                    $('#spiner').modal('hide');
                }, 1000);
            }
        });
}