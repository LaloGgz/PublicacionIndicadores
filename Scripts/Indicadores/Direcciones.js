  
function GetId(a) {
    $("#idborradire").val(a); // get current row 1st TD value

}
function CancelaDelet() {
    $("#idborradire").val(""); // get current row 1st TD value

}

function DeleteDire()
{
    $('#spiner').modal('show');

    var opcion = true;//confirm("¿Desea borrar el registro?");
    if (opcion == true)
    {
        $.ajax({
            type: 'POST',

            url: "BorraDirecc",

            dataType: 'json',

            data: {
                id: parseInt($("#idborradire").val())
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


function GetDire(a)
{

    $('#spiner').modal('show');
    $.ajax({
        type: 'POST',

        url: "GetDireccion", 

        dataType: 'json',

        data: {
            id: parseInt(a)
        },
        success: function (data)
        {
            $("#idDireccion").val(data.iddireccion); // get current row 1st TD value
            $("#descripcion").val(data.descripcion); // get current row 2nd TD
            $("#idSecretaria").val(data.idsecretaria); // get current row 1st TD value
            $("#Scretaria").html("");
            $.ajax({
                type: 'POST', 
                url: "GetSecretarias", 
                dataType: 'json',
                success: function (states) {
                    $("#Scretaria").append('<option value=""></option>');
                    $.each(states, function (i, state) {
                        $("#Scretaria").append('<option value="' + state.Value + '">' +
                            state.Text + '</option>');
                    });

                    $("#Scretaria").val(data.idsecretaria);
                },
                error: function (ex) {
                    alert('Sin Datos.');
                }
            });

        },
        error: function (ex) {
            alert(ex.Message);
        }
    });
    setTimeout(function () {
        $('#spiner').modal('hide');
    }, 500);
}

function CargaSecretarias()
{ 
    $("#Scretaria2").html("");

    $.ajax({
        type: 'POST',
        url: "GetSecretarias",
        dataType: 'json',
        success: function (states)
        { 
            $("#Scretaria2").append('<option value=""></option>');
            $.each(states, function (i, state)
            { 
                $("#Scretaria2").append('<option value="' + state.Value + '">' +
                   state.Text + '</option>');
            });
             
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}


function Actualizadireccion()
{

    $("#list").html("");

    $('#spiner').modal('show');
    $.ajax({
        type: 'POST',

        url: "UpdateDireccion",

        dataType: 'json',

        data: {
            idDireccion: $("#idDireccion").val(),
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


function Valida(a)
{
    var list = "<ul>";

    $("#list").html("");
    var ok = "";

    if (a == "1") {
        var idDireccion = $("#idDireccion").val();
        if (idDireccion.length <= 0) { list = list + "<li>" + "Campo dirección está vacío" + "</li>"; ok = "false"; }


        var idSecretaria = $("#idSecretaria").val();
        if (idSecretaria.length <= 0) { list = list + "<li>" + "Campo secretaría está vacío" + "</li>"; ok = "false"; }


        list = list + "</ul>";
        if (ok == "false") {
            $("#list").append(list);
            $("#exampleModal").modal("show");
        }
        else {
            Actualizadireccion();
        }
    }
    else {
        var idSecretaria2 = $("#idSecretaria2").val();
        if (idSecretaria2.length <= 0) { list = list + "<li>" + "Campo secretaría está vacío" + "</li>"; ok = "false"; }


        var direccion = $("#direccion").val();
        if (direccion.length <= 0) { list = list + "<li>" + "Campo dirección está vacío" + "</li>"; ok = "false"; }


        list = list + "</ul>";
        if (ok == "false") {
            $("#list").append(list);
            $("#exampleModal").modal("show");
        }
        else {
            GuardaSecretaria();
        }
    }
}


function GuardaSecretaria() {

    $("#list").html("");

    $('#spiner').modal('show');
    $.ajax({
        type: 'POST',

        url: "CreateDireccion",

        dataType: 'json',

        data: {
            descripcion: $("#direccion").val(),
            idsecretaria: $("#idSecretaria2").val()
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
        error: function (ex) {
            alert(ex.Message);
        }
    });
    setTimeout(function () {
        $('#spiner').modal('hide');
    }, 500);
}