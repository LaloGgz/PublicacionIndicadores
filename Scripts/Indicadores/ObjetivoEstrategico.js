
function GetId(a) {
    $("#idborra").val(a); // get current row 1st TD value

}
function CancelaDelet() {
    $("#idborra").val(""); // get current row 1st TD value

}


function CargaEjes() {
    $("#idejeget").html("");

    $.ajax({
        type: 'POST',
        url: "GetEjes",
        dataType: 'json',
        success: function (states)
        {
            $("#idejeget").append('<option value=""></option>');
            $.each(states, function (i, state) {
                $("#idejeget").append('<option value="' + state.Value + '">' +
                    state.Text + '</option>');
            });

        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}


function Delete() {
    $('#spiner').modal('show');

    var opcion = true;//confirm("¿Desea borrar el registro?");
    if (opcion == true) {
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


function Get(a) {
    $('#spiner').modal('show');
    $.ajax({
        type: 'POST',

        url: "Get",

        dataType: 'json',

        data: {
            id: parseInt(a)
        },
        success: function (data) {
            $("#descripcionedit").val(data.descripcion); // get current row 2nd TD
            $("#idobjetivoedit").val(data.idobjetiv); // get current row 1st TD value
            $("#idejeedit").val(data.ideje); // get current row 1st TD value
            $.ajax({
                type: 'POST',
                url: "GetEjes",
                dataType: 'json',
                success: function (states) {
                    $("#Ejeedit").append('<option value=""></option>');
                    $.each(states, function (i, state) {
                        $("#Ejeedit").append('<option value="' + state.Value + '">' +
                            state.Text + '</option>');
                    });
                    $("#Ejeedit").val(data.ideje); // get current row 1st TD value

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



function Actualiza() {

    $("#list").html("");

    $('#spiner').modal('show');
    $.ajax({
        type: 'POST',

        url: "Update",

        dataType: 'json',

        data: {
            descripcion: $("#descripcionedit").val(),
            idobjetiv: $("#idobjetivoedit").val(),
            ideje: $("#Ejeedit").val()


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

    if (a == "1")
    {
        var descripcionedit = $("#descripcionedit").val();
        if (descripcionedit.length <= 0) { list = list + "<li>" + "Campo descripción está vacío" + "</li>"; ok = "false"; }


        var Ejeedit = $("#Ejeedit").val();
        if (Ejeedit.length <= 0) { list = list + "<li>" + "Campo Eje está vacío" + "</li>"; ok = "false"; }

        list = list + "</ul>";
        if (ok == "false") {
            $("#list").append(list);
            $("#exampleModal").modal("show");
        }
        else {
            Actualiza();
        }
    }
    else
    {
        var descripcion1 = $("#descripcion").val();
        if (descripcion1.length <= 0) { list = list + "<li>" + "Campo descripción está vacío" + "</li>"; ok = "false"; }


        var idejeget = $("#idejeget").val();
        if (idejeget.length <= 0) { list = list + "<li>" + "Campo Eje está vacío" + "</li>"; ok = "false"; }


        list = list + "</ul>";
        if (ok == "false") {
            $("#list").append(list);
            $("#exampleModal").modal("show");
        }
        else {
            Guarda();
        }
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
            ideje: $("#idejeget").val(),
            descripcion: $("#descripcion").val()
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