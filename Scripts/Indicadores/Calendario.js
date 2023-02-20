
var pathserver = window.location.pathname;


if (pathserver.includes("Indicadores")) {

    pathserver = "/Indicadores"; 
}
else {
    pathserver = ""; 
}

function Valida() {
    var list = "<ul>";

    $("#list").html("");
    var ok = "";
   
    list = list + "</ul>";
    if (ok == "false") {
        $("#list").append(list);
        $("#exampleModal").modal("show");
    }
    else {
        Guarda();
    }
}

function Guarda() {
    $('#spiner').modal('show');
    var formData = new FormData(); 
    formData.append("Enero", $("#Enero").val());
    formData.append("Febrero", $("#Febrero").val());
    formData.append("Marzo", $("#Marzo").val());
    formData.append("Abril", $("#Abril").val());
    formData.append("Mayo", $("#Mayo").val());
    formData.append("Junio", $("#Junio").val());
    formData.append("Julio", $("#Julio").val());
    formData.append("Agosto", $("#Agosto").val());
    formData.append("Septiembre", $("#Septiembre").val());
    formData.append("Octubre", $("#Octubre").val());
    formData.append("Noviembre", $("#Noviembre").val());
    formData.append("Diciembre", $("#Diciembre").val());
    formData.append("MontoSoli", $("#montosolicitado").val());
    formData.append("idficha", $("#idficha").val());
    formData.append("idcalendario", $("#idcalendario").val());

    $.ajax(
    {
        type: 'POST',
        url: "CreateCalendario",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.activo == true || data.activo == "true") {
                setTimeout(function () { $('#spiner').modal('hide'); }, 500);
                $("#list").append('<p style="text-align:center;">Se guardo la información correctamente </p>');
                $("#exampleModal").modal("show"); 
                setTimeout(function () { window.location.reload(); }, 5000);

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
 
