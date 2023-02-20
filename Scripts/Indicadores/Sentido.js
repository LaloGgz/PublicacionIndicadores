
function GetId(a) {
    $("#idborra").val(a); // get current row 1st TD value

}
function CancelaDelet() {
    $("#idborra").val(""); // get current row 1st TD value

}

function Delete()
{
    $('#spiner').modal('show');

    var opcion = true;//confirm("¿Desea borrar el registro?");
    if (opcion == true)
    {
        $.ajax({
            type: 'POST',

            url: "Borra",

            dataType: 'json',

            data: {
                id: parseInt($("#idborra").val())
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


function Get(a)
{ 
    $('#spiner').modal('show');
    $.ajax({
        type: 'POST',

        url: "Get",

        dataType: 'json',

        data: {
            id: parseInt(a)
        },
        success: function (data) { 
            $("#descripcion").val(data.descripcion); // get current row 2nd TD
            $("#iddescripcion").val(data.idsentido); // get current row 1st TD value
         

        },
        error: function (ex) {
            alert(ex.Message);
        }
    });
    setTimeout(function () {
        $('#spiner').modal('hide');
    }, 500);
}



function Actualiza()
{

    $("#list").html("");

    $('#spiner').modal('show');
    $.ajax({
        type: 'POST',

        url: "Update",

        dataType: 'json',

        data: { 
            descripcion: $("#descripcion").val(),
            id: $("#iddescripcion").val()

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
    var descripcion1 = $("#descripcion1").val();
    if (descripcion1.length <= 0) { list = list + "<li>" + "Campo descripción está vacío" + "</li>"; ok = "false"; }


    list = list + "</ul>";
    if (ok == "false") {
        $("#list").append(list);
        $("#exampleModal").modal("show");
    }
    else
    {
        Guarda();
    }
}


function Guarda() {

    $("#list").html("");

    $('#spiner').modal('show');
    $.ajax({
        type: 'POST',

        url: "Create",

        dataType: 'json',

        data: {
            descripcion: $("#descripcion1").val()
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