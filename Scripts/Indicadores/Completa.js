
var pathserver = window.location.pathname;


if (pathserver.includes("Indicadores")) {

    pathserver = "/Indicadores";
}
else {
    pathserver = "";
}


function Catalogos()
{
    GetCapGasto();
    GetNivelObjetivo();
    CargaFrecuencia();
    CargaDimension(); 
    CargaSecretarias();
    GetCategorias();
    GetEjes(0); 
    GetMetodoCalc();
    GetSentido();
    CargaTipoIndicador();
    GetProgramaPres(); 
}

function CargaFrecuencia()
{
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

function CargaDimension() {
    $("#iddimensind").html("");
    $.ajax({
        type: 'POST',
        url: "GetDimension",
        dataType: 'json',
        success: function (states) {
            $("#iddimensind").append('<option selected disabled="disabled">Dimensión</option>');
            $.each(states, function (i, state) {
                $("#iddimensind").append('<option value="' + state.Value + '">' +
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
    $("#idtipoind").html("");
    $.ajax({
        type: 'POST',
        url: "GetTipoIndicador",
        dataType: 'json',
        data: {
            dolbe: $("#dropcategoria").val()
        },
        success: function (states)
        {
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

function CargaSecretarias()
{
    $("#Scretaria2").html("");
    $.ajax({
        type: 'POST',
        url: "GetSecretarias",
        dataType: 'json',
        data: {
            idsecretaria: $("#secre").val()
        },
        success: function (states)
        {
            $("#Scretaria2").append('<option selected disabled="disabled">Secretaría</option>');
            $.each(states, function (i, state) {
                $("#Scretaria2").append('<option value="' + state.Value + '">' +
                   state.Text + '</option>');
            });
            if ($("#idarbol").val() > 0)
            {
                $.ajax({
                            type: 'POST',
                            url: pathserver + "/Ficha/GetArbol",
                            dataType: 'json',
                            data: {
                                idarbol: $("#idarbol").val(),
                                idcampo: $("#idcampo").val()
                            },
                            success: function (data)
                            {

                                $("#Scretaria2").val($("#secre").val());
                                //document.getElementById("Scretaria2").disabled = true;

                                $("#idnivelobj").val(data.idnivelobjetivo);
                                document.getElementById("idnivelobj").disabled = true;

                                document.getElementById("idtipoind").disabled = true;
                                $("#idarbolobj").val(data.idarbolobj)
                                if (data.idnivelobjetivo == 1 || data.idnivelobjetivo == 2) {
                                    $("#idtipoind").val(1);
                                }
                                else {
                                    $("#idtipoind").val(2);
                                }   
                                GetDire2(data.iddireccion);
                                $("#ideje").val(data.ideje);
                                GetEjes(data.ideje);
                                GetObjetivo(data.idobjetivo);
                            },
                            error: function (ex) {
                            }
                        });  
            }
        
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}

function GetCategorias()
{ 
    $("#idcategoria").html("");
    $.ajax({
        type: 'POST',
        url: "GetCategoria",
        dataType: 'json',
        success: function (states)
        {
            $("#idcategoria").append('<option selected disabled="disabled">Categoría</option>');
            $.each(states, function (i, state) {
                $("#idcategoria").append('<option value="' + state.Value + '">' +
                   state.Text + '</option>');
            });

        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}
 
function GetDire2(a) {
    $.ajax({
        type: 'POST',
        url: pathserver+"/Ficha/GetDirecciones",
        dataType: 'json',
        data: {
            id: $("#Scretaria2").val()
        },
        success: function (data)
        {
 
            $("#UnidadAdmnEje").html(""); 
            $("#UnidadAdmnEje").append('<option selected value="0">Direcciones</option>');
            $("#idDireccion").html("");
            $("#idDireccion").append('<option selected disabled="disabled">Dirección</option>');
            $.each(data, function (i, state)
            {
                $("#idDireccion").append('<option value="' + state.Value + '">' +  state.Text + '</option>');
                $("#UnidadAdmnEje").append('<option value="' + state.Value + '">' +    state.Text + '</option>');
            }); 
            $("#idDireccion").val(a);
            
        },
        error: function (ex) {
        }
    });
}

function GetProgramaPres() {
    $("#idpp").html("");
    $.ajax({
        type: 'POST',
        url: "GetProgramaPres",
        dataType: 'json',
        success: function (states) {
            $("#idpp").append('<option selected disabled="disabled">Programa presupuestario</option>');
            $.each(states, function (i, state) {
                $("#idpp").append('<option value="' + state.Value + '">' +
                    state.Text + '</option>');
            });

        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}

function GetCapGasto() {
    $("#idcap").html("");
    $.ajax({
        type: 'POST',
        url: "GetCapGasto",
        dataType: 'json',
        success: function (states) {
            $("#idcap").append('<option selected >Capítulo de Gasto</option>');
            $.each(states, function (i, state) {
                $("#idcap").append('<option value="' + state.Value + '">' +
                    state.Text + '</option>');
            });

        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}
function GetEjes(a)
{ 
    $("#Eje").html("");
    $.ajax({
        type: 'POST',
        url: "GetEje",
        dataType: 'json',
        success: function (states) {
            $("#Eje").append('<option selected disabled="disabled">Eje estratégico</option>');
            $.each(states, function (i, state)
            {
                $("#Eje").append('<option value="' + state.Value + '">' + state.Text + '</option>');
            });
            $("#Eje").val(a);
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}
 
function GetObjetivo(a)
{
    $("#idobjetiv").html("");
    $("#descobjetivo").html("");
    
    var eje = "0";
    if ($("#Eje").val() == "" || $("#Eje").val() == null) {
        eje = $("#ideje").val();
    }
    else {
        eje = $("#Eje").val();
    }
    $.ajax({
        type: 'POST',
        url: "GetObjetivos",
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
            $("#idobjetiv").val(a);
            descobj();
        },
        error: function (ex)
        {
            alert('Sin Datos.');
        }
    });
}
 
function GetNivelObjetivo()
{
    //$("#idnivelobj").html("");
    //$.ajax({
    //    type: 'POST',
    //    url: "GetNivelObjetivos",
    //    dataType: 'json', 
    //    success: function (states)
    //    {
    //        $("#idnivelobj").append('<option selected disabled="disabled">Nivel Objetivo</option>');
    //        $.each(states, function (i, state) {
    //            $("#idnivelobj").append('<option value="' + state.Value + '">' +
    //               state.Text + '</option>');
    //        });

    //    },
    //    error: function (ex) {
    //        alert('Sin Datos.');
    //    }
    //});
    $("#idnivelobj").html("");
    $.ajax({
        type: 'POST',
        url: "GetNivelObjetivos",
        dataType: 'json',
        data: {
            dolbe: $("#dropcategoria").val()
        },
        success: function (states) {
           /* $("#idnivelobj").append('<option value="0" selected disabled="disabled">Nivel Objetivo</option>');*/
            $.each(states, function (i, state) {
                $("#idnivelobj").append('<option value="' + state.Value + '">    ' + state.Text + '</option>');
            });
             
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}
 
function GetMetodoCalc() {
     $("#idmetcal").html("");
    $.ajax({
        type: 'POST',
        url: "GetMetodoCalc",
        dataType: 'json',
        success: function (states) {
             $("#idmetcal").append('<option selected disabled="disabled">Metodo Calculo</option>');
            $.each(states, function (i, state) {
                 $("#idmetcal").append('<option value="' + state.Value + '">' +
                   state.Text + '</option>');
            });

        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
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
        $("#lbltipocalculo").html("(variable1 = variable2)");
    }
    else if (lbl == 4) {
        $("#lbltipocalculo").html("(variable1/variable2) * 100");
    }
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

        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}

function descobj()
{
    $("#descobjetivo").html("");
    $("#descobjetivo").html($("#idobjetiv option:selected").text());
}

function Valida(a) {
    var list = "<ul>";

    $("#list").html("");
    var ok = "";
    var Categoria = $("#dropcategoria").val();
    if (Categoria == null) { list = list + "<li>" + "Campo categoría está vacío" + "</li>"; ok = "false"; $('#dropcategoria').css('border-color', '#ff9688'); } else { $('#dropcategoria').css('border-color', '#ced4da'); }

    var Scretaria2 = $("#Scretaria2").val();
    if (Scretaria2 == null) { list = list + "<li>" + "Campo secretaría está vacío" + "</li>"; ok = "false"; $('#Scretaria2').css('border-color', '#ff9688'); } else { $('#Scretaria2').css('border-color', '#ced4da'); }

    var Direccion = $("#idDireccion").val();
    if (Direccion == null) { list = list + "<li>" + "Campo dirección está vacío" + "</li>"; ok = "false"; $('#idDireccion').css('border-color', '#ff9688'); } else { $('#idDireccion').css('border-color', '#ced4da'); }

    var Eje = $("#Eje").val();
    if (Eje == null) { list = list + "<li>" + "Campo eje estratégico está vacío" + "</li>"; ok = "false"; $('#Eje').css('border-color', '#ff9688'); } else { $('#Eje').css('border-color', '#ced4da'); }

    var Objetivo = $("#idobjetiv").val();
    if (Objetivo == null) { list = list + "<li>" + "Campo objetivo estratégico está vacío" + "</li>"; ok = "false"; $('#idobjetiv').css('border-color', '#ff9688'); } else { $('#idobjetiv').css('border-color', '#ced4da'); }

    var progpresu = $("#idpp").val();
    if (progpresu == null) { list = list + "<li>" + "Campo programa presupuestario está vacío" + "</li>"; ok = "false"; $('#idpp').css('border-color', '#ff9688'); } else { $('#idpp').css('border-color', '#ced4da'); }

    //var progpresu = $("#progmpresup").val();
    //if (progpresu.length <= 0) { list = list + "<li>" + "Campo programa presupuestario  está vacío" + "</li>"; ok = "false"; $('#progmpresup').css('border-color', '#ff9688'); } else { $('#progmpresup').css('border-color', '#ced4da'); }

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

    //var unidadmedida = $("#unidadmedida").val();
    //if (unidadmedida.length <= 0) { list = list + "<li>" + "Campo unidad de medida vacío" + "</li>"; ok = "false"; $('#unidadmedida').css('border-color', '#ff9688'); } else { $('#unidadmedida').css('border-color', '#ced4da'); }

    //var metainstitucional = $("#metainstitu").val();
    //if (metainstitucional.length <= 0) { list = list + "<li>" + "Campo meta institicional vacío" + "</li>"; ok = "false"; $('#metainstitu').css('border-color', '#ff9688'); } else { $('#metainstitu').css('border-color', '#ced4da'); }

    var unidadmedidaval = $("#unidadmedidavalor").val();
    if (unidadmedidaval.length <= 0) { list = list + "<li>" + "Campo unidad de medida (meta valor) vacío" + "</li>"; ok = "false"; $('#unidadmedidavalor').css('border-color', '#ff9688'); } else { $('#unidadmedidavalor').css('border-color', '#ced4da'); }

    var metavalor = $("#metavalor").val();
    if (metavalor.length <= 0) { list = list + "<li>" + "Campo meta (valor) vacío" + "</li>"; ok = "false"; $('#metavalor').css('border-color', '#ff9688'); } else { $('#metavalor').css('border-color', '#ced4da'); }

    //var valor = $("#valor").val();
    //if (valor.length <= 0) { list = list + "<li>" + "Campo valor vacío" + "</li>"; ok = "false"; $('#valor').css('border-color', '#ff9688'); } else { $('#valor').css('border-color', '#ced4da'); }

    var anio = $("#anio").val();
    if (anio.length <= 0) { list = list + "<li>" + "Campo año vacío" + "</li>"; ok = "false"; $('#anio').css('border-color', '#ff9688'); } else { $('#anio').css('border-color', '#ced4da'); }

    var sentidoindicador = $("#idsentido").val();
    if (sentidoindicador == null) { list = list + "<li>" + "Campo sentido del indicador vacío" + "</li>"; ok = "false"; $('#idsentido').css('border-color', '#ff9688'); } else { $('#idsentido').css('border-color', '#ced4da'); }

    var verde = $("#verde").val();
    if (verde.length <= 0) { list = list + "<li>" + "Campo verde vacío" + "</li>"; ok = "false"; $('#verde').css('border-color', '#ff9688'); } else { $('#verde').css('border-color', '#ced4da'); }

    var amarillo = $("#amarillo").val();
    if (amarillo.length <= 0) { list = list + "<li>" + "Campo amarillo vacío" + "</li>"; ok = "false"; $('#amarillo').css('border-color', '#ff9688'); } else { $('#amarillo').css('border-color', '#ced4da'); }

    var valorcant = $("#valorcant").val();
    if (valorcant.length <= 0) { list = list + "<li>" + "Campo valor en cantidad vacío" + "</li>"; ok = "false"; $('#valorcant').css('border-color', '#ff9688'); } else { $('#valorcant').css('border-color', '#ced4da'); }

    var rojo = $("#rojo").val();
    if (rojo.length <= 0) { list = list + "<li>" + "Campo rojo vacío" + "</li>"; ok = "false"; $('#rojo').css('border-color', '#ff9688'); } else { $('#rojo').css('border-color', '#ced4da'); }

    var medicionverificacion = $("#mediosverificacion").val();
    if (medicionverificacion.length <= 0) { list = list + "<li>" + "Campo medios de verificación / evidencia está vacío" + "</li>"; ok = "false"; $('#mediosverificacion').css('border-color', '#ff9688'); } else { $('#mediosverificacion').css('border-color', '#ced4da'); }

    var montosolicitado = $("#montosolicitado").val();
    if (montosolicitado.length <= 0) { $("#montosolicitado").val(' ') }

    if ($("#dropcategoria").val() == 2)
    {

        var Supuestos = $("#Supuestos").val();
        if (Supuestos.length <= 0) { list = list + "<li>" + "Campo supuestos está vacío" + "</li>"; ok = "false"; $('#Supuestos').css('border-color', '#ff9688'); } else { $('#Supuestos').css('border-color', '#ced4da'); }
        var UnidadAdmnEje = $("#UnidadAdmnEje").val();
        if (UnidadAdmnEje == null) { list = list + "<li>" + "Campo Unidad Administrativa ejecutora está vacío" + "</li>"; ok = "false"; $('#UnidadAdmnEje').css('border-color', '#ff9688'); } else { $('#UnidadAdmnEje').css('border-color', '#ced4da'); }

    } 

    var Enero = $("#Enero").val().replace(/,/g, "");
    if (Number.isNaN(Enero)) { $("#Enero").val(""); Enero = 0; }
    else if (Enero == "NaN") { $("#Enero").val(""); Enero = 0 }
    else if (Enero == "") { $("#Enero").val(""); Enero = 0 }
    var Febrero = $("#Febrero").val().replace(/,/g, "");
    if (Number.isNaN(Febrero)) { $("#Febrero").val(""); Febrero = 0; }
    else if (Febrero == "NaN") { $("#Febrero").val(""); Febrero = 0; }
    else if (Febrero == "")   { $("#Febrero").val(""); Febrero = 0 }
    var Marzo = $("#Marzo").val().replace(/,/g, "");
    if (Number.isNaN(Marzo)) { $("#Marzo").val(""); Marzo = 0; }
    else if (Marzo == "NaN") { $("#Marzo").val(""); Marzo = 0; }
    else if (Marzo == "") { $("#Marzo").val(""); Marzo = 0 }
    var Abril = $("#Abril").val().replace(/,/g, "");
    if (Number.isNaN(Abril)) { $("#Abril").val(""); Abril = 0; }
    else if (Abril == "NaN") { $("#Abril").val(""); Abril = 0; }
    else if (Abril == "") { $("#Abril").val(""); Abril = 0 }
    var Mayo = $("#Mayo").val().replace(/,/g, "");
    if (Number.isNaN(Mayo)) { $("#Mayo").val(""); Mayo = 0; }
    else if (Mayo == "NaN") { $("#Mayo").val(""); Mayo = 0; }
    else if (Mayo == "") { $("#Mayo").val(""); Mayo = 0 }
    var Junio = $("#Junio").val().replace(/,/g, "");
    if (Number.isNaN(Junio)) { $("#Junio").val(""); Junio = 0; }
    else if (Junio == "NaN") { $("#Junio").val(""); Junio = 0; }
    else if (Junio == ""){ $("#Junio").val(""); Junio = 0 }
    var Julio = $("#Julio").val().replace(/,/g, "");
    if (Number.isNaN(Julio)) { $("#Julio").val(""); Julio = 0; }
    else if (Julio == "NaN") { $("#Julio").val(""); Julio = 0; }
    else if (Julio == ""){ $("#Julio").val(""); Julio = 0 }
    var Agosto = $("#Agosto").val().replace(/,/g, "");
    if (Number.isNaN(Agosto)) { $("#Agosto").val(""); Agosto = 0; }
    else if (Agosto == "NaN") { $("#Agosto").val(""); Agosto = 0; }
    else if (Agosto == ""){ $("#Agosto").val(""); Agosto = 0 }
    var Septiembre = $("#Septiembre").val().replace(/,/g, "");
    if (Number.isNaN(Septiembre)) { $("#Septiembre").val(""); Septiembre = 0; }
    else if (Septiembre == "NaN") { $("#Septiembre").val(""); Septiembre = 0; }
    else if (Septiembre == ""){ $("#Septiembre").val(""); Septiembre = 0 }
    var Octubre = $("#Octubre").val().replace(/,/g, "");
    if (Number.isNaN(Octubre)) { $("#Octubre").val(""); Octubre = 0; }
    else if (Octubre == "NaN") { $("#Octubre").val(""); Octubre = 0; }
    else if (Octubre == ""){ $("#Octubre").val(""); Octubre = 0 }
    var Noviembre = $("#Noviembre").val().replace(/,/g, "");
    if (Number.isNaN(Noviembre)) { $("#Noviembre").val(""); Noviembre = 0; }
    else if (Noviembre == "NaN") { $("#Noviembre").val(""); Noviembre = 0; }
    else if (Noviembre == ""){ $("#Noviembre").val(""); Noviembre = 0 }
    var Diciembre = $("#Diciembre").val().replace(/,/g, "");
    if (Number.isNaN(Diciembre)) { $("#Diciembre").val(""); Diciembre = 0; }
    else if (Diciembre == "NaN") { $("#Diciembre").val(""); Diciembre = 0; }
    else if (Diciembre == ""){ $("#Diciembre").val(""); Diciembre = 0 }

    var total = parseFloat(Enero) + parseFloat(Febrero) + parseFloat(Marzo) + parseFloat(Abril) + parseFloat(Mayo) + parseFloat(Junio) +
        parseFloat(Julio) + parseFloat(Agosto) + parseFloat(Septiembre) + parseFloat(Octubre) + parseFloat(Noviembre) + parseFloat(Diciembre);

    var meta = $("#metavalor").val().replace(/,/g, "");
    var check = $('#porcentaje').is(":checked");
   
    if (check)
    {
        meta = "1";
        total = "1";
    }
    if (MetodoCalc == 4)
    {
        meta = "1";
        total = "1";
    }
    if (meta != total)
    {
        ok = "false"; 
        list = list + "<li style='color:red;'>" + "El valor de meta no coincide con la suma de los meses." + "</li>"; ok = "false";
    }
      
    list = list + "</ul>";
    if (ok == "false")
    {
        $("#list").append(list);
        $("#exampleModal").modal("show");
    }
    else
    {
        if (a == 1)
        {
            var opcion = confirm("¿Estas seguro de guardar la información?");
            if (opcion == true)
            {
                Guarda(1);
            } 
        }
        else
        {
           // Guarda(0);
            Guarda(0);
        }
    }
}

 

function Guarda(a)
{
    $('#spiner').modal('show'); 
    var formData = new FormData();
    formData.append("idestaus", a);
    var check = $('#porcentaje').is(":checked");
    formData.append("porcentaje", check); 
    formData.append("idcap", $("#idcap").val());
    formData.append("valorcant", $("#valorcant").val());
    formData.append("orden", $("#orden").val());
    formData.append("Supuestos", $("#Supuestos").val());
    formData.append("idarbol", $("#idarbol").val());
    formData.append("idcampo", $("#idcampo").val());
    formData.append("idarbolobj", $("#idarbolobj").val());
    formData.append("icomponente", $("#icomponente").val());
    formData.append("UnidadAdmnEje", $("#UnidadAdmnEje").val());
    formData.append("idcategoria", $("#dropcategoria").val());
    formData.append("Categoria", $("#dropcategoria option:selected").text());
    formData.append("idsecretaria", $("#Scretaria2").val());
    formData.append("Secretaria", $("#Scretaria2 option:selected").text());
    formData.append("idDireccion", $("#idDireccion").val());
    formData.append("Direccion", $("#idDireccion option:selected").text());
    formData.append("idobjetiv", $("#idobjetiv").val());
    formData.append("Objetivo", $("#idobjetiv option:selected").text());
    formData.append("Eje", $("#Eje option:selected").text());
    formData.append("progmpresup", "");
    formData.append("nombindi", $("#nombindi").val());
    formData.append("idpp", $("#idpp").val());
    formData.append("descindicador", $("#descindicador").val());
    formData.append("idnivelobj", $("#idnivelobj").val());
    formData.append("NivelObjetivo", $("#idnivelobj option:selected").text());
    formData.append("obj_resnarr", $("#obj_resnarr").val());
    formData.append("idmetcal", $("#idmetcal").val());
    formData.append("TipoCalculo", $("#idmetcal option:selected").text());
    formData.append("variable1", $("#variable1").val());
    formData.append("variable2", $("#variable2").val());
    formData.append("idtipoind", $("#idtipoind").val());
    formData.append("TipoIndicador", $("#idtipoind option:selected").text());
    formData.append("iddimensind", $("#iddimensind").val());
    formData.append("Dimension", $("#iddimensind option:selected").text());
    formData.append("idfrecuencia", $("#idfrecuencia").val());
    formData.append("Frecuencia", $("#idfrecuencia option:selected").text()); 
    formData.append("unidadmedida", $("#unidadmedida").val());
    formData.append("metainstitu", $("#metainstitu").val());
    formData.append("unidadmedidavalor", $("#unidadmedidavalor").val());
    formData.append("metavalor", $("#metavalor").val().replace(/,/g, "").replace("%", ""));
    formData.append("mediosverificacion", $("#mediosverificacion").val());
    formData.append("montosolicitado", $("#montosolicitado").val());
    formData.append("valor", $("#valor").val());
    formData.append("anio", $("#anio").val());

    formData.append("idsentido", $("#idsentido").val()); 
    formData.append("verde", $("#verde").val()); 
    formData.append("amarillo", $("#amarillo").val());
    formData.append("rojo", $("#rojo").val()); 

    if ($("#Enero").val() == "") { $("#Enero").val("0") }
    if ($("#Febrero").val() == "") { $("#Febrero").val("0") }
    if ($("#Marzo").val() == "") { $("#Marzo").val("0") }
    if ($("#Abril").val() == "") { $("#Abril").val("0") }
    if ($("#Mayo").val() == "") { $("#Mayo").val("0") }
    if ($("#Junio").val() == "") { $("#Junio").val("0") }
    if ($("#Julio").val() == "") { $("#Julio").val("0") }
    if ($("#Agosto").val() == "") { $("#Agosto").val("0") }
    if ($("#Septiembre").val() == "") { $("#Septiembre").val("0") }
    if ($("#Octubre").val() == "") { $("#Octubre").val("0") }
    if ($("#Noviembre").val() == "") { $("#Noviembre").val("0") }
    if ($("#Diciembre").val() == "") { $("#Diciembre").val("0") }

    formData.append("Enero", $("#Enero").val().replace(/,/g, "").replace("%", ""));
    formData.append("Febrero", $("#Febrero").val().replace(/,/g, "").replace("%", ""));
    formData.append("Marzo", $("#Marzo").val().replace(/,/g, "").replace("%", ""));
    formData.append("Abril", $("#Abril").val().replace(/,/g, "").replace("%", ""));
    formData.append("Mayo", $("#Mayo").val().replace(/,/g, "").replace("%", ""));
    formData.append("Junio", $("#Junio").val().replace(/,/g, "").replace("%", ""));
    formData.append("Julio", $("#Julio").val().replace(/,/g, "").replace("%", ""));
    formData.append("Agosto", $("#Agosto").val().replace(/,/g, "").replace("%", ""));
    formData.append("Septiembre", $("#Septiembre").val().replace(/,/g, "").replace("%", ""));
    formData.append("Octubre", $("#Octubre").val().replace(/,/g, "").replace("%", ""));
    formData.append("Noviembre", $("#Noviembre").val().replace(/,/g, "").replace("%", ""));
    formData.append("Diciembre", $("#Diciembre").val().replace(/,/g, "").replace("%", ""));

    $.ajax(
    {
        type: 'POST',
        url: pathserver+"/Ficha/CreateCalendario",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.activo == true || data.activo == "true")
            {

                if (data.idarbol != 0)
                {
                    setTimeout(function () { $('#spiner').modal('hide'); }, 500);
                    $("#list").append('<p style="text-align:center;">Se guardo la información correctamente  </p>');
                    $("#exampleModal").modal("show");
                    path = pathserver + "/Arbol/ArbolFicha?idarbol=" + data.CrypArbol + "&idcategoria=" + data.CrypCateg + "";

                    setTimeout(function () { window.location = path; }, 2000);
                }
                else {
                    setTimeout(function () { $('#spiner').modal('hide'); }, 500);
                    $("#list").append('<p style="text-align:center;">Se guardo la información correctamente  </p>');
                    $("#exampleModal").modal("show");

                    path = pathserver + "/Calendario/Lista";

                    setTimeout(function () { window.location = path; }, 2000);

                }
             
            }
            else {
                setTimeout(function ()
                {
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

function GetId(a) {
    $("#idficha").val(a); // get current row 1st TD value

}
function CancelaDelet() {
    $("#idficha").val(""); // get current row 1st TD value

}
function Delete() {
    $('#spiner').modal('show');

    var opcion = true;//confirm("¿Desea borrar el registro?");
    if (opcion == true)
    {
        $("#list").html("");
        $.ajax({
            type: 'POST',

            url: "BorraRegistro",

            dataType: 'json',

            data: {
                id: parseInt($("#idficha").val())
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
                    setTimeout(function ()
                    {
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
 
function Editar(a)
{ 
    path = "/Ficha/Edita?codigo=" + a; 
    window.location =path;
}


function VerPdf(a) {
    path = "/Home/pdf?codigo=" + a;
    window.location = path;
}


function Calendario(a) {
    path = "/Ficha/Calendario?codigo=" + a;
    window.location = path;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////

 