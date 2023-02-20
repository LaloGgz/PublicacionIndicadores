   
//function GetDire()
//{ 
//    $.ajax({
//        type: 'POST', 
//        url: "Direcciones/GetDirecciones", 
//        dataType: 'json', 
//        data: {
//            id: $("#Secretaria").val()
//        },
//        success: function (data)
//        { 
//            $("#Direccion").html("");
//            $("#Direccion").append('<option value=""></option>');
//            $.each(data, function (i, state) {
//                $("#Direccion").append('<option value="' + state.Value + '">' +
//                    state.Text + '</option>');
//            });

//        },
//        error: function (ex) {
//            alert(ex.Message);
//        }
//    }); 
//}



//function Cargar()
//{
//    $("#Secretaria").html("");

//    $.ajax({
//        type: 'POST',
//        url: "Direcciones/GetSecretarias",
//        dataType: 'json',
//        success: function (states) {
//            $("#Secretaria").append('<option value=""></option>');
//            $.each(states, function (i, state) {
//                $("#Secretaria").append('<option value="' + state.Value + '">' +
//                   state.Text + '</option>');
//            });

//        },
//        error: function (ex)
//        {
//            alert('Sin Datos.');
//        }
//    });

//    $("#Documento").html(""); 
//    $.ajax({
//        type: 'POST',
//        url: "Documentos/GetDocumento",
//        dataType: 'json',
//        success: function (states) {
//            $("#Documento").append('<option value=""></option>');
//            $.each(states, function (i, state) {
//                $("#Documento").append('<option value="' + state.Value + '">' +
//                   state.Text + '</option>');
//            });

//        },
//        error: function (ex) {
//            alert('Sin Datos.');
//        }
//    });
//}

//function Valida(a)
//{
//    var list = "<ul>";

//    $("#list").html("");
//    var ok = "";

//    if (a == "1")
//    {
//        var Editcodigo = $("#Editcodigo").val();
//        if (Editcodigo.length <= 0) { list = list + "<li>" + "Campo código está vacío" + "</li>"; ok = "false"; }

//        var Editfecha = $("#Editfecha").val();
//        if (Editfecha.length <= 0) { list = list + "<li>" + "Campo fecha está vacío" + "</li>"; ok = "false"; }

//        var Editnombre = $("#Editnombre").val();
//        if (Editnombre.length <= 0) { list = list + "<li>" + "Campo nombre está vacío" + "</li>"; ok = "false"; }

//        var EditDocumento = $("#EditDocumento").val();
//        if (EditDocumento.length <= 0) { list = list + "<li>" + "Campo tipo de documento está vacío" + "</li>"; ok = "false"; }

//        var EditSecretaria = $("#EditSecretaria").val();
//        if (EditSecretaria.length <= 0) { list = list + "<li>" + "Campo secretaría está vacío" + "</li>"; ok = "false"; }

//        var EditDireccion = $("#EditDireccion").val();
//        if (EditDireccion.length <= 0) { list = list + "<li>" + "Campo dirección está vacío" + "</li>"; ok = "false"; }
         
//        list = list + "</ul>";
//        if (ok == "false") {
//            $("#list").append(list);
//            $("#exampleModal").modal("show");
//        }
//        else
//        {
//            ActualizaDocumento();
//        }
//    }
//    else
//    {
//        var codigo = $("#codigo").val();
//        if (codigo.length <= 0) { list = list + "<li>" + "Campo código está vacío" + "</li>"; ok = "false"; }

//        var fecha = $("#fecha").val();
//        if (fecha.length <= 0) { list = list + "<li>" + "Campo fecha está vacío" + "</li>"; ok = "false"; }

//        var nombre = $("#nombre").val();
//        if (nombre.length <= 0) { list = list + "<li>" + "Campo nombre está vacío" + "</li>"; ok = "false"; }

//        var Documento = $("#Documento").val();
//        if (Documento.length <= 0) { list = list + "<li>" + "Campo tipo de documento está vacío" + "</li>"; ok = "false"; }

//        var Secretaria = $("#Secretaria").val();
//        if (Secretaria.length <= 0) { list = list + "<li>" + "Campo secretaría está vacío" + "</li>"; ok = "false"; }

//        var Direccion = $("#Direccion").val();
//        if (Direccion == null) { list = list + "<li>" + "Campo dirección está vacío" + "</li>"; ok = "false"; }


//        list = list + "</ul>";
//        if (ok == "false") {
//            $("#list").append(list);
//            $("#exampleModal").modal("show");
//        }
//        else {
//            Guarda();
//        }
//    }
    
//}
 

//function ActualizaDocumento()
//{
//    $('#spiner').modal('show');

//    var formData = new FormData();

//    var file = $("#Editfile").get(0).files;

//    formData.append("iddoc", $("#Editiddoc").val());
//    formData.append("codigo", $("#Editcodigo").val());
//    formData.append("fecha", $("#Editfecha").val());
//    formData.append("nombre", $("#Editnombre").val());
//    formData.append("Documento", $("#EditDocumento").val());
//    formData.append("Secretaria", $("#EditSecretaria").val());
//    formData.append("Direccion", $("#EditDireccion").val()); 
//    formData.append("file", file[0]);

//    $.ajax(
//    {
//        type: 'POST',
//        url: "Documentos/ActualizaDocumento",
//        data: formData,
//        cache: false,
//        contentType: false,
//        processData: false,
//        success: function (data) {
//            if (data.estatus == true || data.estatus == "true")
//            {
//                var URL = '../Documentos/Inicio';
//                window.location.href = URL
//            }
//            else {
//                $("#list").html("");
//                $("#list").append("<p>Ocurrió un error al ingresar el registro, favor de volver a intentarlo</p>");
//                $("#exampleModal").modal("show");
//            }
//            setTimeout(function () {
//                $('#spiner').modal('hide');
//            }, 1000);
//        }
//    });
//}


//function Guarda()
//{
//    $('#spiner').modal('show'); 

//    var formData = new FormData();

//    var file = $("#file").get(0).files;

//    formData.append("codigo", $("#codigo").val());
//    formData.append("fecha", $("#fecha").val());
//    formData.append("ape2", $("#ape2").val());
//    formData.append("nombre", $("#nombre").val());
//    formData.append("Documento", $("#Documento").val());
//    formData.append("Secretaria", $("#Secretaria").val());
//    formData.append("Direccion", $("#Direccion").val()); 

//    formData.append("file", file[0]);

//    $.ajax(
//    {
//        type: 'POST',
//        url: "Documentos/AjaxMethod",
//        data: formData,
//        cache: false,
//        contentType: false,
//        processData: false,
//        success: function (data)
//        { 
//            if (data.estatus == true || data.estatus == "true")
//            {
                
//                var URL = 'Documentos/Inicio';
     
//                window.location.href = URL;
//            }
//            else {
//                $("#list").html("");
//                $("#list").append("<p>Ocurrió un error al ingresar el registro, favor de volver a intentarlo</p>");
//                $("#exampleModal").modal("show");
//            }
//            setTimeout(function () {
//                $('#spiner').modal('hide');
//            }, 1000);
//        }
//    }); 
//}





//function GetDocumento(a)
//{ 
//    $('#spiner').modal('show');
//    $.ajax({
//        type: 'POST',

//        url: "~Documentos/GetDocumentos", 
//        dataType: 'json',

//        data: {
//            id: parseInt(a)
//        },
//        success: function (data)
//        { 
//            $("#Editiddoc").val(a); // get current row 1st TD value
//            $("#Editcodigo").val(data.codigo); // get current row 1st TD value
//            $("#Editfecha").val(data.fechaPublicacion); // get current row 2nd TD
//            $("#Editnombre").val(data.nomDoc); // get current row 1st TD value 
         
//            $("#EditDocumento").html("");
//            $.ajax({
//                type: 'POST',
//                url: "Documentos/GetDocumento",
//                dataType: 'json',
//                success: function (states) {
//                    $("#EditDocumento").append('<option value=""></option>');
//                    $.each(states, function (i, state) {
//                        $("#EditDocumento").append('<option value="' + state.Value + '">' +
//                           state.Text + '</option>');
//                    });

//                    $("#EditDocumento").val(data.idTipoDoc);
//                },
//                error: function (ex) {
//                    alert('Sin Datos.');
//                }
//            });


//            $("#EditSecretaria").html("");

//            $.ajax({
//                type: 'POST',
//                url: "Direcciones/GetSecretarias",
//                dataType: 'json',
//                success: function (states) {
//                    $("#EditSecretaria").append('<option value=""></option>');
//                    $.each(states, function (i, state) {
//                        $("#EditSecretaria").append('<option value="' + state.Value + '">' +
//                           state.Text + '</option>');
//                    });

//                    $("#EditSecretaria").val(data.idSecretaria);
//                },
//                error: function (ex) {
//                    alert('Sin Datos.');
//                }
//            });

//            $.ajax({
//                type: 'POST',
//                url: "Direcciones/GetDirecciones",
//                dataType: 'json',
//                data: {
//                    id: data.idSecretaria
//                },
//                success: function (list)
//                {
//                    $("#EditDireccion").html("");
//                    $("#EditDireccion").append('<option value=""></option>');
//                    $.each(list, function (i, state) {
//                        $("#EditDireccion").append('<option value="' + state.Value + '">' +
//                            state.Text + '</option>');
//                    });

//                    $("#EditDireccion").val(data.idDireccion);
//                },
//                error: function (ex) {
//                    alert(ex.Message);
//                }
//            });

//        },
//        error: function (ex) {
//            alert(ex.Message);
//        }
//    });
//    setTimeout(function () {
//        $('#spiner').modal('hide');
//    }, 500);
//}






//function GetDire2()
//{
//    $.ajax({
//        type: 'POST',
//        url: "/Direcciones/GetDirecciones",
//        dataType: 'json',
//        data: {
//            id: $("#EditSecretaria").val()
//        },
//        success: function (data)
//        {
//            $("#EditDireccion").html("");
//            $("#EditDireccion").append('<option value=""></option>');
//            $.each(data, function (i, state) {
//                $("#EditDireccion").append('<option value="' + state.Value + '">' +
//                    state.Text + '</option>');
//            });

//        },
//        error: function (ex) { 
//        }
//    });
//}


function Delete(element) {
    var idarchivo = element;

    if (idarchivo.length <= 0 || idarchivo == "") {

    }
    else {
        if (window.confirm("¿Estas seguro de borrar el registro?"))
        {
            $.ajax({
                type: 'POST',
                url: "BorraRegistro",
                dataType: 'json',
                data: {
                    codigo:  element
                },
                success: function (data)
                {
                    var list = "<ul>";
                    $("#list").html("");
                    var ok = "";

                    if (data == "1")
                    {
                        list = list + "<li>" + "Se borro el registro correctamente" + "</li>";
                    }
                    else
                    {
                        list = list + "<li>" + "Ocurrió un error al borrar el registro, favor de volver a intentarlo" + "</li>";
                         
                    }
                    list = list + "</ul>";
                    $("#list").append(list);
                    $("#exampleModal").modal("show");
                    var URL = 'Inicio';
                    window.location.href = URL
                
                },
                error: function (ex) { 
                }
            });
        }
        else {

        }


    }
}
 
function GetDire() {
    $.ajax({
        type: 'POST',
        url: "../Direcciones/GetDirecciones",
        dataType: 'json',
        data: {
            id: $("#Secretaria").val()
        },
        success: function (data) {
            $("#Direccion").html("");
            $("#Direccion").append('<option value=""></option>');
            $.each(data, function (i, state) {
                $("#Direccion").append('<option value="' + state.Value + '">' +
                    state.Text + '</option>');
            });

        },
        error: function (ex) {
            alert(ex.Message);
        }
    });
}
 
function Cargar()
{
    $("#Secretaria").html("");

    $.ajax({
        type: 'POST',
        url: "../Direcciones/GetSecretarias",
        dataType: 'json',
        success: function (states) {
            $("#Secretaria").append('<option value=""></option>');
            $.each(states, function (i, state) {
                $("#Secretaria").append('<option value="' + state.Value + '">' +
                   state.Text + '</option>');
            });

        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });

    $("#Documento").html("");
    $.ajax({
        type: 'POST',
        url: "GetDocumento",
        dataType: 'json',
        success: function (states) {
            $("#Documento").append('<option value=""></option>');
            $.each(states, function (i, state) {
                $("#Documento").append('<option value="' + state.Value + '">' +
                   state.Text + '</option>');
            });

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

    if (a == "1") {
        var Editcodigo = $("#Editcodigo").val();
        if (Editcodigo.length <= 0) { list = list + "<li>" + "Campo código está vacío" + "</li>"; ok = "false"; }

        var Editfecha = $("#Editfecha").val();
        if (Editfecha.length <= 0) { list = list + "<li>" + "Campo fecha está vacío" + "</li>"; ok = "false"; }

        var Editnombre = $("#Editnombre").val();
        if (Editnombre.length <= 0) { list = list + "<li>" + "Campo nombre está vacío" + "</li>"; ok = "false"; }

        var EditDocumento = $("#EditDocumento").val();
        if (EditDocumento.length <= 0) { list = list + "<li>" + "Campo tipo de documento está vacío" + "</li>"; ok = "false"; }

        var EditSecretaria = $("#EditSecretaria").val();
        if (EditSecretaria.length <= 0) { list = list + "<li>" + "Campo secretaría está vacío" + "</li>"; ok = "false"; }

        var EditDireccion = $("#EditDireccion").val();
        if (EditDireccion.length <= 0) { list = list + "<li>" + "Campo dirección está vacío" + "</li>"; ok = "false"; }


        list = list + "</ul>";
        if (ok == "false") {
            $("#list").append(list);
            $("#exampleModal").modal("show");
        }
        else {
            ActualizaDocumento();
        }
    }
    else
    {
        var file = $("#file").val(); 
        if (file.length <= 0) { list = list + "<li>" + "Campo adjuntar documento está vacío" + "</li>"; ok = "false"; }

        var codigo = $("#codigo").val();
        if (codigo.length <= 0) { list = list + "<li>" + "Campo código está vacío" + "</li>"; ok = "false"; }

        var fecha = $("#fecha").val();
        if (fecha.length <= 0) { list = list + "<li>" + "Campo fecha está vacío" + "</li>"; ok = "false"; }

        var nombre = $("#nombre").val();
        if (nombre.length <= 0) { list = list + "<li>" + "Campo nombre está vacío" + "</li>"; ok = "false"; }

        var Documento = $("#Documento").val();
        if (Documento.length <= 0) { list = list + "<li>" + "Campo tipo de documento está vacío" + "</li>"; ok = "false"; }

        var Secretaria = $("#Secretaria").val();
        if (Secretaria.length <= 0) { list = list + "<li>" + "Campo secretaría está vacío" + "</li>"; ok = "false"; }

        var Direccion = $("#Direccion").val();
        if (Direccion == null) { list = list + "<li>" + "Campo dirección está vacío" + "</li>"; ok = "false"; }


        list = list + "</ul>";
        if (ok == "false")
        {
            $("#list").append(list);
            $("#exampleModal").modal("show");
        }
        else {
            Guarda();
        }
    }

}


function ActualizaDocumento() {
    $('#spiner').modal('show');

    var formData = new FormData();

    var file = $("#Editfile").get(0).files;

    formData.append("iddoc", $("#Editiddoc").val());
    formData.append("codigo", $("#Editcodigo").val());
    formData.append("fecha", $("#Editfecha").val());
    formData.append("nombre", $("#Editnombre").val());
    formData.append("Documento", $("#EditDocumento").val());
    formData.append("Secretaria", $("#EditSecretaria").val());
    formData.append("Direccion", $("#EditDireccion").val());
    formData.append("file", file[0]);

    $.ajax(
    {
        type: 'POST',
        url: "ActualizaDocumento",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.estatus == true || data.estatus == "true") {
                var URL = 'Inicio';
                window.location.href = URL
            }
            else {
                $("#list").html("");
                $("#list").append("<p>Ocurrió un error al ingresar el registro, favor de volver a intentarlo</p>");
                $("#exampleModal").modal("show");
            }
            setTimeout(function () {
                $('#spiner').modal('hide');
            }, 1000);
        }
    });
}


function Guarda() {
    $('#spiner').modal('show');

    var formData = new FormData();

    var file = $("#file").get(0).files;

    formData.append("codigo", $("#codigo").val());
    formData.append("fecha", $("#fecha").val());
    formData.append("ape2", $("#ape2").val());
    formData.append("nombre", $("#nombre").val());
    formData.append("Documento", $("#Documento").val());
    formData.append("Secretaria", $("#Secretaria").val());
    formData.append("Direccion", $("#Direccion").val());

    formData.append("file", file[0]);

    $.ajax(
    {
        type: 'POST',
        url: "AjaxMethod",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.estatus == true || data.estatus == "true") {

                var URL = 'Inicio';

                window.location.href = URL;
            }
            else {
                $("#list").html("");
                $("#list").append("<p>Ocurrió un error al ingresar el registro, favor de volver a intentarlo</p>");
                $("#exampleModal").modal("show");
            }
            setTimeout(function () {
                $('#spiner').modal('hide');
            }, 1000);
        }
    });
}





function GetDocumento(a)
{

    $('#ModalEditar').modal('show');
    $.ajax({
        type: 'POST',

        url: "GetDocumentos",
        dataType: 'json',

        data: {
            id: parseInt(a)
        },
        success: function (data) {
            $("#Editiddoc").val(a); // get current row 1st TD value
            $("#Editcodigo").val(data.codigo); // get current row 1st TD value
            $("#Editfecha").val(data.fechaPublicacion); // get current row 2nd TD
            $("#Editnombre").val(data.nomDoc); // get current row 1st TD value 

            $("#EditDocumento").html("");
            $.ajax({
                type: 'POST',
                url: "GetDocumento",
                dataType: 'json',
                success: function (states) {
                    $("#EditDocumento").append('<option value=""></option>');
                    $.each(states, function (i, state) {
                        $("#EditDocumento").append('<option value="' + state.Value + '">' +
                           state.Text + '</option>');
                    });

                    $("#EditDocumento").val(data.idTipoDoc);
                },
                error: function (ex) {
                    alert('Sin Datos.');
                }
            });


            $("#EditSecretaria").html("");

            $.ajax({
                type: 'POST',
                url: "../Direcciones/GetSecretarias",
                dataType: 'json',
                success: function (states) {
                    $("#EditSecretaria").append('<option value=""></option>');
                    $.each(states, function (i, state) {
                        $("#EditSecretaria").append('<option value="' + state.Value + '">' +
                           state.Text + '</option>');
                    });

                    $("#EditSecretaria").val(data.idSecretaria);
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
                    id: data.idSecretaria
                },
                success: function (list) {
                    $("#EditDireccion").html("");
                    $("#EditDireccion").append('<option value=""></option>');
                    $.each(list, function (i, state) {
                        $("#EditDireccion").append('<option value="' + state.Value + '">' +
                            state.Text + '</option>');
                    });

                    $("#EditDireccion").val(data.idDireccion);
                },
                error: function (ex) {
                    alert(ex.Message);
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






function GetDire2() {
    $.ajax({
        type: 'POST',
        url: "../Direcciones/GetDirecciones",
        dataType: 'json',
        data: {
            id: $("#EditSecretaria").val()
        },
        success: function (data) {
            $("#EditDireccion").html("");
            $("#EditDireccion").append('<option value=""></option>');
            $.each(data, function (i, state) {
                $("#EditDireccion").append('<option value="' + state.Value + '">' +
                    state.Text + '</option>');
            });

        },
        error: function (ex) {
        }
    });
}


