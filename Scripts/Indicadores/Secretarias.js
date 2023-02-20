
function GetId(a) {
    $("#idborrasecre").val(a); // get current row 1st TD value

}
function CancelaDelet() {
    $("#idborrasecre").val(""); // get current row 1st TD value

}

function DeleteSecre()
{
    $('#spiner').modal('show');

    var opcion = true;//confirm("¿Desea borrar el registro?");
    if (opcion == true)
    {
        $.ajax({
            type: 'POST',

            url: "BorraSecretaria",

            dataType: 'json',

            data: {
                id: parseInt($("#idborrasecre").val())
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
            error: function (ex) {
                alert(ex.Message);
            }
        });
    } 
    setTimeout(function () {
        $('#spiner').modal('hide');
    }, 500);
}


function GetSecre(a)
{

    $('#spiner').modal('show');
    $.ajax({
        type: 'POST',

        url: "GetSecretaria",

        dataType: 'json',

        data: {
            id: parseInt(a)
        },
        success: function (data) { 
            $("#descripcion").val(data.descripcion); // get current row 2nd TD
            $("#idSecretaria").val(data.idsecretaria); // get current row 1st TD value
         

        },
        error: function (ex) {
            alert(ex.Message);
        }
    });
    setTimeout(function () {
        $('#spiner').modal('hide');
    }, 500);
}



function ActualizaSecretaria()
{

    $("#list").html("");

    $('#spiner').modal('show');
    $.ajax({
        type: 'POST',

        url: "UpdateSecretaria",

        dataType: 'json',

        data: { 
            descripcion: $("#descripcion").val(),
            idSecretaria: $("#idSecretaria").val()

        },
        success: function (data)
        {
            if (data == "1")
            {
                setTimeout(function () {
                    $('#spiner').modal('hide');
                }, 500);
                $("#list").append("<p>Se actualizo correctamente</p>");
                $("#exampleModal").modal("show");
                window.location.reload()
            }
            else
            {
                setTimeout(function () {
                    $('#spiner').modal('hide');
                }, 500);
                $("#list").append("<p>Ocurrió un error al ingresar el registro, favor de volver a intentarlo</p>");
                $("#exampleModal").modal("show");
            }

        },
        error: function (ex) {
            alert(ex.Message);
        }
    });
    setTimeout(function () {
        $('#spiner').modal('hide');
    }, 500);
}

function Valida()
{
    var list = "<ul>";

    $("#list").html("");
    var ok = "";
    var secretaria = $("#secretaria").val();
    if (secretaria.length <= 0) { list = list + "<li>" + "Campo secretaría está vacío" + "</li>"; ok = "false"; }


    list = list + "</ul>";
    if (ok == "false") {
        $("#list").append(list);
        $("#exampleModal").modal("show");
    }
    else
    {
        GuardaSecretaria();
    }
}


function GuardaSecretaria() {

    $("#list").html("");

    $('#spiner').modal('show');
    $.ajax({
        type: 'POST',

        url: "CreateSecretaria",

        dataType: 'json',

        data: {
            descripcion: $("#secretaria").val()
        },
        success: function (data)
        {
            if (data == "1") {
                setTimeout(function ()
                {
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
        error: function (ex) {
            alert(ex.Message);
        }
    });
    setTimeout(function () {
        $('#spiner').modal('hide');
    }, 500);
}