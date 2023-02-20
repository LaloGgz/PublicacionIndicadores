
function DeleteTipoDoc(a) {
    $('#spiner').modal('show');

    var opcion = confirm("¿Desea borrar el registro?");
    if (opcion == true) {
        $.ajax({
            type: 'POST',

            url: "BorraTipoDoc",

            dataType: 'json',

            data: {
                id: parseInt(a)
            },
            success: function (data) {
                if (data == "1") {
                    setTimeout(function () {
                        $('#spiner').modal('hide');
                    }, 500);
                    $("#list").append("<p>Se borro correctamente</p>");
                    $("#exampleModal").modal("show");
                    window.location.reload()
                }
                else {
                    setTimeout(function () {
                        $('#spiner').modal('hide');
                    }, 500);
                    $("#list").append("<p>Ocurrió un error al ingresar el registro, favor de volver a intentarlo</p>");
                    $("#exampleModal").modal("show");
                }
            },
            error: function (ex)
            {
                alert(ex.Message);
            }
        });
    }
    setTimeout(function ()
    {
        $('#spiner').modal('hide');
    }, 500);
}



function GetTipdoc(a) {

    $('#spiner').modal('show');
    $.ajax({
        type: 'POST',

        url: "GetTipoDocumento",

        dataType: 'json',

        data: {
            id: parseInt(a)
        },
        success: function (data) {
            $("#descripcion").val(data.descripcion); // get current row 2nd TD
            $("#idtipodocumento").val(data.idTipoDoc); // get current row 1st TD value


        },
        error: function (ex)
        {
            alert(ex.Message);
        }
    });
    setTimeout(function ()
    {
        $('#spiner').modal('hide');
    }, 500);
}



function ActualizaTipoDocumento() {

    $("#list").html("");

    $('#spiner').modal('show');
    $.ajax({
        type: 'POST',

        url: "UpdateTipoDocumento",

        dataType: 'json',

        data: {
            descripcion: $("#descripcion").val(),
            idTipoDocumento: $("#idtipodocumento").val()

        },
        success: function (data) {
            if (data == "1") {
                setTimeout(function () {
                    $('#spiner').modal('hide');
                }, 500);
                $("#list").append("<p>Se actualizo correctamente</p>");
                $("#exampleModal").modal("show");
                window.location.reload()
            }
            else {
                setTimeout(function ()
                {
                    $('#spiner').modal('hide');
                }, 500);
                $("#list").append("<p>Ocurrió un error al ingresar el registro, favor de volver a intentarlo</p>");
                $("#exampleModal").modal("show");
            }

        },
        error: function (ex)
        {
            alert(ex.Message);
        }
    });
    setTimeout(function ()
    {
        $('#spiner').modal('hide');
    }, 500);
}



function Valida() {
    var list = "<ul>";

    $("#list").html("");
    var ok = "";
    var tipodocumento = $("#tipodocumento").val();
    if (tipodocumento.length <= 0) { list = list + "<li>" + "Campo tipo documento está vacío" + "</li>"; ok = "false"; }


    list = list + "</ul>";
    if (ok == "false") {
        $("#list").append(list);
        $("#exampleModal").modal("show");
    }
    else {
        GuardaTipoDocumento();
    }
}


function GuardaTipoDocumento() {

    $("#list").html("");

    $('#spiner').modal('show');
    $.ajax({
        type: 'POST',

        url: "CreateTipoDoc",

        dataType: 'json',

        data: {
            descripcion: $("#tipodocumento").val()
        },
        success: function (data) {
            if (data == "1") {
                setTimeout(function () {
                    $('#spiner').modal('hide');
                }, 500);
                $("#list").append("<p>Se guardo correctamente</p>");
                $("#exampleModal").modal("show");
                window.location.reload()
            }
            else {
                setTimeout(function () {
                    $('#spiner').modal('hide');
                }, 500);
                $("#list").append("<p>Ocurrió un error al ingresar el registro, favor de volver a intentarlo</p>");
                $("#exampleModal").modal("show");
            }

        },
        error: function (ex)
        {
            alert(ex.Message);
        }
    });
    setTimeout(function ()
    {
        $('#spiner').modal('hide');
    }, 500);
}