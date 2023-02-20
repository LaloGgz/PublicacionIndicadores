﻿var pathserver = window.location.pathname;


if (pathserver.includes("Indicadores")) {

    pathserver = "/Indicadores";
}
else {
    pathserver = "";  
}

function valideKey(evt) {

    // code is the decimal ASCII representation of the pressed key.
    var code = (evt.which) ? evt.which : evt.keyCode;

    if (code == 8) { // backspace.
        return true;
    } else if (code >= 48 && code <= 57) { // is a number.
        return true;
    } else { // other keys.
        return false;
    }
}
function tipocalculo() {
    $("#lbltipocalculo").html("");
    var lbl = $("#idmetcal").val();
    if (lbl == 1) {
        $("#lbltipocalculo").html("(variable1/variable2) * 100");
    }
    else if (lbl == 2) {
        $("#lbltipocalculo").html("((variable1-variable2)/variable2) * 100");
    }
    else if (lbl == 3) {
        $("#lbltipocalculo").html("(variable1-variable2)/variable2");
    }
}
function Catalogos()
{
    CargaListas();
  
}

////////////////////////////////////////////////////////////////////////////////////////////////////////


function CargaListas()
{ 
    $.ajax({
        type: 'POST',
        url: "GetCategoria",
        dataType: 'json',
        success: function (states) {
    $("#idcategoria").append('<option  value="0" selected disabled="disabled">Categoría</option>');
            $.each(states, function (i, state) {
                $("#idcategoria").append('<option value="' + state.Value + '">' +
                   state.Text + '</option>');
            });

            $("#idcategoria").val($("#idcategoria2").val());
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });

    $("#Scretaria2").html("");
    $.ajax({
        type: 'POST',
        url: "GetSecretarias",
        dataType: 'json',
        data: {
            idsecretaria: $("#idSecretaria").val()
        },
        success: function (states) {
            $("#Scretaria2").append('<option  value="0" selected disabled="disabled">Secretaría</option>');
            $.each(states, function (i, state) {
                $("#Scretaria2").append('<option value="' + state.Value + '">' +
                   state.Text + '</option>');
            });

            $("#Scretaria2").val($("#idSecretaria").val());
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
     
    $.ajax({
        type: 'POST',
        url: "../Direcciones/GetDirecciones",
        dataType: 'json',
        data: {
            id: $("#idSecretaria").val()
        },
        success: function (data) { 
            $("#idDireccion").append('<option value="0" selected disabled="disabled">Dirección</option>');
            $.each(data, function (i, state) {
                $("#idDireccion").append('<option value="' + state.Value + '">    ' + state.Text + '</option>');
            });

            $("#idDireccion").val($("#idDireccion2").val());
        },
        error: function (ex) {
        }
    });

    $("#Eje").html("");
    $.ajax({
        type: 'POST',
        url: "GetEje",
        dataType: 'json',
        success: function (states) {
            $("#Eje").append('<option value="0" selected disabled="disabled">Eje estratégico</option>');
            $.each(states, function (i, state) {
                $("#Eje").append('<option value="' + state.Value + '">    ' + state.Text + '</option>');
            });

            $("#Eje").val($("#ideje").val());
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });

    $("#idobjetiv").html("");
    $("#descobjetivo").html("");
    $.ajax({
        type: 'POST',
        url: "GetObjetivos",
        dataType: 'json',
        data: {
            id: $("#ideje").val()
        },
        success: function (states) {
            $("#idobjetiv").append('<option selected disabled="disabled">Objetivo estratégico</option>');
            $.each(states, function (i, state) {
                $("#idobjetiv").append('<option value="' + state.Value + '">    ' + state.Text + '</option>');
            });
            $("#idobjetiv").val($("#idobjetiv2").val());

            $("#descobjetivo").html($("#idobjetiv option:selected").text());

        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });

    $("#idnivelobj").html("");
    $.ajax({
        type: 'POST',
        url: "GetNivelObjetivos",
        dataType: 'json',
        data: {
            dolbe: $("#idcategoria2").val()
        },
        success: function (states) {
            $("#idnivelobj").append('<option value="0" selected disabled="disabled">Nivel Objetivo</option>');
            $.each(states, function (i, state) {
                $("#idnivelobj").append('<option value="' + state.Value + '">    ' + state.Text + '</option>');
            });

            $("#idnivelobj").val($("#idnivelobj2").val());
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });


    $("#idmetcal").html("");
    $.ajax({
        type: 'POST',
        url: "GetMetodoCalc",
        dataType: 'json',
        success: function (states) {
            $("#idmetcal").append('<option value="0" selected disabled="disabled">Metodo Calculo</option>');
            $.each(states, function (i, state) {
                $("#idmetcal").append('<option value="' + state.Value + '">   ' + state.Text + '</option>');
            });

            $("#idmetcal").val($("#idmetcal2").val());
            var lbl = $("#idmetcal2").val();
            if (lbl == 1) {
                $("#lbltipocalculo").html("Fórmula: x1/x2");
            }
            else if (lbl == 2) {
                $("#lbltipocalculo").html("Fórmula: ((x1-x2)/x2)*100");
            }
            else if (lbl == 3) {
                $("#lbltipocalculo").html("Fórmula: (x1-x2)/x2");
            }
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });


    $("#idsentido").html("");
    $.ajax({
        type: 'POST',
        url: "GetSentidoIndicador",
        dataType: 'json',
        success: function (states) {
            $("#idsentido").append('<option value="0" selected disabled="disabled">Sentido Indicador</option>');
            $.each(states, function (i, state) {
                $("#idsentido").append('<option value="' + state.Value + '">    ' + state.Text + '</option>');
            });

            $("#idsentido").val($("#idsentido2").val());
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });

    $("#idfrecuencia").html("");
    $.ajax({
        type: 'POST',
        url: "GetFrecuencia",
        dataType: 'json',
        success: function (states) {
            $("#idfrecuencia").append('<option value="0" selected disabled="disabled">Frecuencia medición</option>');
            $.each(states, function (i, state) {
                $("#idfrecuencia").append('<option value="' + state.Value + '">    ' + state.Text + '</option>');
            });

            $("#idfrecuencia").val($("#idfrecuencia2").val());
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });


    $("#iddimensind").html("");
    $.ajax({
        type: 'POST',
        url: "GetDimension",
        dataType: 'json',
        success: function (states) {
            $("#iddimensind").append('<option value="0" selected disabled="disabled">Dimensión</option>');
            $.each(states, function (i, state) {
                $("#iddimensind").append('<option value="' + state.Value + '">    ' + state.Text + '</option>');
            });

            $("#iddimensind").val($("#iddimensind2").val());
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });

    $("#idtipoind").html("");

    $.ajax({
        type: 'POST',
        url: "GetTipoIndicador",
        dataType: 'json',
        data: {
            dolbe: $("#idcategoria2").val()
        },
        success: function (states) {
            $("#idtipoind").append('<option value="0"  selected disabled="disabled">Tipo de Indicador</option>');
            $.each(states, function (i, state) {
                $("#idtipoind").append('<option value="' + state.Value + '">    ' + state.Text + '</option>');
            });

            $("#idtipoind").val($("#idtipoind2").val());
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });

}


function Valida2(a) {
    var list = "<ul>";

    $("#list").html("");
    var ok = "";
    var Categoria = $("#idcategoria").val();
    if (Categoria == null) { list = list + "<li>" + "Campo categoría está vacío" + "</li>"; ok = "false"; $('#idcategoria').css('border-color', '#ff9688'); } else { $('#idcategoria').css('border-color', '#ced4da'); }

    var Scretaria2 = $("#Scretaria2").val();
    if (Scretaria2 == null) { list = list + "<li>" + "Campo secretaría está vacío" + "</li>"; ok = "false"; $('#Scretaria2').css('border-color', '#ff9688'); } else { $('#Scretaria2').css('border-color', '#ced4da'); }

    var Direccion = $("#idDireccion").val();
    if (Direccion == null) { list = list + "<li>" + "Campo dirección está vacío" + "</li>"; ok = "false"; $('#idDireccion').css('border-color', '#ff9688'); } else { $('#idDireccion').css('border-color', '#ced4da'); }

    var Eje = $("#Eje").val();
    if (Eje == null) { list = list + "<li>" + "Campo eje estratégico está vacío" + "</li>"; ok = "false"; $('#Eje').css('border-color', '#ff9688'); } else { $('#Eje').css('border-color', '#ced4da'); }

    var Objetivo = $("#idobjetiv").val();
    if (Objetivo == null) { list = list + "<li>" + "Campo objetivo estratégico está vacío" + "</li>"; ok = "false"; $('#idobjetiv').css('border-color', '#ff9688'); } else { $('#idobjetiv').css('border-color', '#ced4da'); }

    var progpresu = $("#progmpresup").val();
    if (progpresu.length <= 0) { list = list + "<li>" + "Campo programa presupuestario  está vacío" + "</li>"; ok = "false"; $('#progmpresup').css('border-color', '#ff9688'); } else { $('#progmpresup').css('border-color', '#ced4da'); }

    var nombindicador = $("#nombindi").val();
    if (nombindicador.length <= 0) { list = list + "<li>" + "Campo nombre del Indicador está vacío" + "</li>"; ok = "false"; $('#nombindi').css('border-color', '#ff9688'); } else { $('#nombindi').css('border-color', '#ced4da'); }

    var defindicador = $("#descindicador").val();
    if (defindicador.length <= 0) { list = list + "<li>" + "Campo definición del indicador está vacío" + "</li>"; ok = "false"; $('#descindicador').css('border-color', '#ff9688'); } else { $('#descindicador').css('border-color', '#ced4da'); }

    var NivelObjetivo = $("#idnivelobj").val();
    if (NivelObjetivo == null) { list = list + "<li>" + "Campo nivel de objetivo está vacío" + "</li>"; ok = "false"; $('#idnivelobj').css('border-color', '#ff9688'); } else { $('#idnivelobj').css('border-color', '#ced4da'); }

    var objetresumen = $("#obj_resnarr").val();
    if (objetresumen.length <= 0) { list = list + "<li>" + "Campo Objetivo / Resumen narrativo está vacío" + "</li>"; ok = "false"; $('#obj_resnarr').css('border-color', '#ff9688'); } else { $('#obj_resnarr').css('border-color', '#ced4da'); }

    var MetodoCalc = $("#idmetcal").val();
    if (MetodoCalc == null) { list = list + "<li>" + "Campo método de cálculo está vacío" + "</li>"; ok = "false"; $('#idmetcal').css('border-color', '#ff9688'); } else { $('#idmetcal').css('border-color', '#ced4da'); }

    var TipoIndicador = $("#idtipoind").val();
    if (TipoIndicador == null) { list = list + "<li>" + "Campo tipo de indicador está vacío" + "</li>"; ok = "false"; $('#idtipoind').css('border-color', '#ff9688'); } else { $('#idtipoind').css('border-color', '#ced4da'); }

    var Dimension = $("#iddimensind").val();
    if (Dimension == null) { list = list + "<li>" + "Campo dimensión del indicador está vacío" + "</li>"; ok = "false"; $('#iddimensind').css('border-color', '#ff9688'); } else { $('#iddimensind').css('border-color', '#ced4da'); }

    var Frecuencia = $("#idfrecuencia").val();
    if (Frecuencia == null) { list = list + "<li>" + "Campo frecuencia de medición está vacío" + "</li>"; ok = "false"; $('#idfrecuencia').css('border-color', '#ff9688'); } else { $('#idfrecuencia').css('border-color', '#ced4da'); }

    var unidadmedida = $("#unidadmedida").val();
    if (unidadmedida.length <= 0) { list = list + "<li>" + "Campo unidad de medida vacío" + "</li>"; ok = "false"; $('#unidadmedida').css('border-color', '#ff9688'); } else { $('#unidadmedida').css('border-color', '#ced4da'); }

    var metainstitucional = $("#metainstitu").val();
    if (metainstitucional.length <= 0) { list = list + "<li>" + "Campo meta institicional vacío" + "</li>"; ok = "false"; $('#metainstitu').css('border-color', '#ff9688'); } else { $('#metainstitu').css('border-color', '#ced4da'); }

    var unidadmedidaval = $("#unidadmedidavalor").val();
    if (unidadmedidaval.length <= 0) { list = list + "<li>" + "Campo unidad de medida (meta valor) vacío" + "</li>"; ok = "false"; $('#unidadmedidavalor').css('border-color', '#ff9688'); } else { $('#unidadmedidavalor').css('border-color', '#ced4da'); }

    var metavalor = $("#metavalor").val();
    if (metavalor.length <= 0) { list = list + "<li>" + "Campo meta (valor) vacío" + "</li>"; ok = "false"; $('#metavalor').css('border-color', '#ff9688'); } else { $('#metavalor').css('border-color', '#ced4da'); }

    var valor = $("#valor").val();
    if (valor.length <= 0) { list = list + "<li>" + "Campo valor vacío" + "</li>"; ok = "false"; $('#valor').css('border-color', '#ff9688'); } else { $('#valor').css('border-color', '#ced4da'); }

    var anio = $("#anio").val();
    if (anio.length <= 0) { list = list + "<li>" + "Campo año vacío" + "</li>"; ok = "false"; $('#anio').css('border-color', '#ff9688'); } else { $('#anio').css('border-color', '#ced4da'); }

    var sentidoindicador = $("#idsentido").val();
    if (sentidoindicador == null) { list = list + "<li>" + "Campo sentido del indicador vacío" + "</li>"; ok = "false"; $('#idsentido').css('border-color', '#ff9688'); } else { $('#idsentido').css('border-color', '#ced4da'); }

    var verde = $("#verde").val();
    if (verde.length <= 0) { list = list + "<li>" + "Campo verde vacío" + "</li>"; ok = "false"; $('#verde').css('border-color', '#ff9688'); } else { $('#verde').css('border-color', '#ced4da'); }

    var amarillo = $("#amarillo").val();
    if (amarillo.length <= 0) { list = list + "<li>" + "Campo amarillo vacío" + "</li>"; ok = "false"; $('#amarillo').css('border-color', '#ff9688'); } else { $('#amarillo').css('border-color', '#ced4da'); }

    var rojo = $("#rojo").val();
    if (rojo.length <= 0) { list = list + "<li>" + "Campo rojo vacío" + "</li>"; ok = "false"; $('#rojo').css('border-color', '#ff9688'); } else { $('#rojo').css('border-color', '#ced4da'); }

    var medicionverificacion = $("#mediosverificacion").val();
    if (medicionverificacion.length <= 0) { list = list + "<li>" + "Campo medios de verificación / evidencia está vacío" + "</li>"; ok = "false"; $('#mediosverificacion').css('border-color', '#ff9688'); } else { $('#mediosverificacion').css('border-color', '#ced4da'); }

    list = list + "</ul>";
    if (ok == "false")
    {
        $("#list").append(list);
        $("#exampleModal").modal("show");
    }
    else
    {
        if (a == 1) {
            var opcion = confirm("¿Estas seguro de enviar la información?");
            if (opcion == true) {
                GuardaFicha(1);
            }
            else {

            }
        }
        else {
            GuardaFicha(0);
        } 
    }
}



function GuardaFicha(a) {
    alert();
    $('#spiner').modal('show');
    var formData = new FormData();
    formData.append("idestatus", a);
    formData.append("idficha", $("#idficha").val());
    formData.append("idcategoria", $("#idcategoria").val());
    formData.append("idDireccion", $("#idDireccion").val());
    formData.append("idobjetiv", $("#idobjetiv").val());
    formData.append("progmpresup", $("#progmpresup").val());
    formData.append("nombindi", $("#nombindi").val());
    formData.append("descindicador", $("#descindicador").val());
    formData.append("idnivelobj", $("#idnivelobj").val());
    formData.append("obj_resnarr", $("#obj_resnarr").val());
    formData.append("idtipoind", $("#idtipoind").val());
    formData.append("idobjetiv", $("#idobjetiv").val());
    formData.append("iddimensind", $("#iddimensind").val());
    formData.append("idfrecuencia", $("#idfrecuencia").val());
    formData.append("unidadmedida", $("#unidadmedida").val());
    formData.append("metainstitu", $("#metainstitu").val());
    formData.append("unidadmedidavalor", $("#unidadmedidavalor").val());
    formData.append("metavalor", $("#metavalor").val().replace(/,/g, "").replace("%", ""));
    formData.append("valor", $("#valor").val());
    formData.append("anio", $("#anio").val());
    formData.append("idsentido", $("#idsentido").val());
    formData.append("idestatus", $("#idestatus").val());
    formData.append("verde", $("#verde").val());
    formData.append("amarillo", $("#amarillo").val());
    formData.append("rojo", $("#rojo").val());
    formData.append("mediosverificacion", $("#mediosverificacion").val());
    formData.append("idmetcal", $("#idmetcal").val());
    formData.append("variable1", $("#variable1").val());
    formData.append("variable2", $("#variable2").val());
    formData.append("variable3", $("#variable3").val());
    formData.append("variable4", $("#variable4").val());
    formData.append("acronimo2", $("#acronimo2").val());
    formData.append("acronimo1", $("#acronimo1").val());

    $.ajax(
    {
        type: 'POST',
        url:pathserver+ "/Ficha/EditaFicha",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.activo == true || data.activo == "true") {
                setTimeout(function () { $('#spiner').modal('hide'); }, 500);
                $("#list").append('<p style="text-align:center;">Se guardo la información correctamente...  </p> ');
                $("#exampleModal").modal("show");

                path =pathserver+ "/Calendario/Lista";

                setTimeout(function () { window.location = path; }, 1500);

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



function GetObjetivo() {
    $("#idobjetiv").html("");
    $("#descobjetivo").html("");
    $.ajax({
        type: 'POST',
        url: "GetObjetivos",
        dataType: 'json',
        data: {
            id: $("#Eje").val()
        },
        success: function (states) {
            $("#idobjetiv").append('<option selected disabled="disabled">Objetivo estratégico</option>');
            $.each(states, function (i, state) {
                $("#idobjetiv").append('<option value="' + state.Value + '">' +
                   state.Text + '</option>');
            });

        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}

function CargaTipoIndicador()
{
    $("#idnivelobj").html("");
    $.ajax({
        type: 'POST',
        url: "GetNivelObjetivos",
        dataType: 'json',
        data: {
            dolbe: $("#idcategoria").val()
        },
        success: function (states) {
            $("#idnivelobj").append('<option value="0" selected disabled="disabled">Nivel Objetivo</option>');
            $.each(states, function (i, state) {
                $("#idnivelobj").append('<option value="' + state.Value + '">    ' + state.Text + '</option>');
            });

            $("#idnivelobj").val($("#idnivelobj2").val());
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });

    $("#idtipoind").html("");
    $.ajax({
        type: 'POST',
        url: "GetTipoIndicador",
        dataType: 'json',
        data: {
            dolbe: $("#idcategoria").val()
        },
        success: function (states) {
            $("#idtipoind").append('<option selected disabled="disabled">Tipo de Indicador</option>');
            $.each(states, function (i, state) {
                $("#idtipoind").append('<option value="' + state.Value + '">' +
                   state.Text + '</option>');
            });

        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}

function descobj() {
    $("#descobjetivo").html("");
    $("#descobjetivo").html($("#idobjetiv option:selected").text());
}


function Variables()
{

    $("#variable1").html("");

    $("#variable1").html("");
    $("#variable1").html($("#idobjetiv option:selected").text());
}