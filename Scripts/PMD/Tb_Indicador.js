var pathserver = window.location.pathname;


if (pathserver.includes("Indicadores")) {

    pathserver = "/Indicadores";
}
else {
    pathserver = "";
}
function Back()
{
    path = pathserver + "/PlanMunicipal/Inicio";
    window.location = path;
}
function Catalogos() 
{ 
    CargaFrecuencia(); 
    CargaSecretarias(); 
    GetEjes(); 
    GetSentido(); 

}
function CargaFrecuencia() {
    $("#idfrecuencia").html("");
    $.ajax({
        type: 'POST',
        url: "GetFrecuencia",
        dataType: 'json',
        success: function (states) {
            $("#idfrecuencia").append('<option selected disabled="disabled">Frecuencia medición</option>');
            $.each(states, function (i, state) {
                $("#idfrecuencia").append('<option value="' + state.Value + '">' +
                    state.Text + '</option>');
            });

        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}

function CargaSecretarias()
{
    $("#idsecretaria").html("");
    $.ajax({
        type: 'POST',
        url: "GetSecretarias",
        dataType: 'json',
        success: function (states)
        {
            $("#idsecretaria").append('<option selected disabled="disabled">Secretaría</option>');
            $.each(states, function (i, state) {
                $("#idsecretaria").append('<option value="' + state.Value + '">' +
                    state.Text + '</option>');
            });
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}
function GetEjes() {
    $("#Eje").html("");
    $.ajax({
        type: 'POST',
        url: "GetEje",
        dataType: 'json',
        success: function (states) {
            $("#Eje").append('<option selected disabled="disabled">Eje estratégico</option>');
            $.each(states, function (i, state) {
                $("#Eje").append('<option value="' + state.Value + '">' + state.Text + '</option>');
            });
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}
function anio(evt)
{
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
function GetSentido()
{
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

        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}
function GetObjetivo(a) {
    $("#idobjetiv").html("");  
    var eje = "0";
    if ($("#Eje").val() == "" || $("#Eje").val() == null) {
        eje = $("#ideje").val();
    }
    else {
        eje = $("#Eje").val();
    }
    $.ajax({
        type: 'POST',
        url: "/Ficha/GetObjetivos",
        dataType: 'json',
        data: {
            id: eje
        },
        success: function (states) {
            $("#idobjetiv").append('<option selected disabled="disabled">Objetivo estratégico</option>');
            $.each(states, function (i, state) {
                $("#idobjetiv").append('<option value="' + state.Value + '">' +
                    state.Text + '</option>');
            });
            //$("#idobjetiv").val(a); 
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}

function Valida(a) {
    var list = "<ul>";

    $("#list").html("");
    var ok = "";
     
    var Eje = $("#Eje").val();
    if (Eje == null) { list = list + "<li>" + "Campo eje estratégico está vacío" + "</li>"; ok = "false"; $('#Eje').css('border-color', '#ff9688'); } else { $('#Eje').css('border-color', '#ced4da'); }

    var idsecretaria = $("#idsecretaria").val();
    if (idsecretaria == null) { list = list + "<li>" + "Campo unidad responsable está vacío" + "</li>"; ok = "false"; $('#idsecretaria').css('border-color', '#ff9688'); } else { $('#idsecretaria').css('border-color', '#ced4da'); }

    //var progpresu = $("#programa").val();
    //if (progpresu.length <= 0) { list = list + "<li>" + "Campo programa está vacío" + "</li>"; ok = "false"; $("#programa").css('border-color', '#ff9688'); } else { $("#programa").css('border-color', '#ced4da'); }

    var nombindicador = $("#indicador").val();
    if (nombindicador.length <= 0) { list = list + "<li>" + "Campo nombre del Indicador está vacío" + "</li>"; ok = "false"; $('#indicador').css('border-color', '#ff9688'); } else { $('#indicador').css('border-color', '#ced4da'); }

    var lineabase = $("#lineabase").val();
    if (lineabase.length <= 0) { list = list + "<li>" + "Campo línea base está vacío" + "</li>"; ok = "false"; $('#lineabase').css('border-color', '#ff9688'); } else { $('#lineabase').css('border-color', '#ced4da'); }
     
    var aniobase = $("#aniobase").val();
    if (aniobase.length <= 0) { list = list + "<li>" + "Campo año base está vacío" + "</li>"; ok = "false"; $('#aniobase').css('border-color', '#ff9688'); } else { $('#aniobase').css('border-color', '#ced4da'); }
      
    var Frecuencia = $("#idfrecuencia").val();
    if (Frecuencia == null) { list = list + "<li>" + "Campo frecuencia de medición está vacío" + "</li>"; ok = "false"; $('#idfrecuencia').css('border-color', '#ff9688'); } else { $('#idfrecuencia').css('border-color', '#ced4da'); }

    var idsentido = $("#idsentido").val();
    if (idsentido == null) { list = list + "<li>" + "Campo sentido indicador está vacío" + "</li>"; ok = "false"; $('#idsentido').css('border-color', '#ff9688'); } else { $('#idsentido').css('border-color', '#ced4da'); }

    var meta = $("#meta").val();
    if (meta.length <= 0) { list = list + "<li>" + "Campo meta está vacío" + "</li>"; ok = "false"; $('#meta').css('border-color', '#ff9688'); } else { $('#meta').css('border-color', '#ced4da'); }

    //var aniometa = $("#aniometa").val();
    //if (aniometa.length <= 0) { list = list + "<li>" + "Campo año meta está vacío" + "</li>"; ok = "false"; $('#aniometa').css('border-color', '#ff9688'); } else { $('#aniometa').css('border-color', '#ced4da'); }

    var medioverificacion = $("#medioverificacion").val();
    if (medioverificacion.length <= 0) { list = list + "<li>" + "Campo medio de verificacion está vacío" + "</li>"; ok = "false"; $('#medioverificacion').css('border-color', '#ff9688'); } else { $('#medioverificacion').css('border-color', '#ced4da'); }
       
    list = list + "</ul>";
    if (ok == "false") {
        $("#list").append(list);
        $("#exampleModal").modal("show");
    }
    else {
        if (a == 1) {
            var opcion = confirm("¿Estas seguro de enviar la información?");
            if (opcion == true) {
                Guarda(1);
            }
            else {

            }
        }
        else {
                Guarda(0);
        }
    }
}


function Guarda(a)
{ 
    $('#spiner').modal('show');
    var formData = new FormData();   
    formData.append("ideje", $("#Eje").val());
    formData.append("programa", "");
    formData.append("nombreindicador", $("#indicador").val());
    formData.append("lineabase", $("#lineabase").val());
    formData.append("aniobase", $("#aniobase").val());
    formData.append("idfrecuencia", $("#idfrecuencia").val());
    formData.append("meta", $("#meta").val());
    formData.append("aniometa", "2024"); 
    formData.append("medioverificacion", $("#medioverificacion").val());
    formData.append("idsecretaria", $("#idsecretaria").val());
    formData.append("activo", true);
    formData.append("idsentido", $("#idsentido").val());
    formData.append("resultado",null);
    formData.append("resulvariacion", null);
    formData.append("observaciones","");
    formData.append("path", "");
    formData.append("borrado", null);
    formData.append("descindicador", $("#descindicador").val());
    formData.append("idobjetiv", $("#idobjetiv").val());
    formData.append("obj_resnarr", $("#resumen").val());
    $.ajax(
        {
            type: 'POST',
            url: pathserver + "/PlanMunicipal/NuevoRegistro",
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
