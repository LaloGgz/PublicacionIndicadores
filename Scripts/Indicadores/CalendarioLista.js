
var pathserver = window.location.pathname;


if (pathserver.includes("Indicadores")) {

    pathserver = "/Indicadores"; 
}
else {
    pathserver = "";  
}
function openNav(a) {

    document.getElementById("myNav").style.width = "100%";
    drawChart(a);
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

function EnviarSolicitud(a) {
    $("#code").val(a);
    $('#Email').modal('show');
}
function Cerrar() {
    $('#Comentario').modal('hide');
}

function VerComentario(a) {
    $("#GetData").html("");
    $.ajax({
        type: 'POST',
        url: pathserver + "/Calendario/CargaComenatrio",
        dataType: 'json',
        data: {
            code: a
        },
        success: function (states) {
            $('#Comentario').modal('show');
            $("#GetData").html(states);
            DemoDatatable();
        },
        error: function (ex) {
            $('#Comentario').modal('hide');
            alert('Sin Datos.');
        }
    });
}
function openNav(a) {

    document.getElementById("myNav").style.width = "100%";
    drawChart(a);
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
function EnviarSolicitud(a) {
    $("#code").val(a);
    $('#Email').modal('show');
}
function Cerrar() {
    $('#Comentario').modal('hide');
}
function VerComentario(a) {
    $("#GetData").html("");
    $.ajax({
        type: 'POST',
        url: pathserver + "/Calendario/CargaComenatrio",
        dataType: 'json',
        data: {
            code: a
        },
        success: function (states) {
            $('#Comentario').modal('show');
            $("#GetData").html(states);
            DemoDatatable();
        },
        error: function (ex) {
            $('#Comentario').modal('hide');
            alert('Sin Datos.');
        }
    });
}
function SendEmail() {
    var contenido = $("#mensaje").val();
    if (contenido.length <= 0 || contenido == "") {

    }
    else {

        $.ajax({
            type: 'POST',
            url: pathserver + "/Calendario/Send",
            dataType: 'json',
            data: {
                code: $("#code").val(),
                txt: $("#mensaje").val()
            },
            success: function (states) {
                $('#Email').modal('hide');
                $("#code").val("");
                $("#mensaje").val("");
                DemoDatatable();
            },
            error: function (ex) {
                $('#Email').modal('hide');
                alert('Sin Datos.');
            }
        });
    }

}
function GetIdEnero(evtobj) {
    var Porcentaje = $("#Porcentaje").val();
    var target = evtobj.target || evtobj.srcElement;
    var mes = target.id.substring(2, 4);
    var MetodoDeCalculo = $("#MetodoDeCalculo").val();
    if (Porcentaje == "true" || Porcentaje == true || Porcentaje == "True") {
        return false;
    }
    if (MetodoDeCalculo == 4) {


    }
    else {
        var Env1r = parseFloat($("#id" + mes + "v1r").val().replace(/,/g, ""));
        if (Number.isNaN(Env1r) || Env1r == "NaN" || Env1r == "") {
            Env1r = "0";
            $("#id" + mes + "v1r").val(Env1r);

        }
        else {
            $("#id" + mes + "v1r").val(Env1r);
        }

        var EnAv1r = $("#id" + mes + "v1r").val().replace(/,/g, "");
        if (Number.isNaN(EnAv1r) || EnAv1r == "NaN" || EnAv1r == "") {
            EnAv1r = "0";
            $("#id" + mes + "Av1r").val(EnAv1r);
        }
        else {
            $("#id" + mes + "Av1r").val(parseFloat(EnAv1r.replace(/,/g, "")).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));

        }

        var Env2p = parseFloat($("#id" + mes + "v2p").val().replace(/,/g, ""));
        var total = (Env1r / Env2p) * 100;
        if (Number.isNaN(total) || total == "NaN" || total == "") {
            total = "0";
            $("#id" + mes + "mes").val(total + "%");
        }
        else {
            $("#id" + mes + "mes").val(total.toFixed(1) + "%");
        }


        var EnAv1r = $("#id" + mes + "Av1r").val();
        if (Number.isNaN(EnAv1r) || EnAv1r == "NaN" || EnAv1r == "") { }
        else {
            EnAv1r = parseFloat($("#id" + mes + "Av1r").val().replace(/,/g, ""));
        }
        var EnAv2p = $("#id" + mes + "Av2p").val();
        if (Number.isNaN(EnAv2p) || EnAv2p == "NaN" || EnAv2p == "") { }
        else {
            EnAv2p = parseFloat($("#id" + mes + "Av2p").val().replace(/,/g, ""));
        }
        var totalmesrep = (EnAv1r / EnAv2p) * 100;
        if (Number.isNaN(totalmesrep)) {
            totalmesrep = "";
        }
        else if (totalanio == "NaN") {

            totalmesrep = "";
        }

        $("#id" + mes + "Rmes").val(totalmesrep.toFixed(1) + "%");
        var meta = $("#Meta").val().replace(/,/g, "");
        meta = parseFloat(meta);
        var totalanio = (Env1r / meta) * 100;

        if (Number.isNaN(totalanio)) {
            totalanio = "";
        }
        else if (totalanio == "NaN") {

            totalanio = "";
        }
        $("#id" + mes + "anio").val(totalanio.toFixed(1) + "%");
        var valor = Env1r;
        if (Number.isNaN(valor) || valor == "0" || valor == "NaN") {
            valor = "0";
            $("#id" + mes + "v1r").val(valor);
        }
        else {
            $("#id" + mes + "v1r").val(valor.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
        }
    }
}
function SendEmail() {
    var contenido = $("#mensaje").val();
    if (contenido.length <= 0 || contenido == "") {

    }
    else {

        $.ajax({
            type: 'POST',
            url: pathserver + "/Calendario/Send",
            dataType: 'json',
            data: {
                code: $("#code").val(),
                txt: $("#mensaje").val()
            },
            success: function (states) {
                $('#Email').modal('hide');
                $("#code").val("");
                $("#mensaje").val("");
                DemoDatatable();
            },
            error: function (ex) {
                $('#Email').modal('hide');
                alert('Sin Datos.');
            }
        });
    }

}


function popup(a, b)
{  
    $.ajax({
        type: 'POST',
        url: pathserver + "/Calendario/GetDetalleCalendario",
        dataType: 'json',
        data:
            {
                idcalendario: a
            },
        success: function (data) {
            $.each(data, function (i, dat)
            {
                var textbox = parseFloat(dat.Meta);
                $("#variacion").val(dat.Variacion); 
                $("#indicador").val(dat.Indicador);
                $("#MetodoDeCalculo").val(dat.MetodoCalculo);
                
                $("#dir").val(dat.Direccion);
                var v1r = dat.descmes + "v1r";
                var v2p = dat.descmes + "v2p";
                var Av1r = dat.descmes + "Av1r";
                var Av2p = dat.descmes + "Av2p";
                var mes = dat.descmes + "mes";
                var Rmes = dat.descmes + "Rmes";
                var anio = dat.descmes + "anio";
                var hid = dat.descmes + "hid";
                var nombremes = "";
                $("#Porcentaje").val(dat.Porcentaje);
                const monthNames = ["En", "Fb", "Mz", "Ab", "My", "Jn", "Jl", "Ag", "Sp", "Oc", "Nv", "Dc"];
                const d = new Date(); 
                $(".realizadomes").hide();
                
                var ultimorealizado = "";
                if (dat.Porcentaje == true)
                { 
                    $("#Meta").val(dat.Meta+ "%"); 
                    if (dat.idgrupo != 1)
                    {
                        if (dat.capturado == true)
                        {
                            $("#" + monthNames[d.getMonth()] + "").show();
                            if (monthNames[d.getMonth()] == monthNames[i])
                            {
                                $(".id" + monthNames[d.getMonth()] + "v1r").prop("readonly", false);
                                $(".id" + monthNames[d.getMonth()] + "v1r").css({ "cursor": "text" });
                                $(".id" + monthNames[d.getMonth()] + "v2p").prop("readonly", false);
                                $(".id" + monthNames[d.getMonth()] + "v2p").css({ "cursor": "text" });
                            }
                            else {
                                $(".id" + monthNames[i] + "v1r").prop("readonly", true);
                                $(".id" + monthNames[i] + "v1r").css({ "cursor": "text" });
                                $(".id" + monthNames[i] + "v2p").prop("readonly", true);
                                $(".id" + monthNames[i] + "v2p").css({ "cursor": "text" });
                            }
                            ultimorealizado = dat.Av1r;
                        }
                        else {
                            $(".id" + monthNames[i] + "v1r").prop("readonly", true);
                            $(".id" + monthNames[i] + "v1r").css({ "cursor": "text" });
                            $(".id" + monthNames[i] + "v2p").prop("readonly", true);
                            $(".id" + monthNames[i] + "v2p").css({ "cursor": "text" });
                        }                         
                    }
                    else
                    {
                        $("#" + monthNames[d.getMonth()] + "").show();
                        $(".realizadomes").show();
                        $(".id" + monthNames[i] + "v1r").prop("readonly", false);
                        $(".id" + monthNames[i] + "v1r").css({ "cursor": "text" });
                        $(".id" + monthNames[i] + "v2p").prop("readonly", false);
                        $(".id" + monthNames[i] + "v2p").css({ "cursor": "text" }); 
                    }
                     
                    $(".id" + v1r).removeClass(v1r).addClass("Porc" + v1r);
                    $(".id" + v2p).removeClass(v2p).addClass("Porc" + v2p);
                    $(".id" + Av1r).removeClass(Av1r).addClass("Porc" + Av1r);
                    $(".id" + Av2p).removeClass(Av2p).addClass("Porc" + Av2p);
                    $(".id" + mes).removeClass(mes).addClass("Porc" + mes);
                    $(".id" + Rmes).removeClass(Rmes).addClass("Porc" + Rmes);
                    $(".id" + anio).removeClass(anio).addClass("Porc" + anio);

                    v1r ="Porc" + v1r;
                    v2p = "Porc" + v2p;
                    Av1r = "Porc" + Av1r;
                    Av2p = "Porc" + Av2p;
                    mes = "Porc" + mes;
                    Rmes = "Porc" + Rmes;
                    anio = "Porc" + anio; 
                }
                else
                { 
                    if (dat.idgrupo != 1)
                    {   
                        if (dat.capturado == true)
                        {
                            $("#" + monthNames[d.getMonth()] + "").show();
                            if (monthNames[d.getMonth()] == monthNames[i])
                            {
                                $(".id" + monthNames[d.getMonth()] + "v1r").prop("readonly", false);
                                $(".id" + monthNames[d.getMonth()] + "v1r").css({ "cursor": "text" });
                                $(".id" + monthNames[i] + "v2p").prop("readonly", false);
                                $(".id" + monthNames[i] + "v2p").css({ "cursor": "text" });
                            }
                            else
                            { 
                                $(".id" + monthNames[i] + "v1r").prop("readonly", true);
                                $(".id" + monthNames[i] + "v1r").css({ "cursor": "no-drop" });
                                $(".id" + monthNames[i] + "v2p").prop("readonly", true);
                                $(".id" + monthNames[i] + "v2p").css({ "cursor": "no-drop" });
                            } 
                        }
                        else
                         { 
                            $(".id" + monthNames[i] + "v1r").prop("readonly", true);
                            $(".id" + monthNames[i] + "v1r").css({ "cursor": "no-drop" });
                            $(".id" + monthNames[i] + "v2p").prop("readonly", true);
                            $(".id" + monthNames[i] + "v2p").css({ "cursor": "no-drop" }); 
                        } 
                    }
                    else
                    {
                        $("#" + monthNames[d.getMonth()] + "").show();
                        $(".realizadomes").show();
                        $(".id" + monthNames[i] + "v1r").prop("readonly", false);
                        $(".id" + monthNames[i] + "v1r").css({ "cursor": "text" });
                        $(".id" + monthNames[i] + "v2p").prop("readonly", true);
                        $(".id" + monthNames[i] + "v2p").css({ "cursor": "text" });
                    } 
                    $("#Meta").val(textbox.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    
                    //else { 
                        $(".id" + v1r).removeClass("Porc" + v1r).addClass(v1r);
                        $(".id" + v2p).removeClass("Porc" + v2p).addClass(v2p);
                        $(".id" + Av1r).removeClass("Porc" + Av1r).addClass(Av1r);
                        $(".id" + Av2p).removeClass("Porc" + Av2p).addClass(Av2p);
                        $(".id" + mes).removeClass("Porc" + mes).addClass(mes);
                        $(".id" + Rmes).removeClass("Porc" + Rmes).addClass(Rmes);
                        $(".id" + anio).removeClass("Porc" + anio).addClass(anio);
                    //}


                    if (dat.MetodoCalculo == 4)
                    {
                        $(".realizadomes").show();
                        $(".id" + monthNames[i] + "v1r").prop("readonly", false);
                        $(".id" + monthNames[i] + "v1r").css({ "cursor": "text" });
                        $(".id" + monthNames[i] + "v2p").prop("readonly", false);
                        $(".id" + monthNames[i] + "v2p").css({ "cursor": "text" });

                        $(".id" + v1r).removeClass(v1r).addClass("Porc" + v1r);
                        $(".id" + v2p).removeClass(v2p).addClass("Porc" + v2p);
                        $(".id" + Av1r).removeClass(Av1r).addClass("Porc" + Av1r);
                        $(".id" + Av2p).removeClass(Av2p).addClass("Porc" + Av2p);
                        $(".id" + mes).removeClass(mes).addClass("Porc" + mes);
                        $(".id" + Rmes).removeClass(Rmes).addClass("Porc" + Rmes);
                        $(".id" + anio).removeClass(anio).addClass("Porc" + anio); 
                    }
                    v1r = "id" + v1r;
                    v2p = "id" + v2p;
                    Av1r = "id" + Av1r;
                    Av2p = "id" + Av2p;
                    mes = "id" + mes;
                    Rmes = "id" + Rmes;
                    anio = "id" + anio;
                }

                var calv1r = "";
                var calv2p = "";
                var calav1r = "";
                var calav2p = "";

                if (dat.v1r == "" || dat.v1r == null || dat.v1r == "null")
                { 
                    $("." + v1r).val("0");
                    calv1r = "0";
                }
                else {
                    $("." + v1r).val(parseFloat(dat.v1r.replace(/,/g, "")).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    calv1r =  dat.v1r.replace(/,/g, "");
                }

                if (dat.Av1r == "" || dat.Av1r == null || dat.Av1r == "null")
                {
                    $("." + Av1r).val(dat.Av1r);
                    calav1r = dat.Av1r.replace(/,/g, "");
                }
                else {
                    $("." + Av1r).val(parseFloat(dat.Av1r.replace(/,/g, "")).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    calav1r = dat.Av1r.replace(/,/g, "");
                }

                if (dat.v2p == "" || dat.v2p == null || dat.v2p == "null") {
                    $("." + v2p).val(dat.v2p);
                    calv2p = dat.v2p.replace(/,/g, "");
                }
                else {
                    $("." + v2p).val(parseFloat(dat.v2p.replace(/,/g, "")).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")); 
                    calv2p = dat.v2p.replace(/,/g, "");
                }

                if (dat.Av2p == "" || dat.Av2p == null || dat.Av2p == "null")
                {
                    $("." + Av2p).val(dat.Av2p);
                    calav2p = dat.Av2p.replace(/,/g, "");
                }
                else
                {
                    $("." + Av2p).val(parseFloat(dat.Av2p.replace(/,/g, "")).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
                    calav2p = dat.Av2p.replace(/,/g, "");
                }
                 
                if (dat.Avance == "" || dat.Avance == null || dat.Avance == "null")
                {
                    if (calv1r == "0" && calv2p == "0") {
                        $("." + mes).val("0%");
                    }
                    else {
                        var total = parseFloat(calv1r / calv2p) * 100;
                        $("." + mes).val(total.toFixed(1) + "%");
                    }
                    //$("." + mes).val(dat.Avance);
                }
                else
                {
                    if (calv1r == "0" && calv2p == "0")
                    {
                        $("." + mes).val("0%");
                    }
                    else
                    {
                        var total = "";
                        if (dat.MetodoCalculo == 2)
                        { 
                            total = (parseFloat(calv1r - calv2p)/calv2p)*100;
                        }
                        else {
                            total = parseFloat(calv1r / calv2p) * 100;
                        }
                        $("." + mes).val(total.toFixed(2) + "%");
                    }
                    //$("." + mes).val(parseFloat(dat.Avance.replace(/,/g, "")).toString() + "%"); 
                }



                $("#span" + monthNames[i]).addClass("btn btn-secondary");
                var totalMesRep = "0"; 
                if (dat.AvanceMesRep == "" || dat.AvanceMesRep == null || dat.AvanceMesRep == "null")
                {

                    if (calav1r == "0" && calav2p == "0") { 
                        $("#span" + monthNames[i]).css("background-color", "#6c757d");
                        $("#span" + monthNames[i]).css("color", "white");
                        $("#span" + monthNames[i]).css("font-size", "8px");
                        $("#span" + monthNames[i]).html("No se programa avance");
                        $("." + Rmes).val("0.0%");
                    }
                    else
                    {
                        if (dat.MetodoCalculo == 2) {
                            totalMesRep = (parseFloat(calav1r - calav2p) / calav2p) * 100;
                        }
                        else {
                            totalMesRep = parseFloat(calav1r / calav2p) * 100;
                            if (dat.capturado == false) { 
                                $("#span" + monthNames[i]).html("No se programa avance");
                                $("#span" + monthNames[i]).css("background-color", "#6c757d");
                                $("#span" + monthNames[i]).css("color", "white");
                                $("#span" + monthNames[i]).css("font-size", "8px");
                            }
                            else {
                                if (parseFloat(totalMesRep) >= 80) {
                                    $("#span" + monthNames[i]).css("color", "black");
                                    $("#span" + monthNames[i]).css("background-color", "#77dd77");
                                    $("#span" + monthNames[i]).html("Aceptable");
                                    $("#span" + monthNames[i]).css("font-size", "13px");
                                }
                                else if (parseFloat(totalMesRep) > 50 && parseFloat(totalMesRep) < 80) {
                                    $("#span" + monthNames[i]).css("background-color", "#fdfd96");
                                    $("#span" + monthNames[i]).css("color", "black");
                                    $("#span" + monthNames[i]).html("En progreso");
                                    $("#span" + monthNames[i]).css("font-size", "12px");
                                }
                                else if (parseFloat(totalMesRep) > 0 && parseFloat(totalMesRep) <= 50) {
                                    $("#span" + monthNames[i]).css("color", "black");
                                    $("#span" + monthNames[i]).css("background-color", "#ff6961");
                                    $("#span" + monthNames[i]).html("En riesgo");
                                    $("#span" + monthNames[i]).css("font-size", "12px");
                                }
                                else {
                                    $("#span" + monthNames[i]).removeClass("btn btn-secondary");
                                    $("#span" + monthNames[i]).css("color", "white");
                                    $("#span" + monthNames[i]).css("background-color", "white");
                                }
                            }
                        }
                        $("." + Rmes).val(totalMesRep.toFixed(2) + "%");
                    } 
                }
                else
                {
                    if (calav1r == "0" && calav2p == "0")
                    {
                        $("." + Rmes).val("0.0%"); 
                        $("#span" + monthNames[i]).css("color", "white");
                        $("#span" + monthNames[i]).css("font-size", "8px");
                        $("#span" + monthNames[i]).css("background-color", "#6c757d");
                        $("#span" + monthNames[i]).html("No se programa avance");
                    }
                    else
                    {
                        if (dat.MetodoCalculo == 2)
                        {
                            totalMesRep = (parseFloat(calav1r - calav2p) / calav2p) * 100;
                        }
                        else
                        {
                            totalMesRep = parseFloat(calav1r / calav2p) * 100;
                            if (dat.capturado == false) { 
                                $("#span" + monthNames[i]).html("No se programa avance");
                                $("#span" + monthNames[i]).css("background-color", "#6c757d");
                                $("#span" + monthNames[i]).css("font-size", "8px"); 
                                $("#span" + monthNames[i]).css("color", "white"); 
                            }
                            else {
                                if (parseFloat(totalMesRep) >= 80) { 
                                    $("#span" + monthNames[i]).css("color", "black");
                                    $("#span" + monthNames[i]).css("background-color", "#77dd77");
                                    $("#span" + monthNames[i]).html("Aceptable");
                                    $("#span" + monthNames[i]).css("font-size", "13px");
                                }
                                else if (parseFloat(totalMesRep) > 50 && parseFloat(totalMesRep) < 80) { 
                                    $("#span" + monthNames[i]).css("color", "black");
                                    $("#span" + monthNames[i]).css("background-color", "#fdfd96");
                                    $("#span" + monthNames[i]).html("En progreso");
                                    $("#span" + monthNames[i]).css("font-size", "12px");
                                }
                                else if (parseFloat(totalMesRep) <= 50) { 
                                    $("#span" + monthNames[i]).css("color", "black");
                                    $("#span" + monthNames[i]).css("background-color", "#ff6961");
                                    $("#span" + monthNames[i]).html("En riesgo");
                                    $("#span" + monthNames[i]).css("font-size", "12px");
                                }
                                else {
                                    $("#span" + monthNames[i]).removeClass("btn btn-secondary");
                                    $("#span" + monthNames[i]).css("color", "white");
                                    $("#span" + monthNames[i]).css("background-color", "white");
                                }
                            }
                        } 
                        $("." + Rmes).val(totalMesRep.toFixed(2) + "%"); 
                    }
                }

                var totalanio = ""; 
                if (dat.Avanceanio == "" || dat.Avanceanio == null || dat.Avanceanio == "null")
                { 
                    if (dat.Porcentaje == true)
                    { 
                        totalanio = parseFloat(totalMesRep * 100) / dat.Meta ;
                        $("." + anio).val(totalanio.toFixed(2) + "%");
                    }
                    else
                    { 
                        totalanio = parseFloat(calav1r / dat.Meta) * 100;
                        $("." + anio).val(totalanio.toFixed(2) + "%");
                    } 
                }
                else
                {
                    if (dat.MetodoCalculo == 2)
                    {     totalanio = (totalMesRep / dat.Meta) * 100;
                        if (dat.capturado == false)
                        { 
                            $("#span" + monthNames[i]).html("No se programa avance");
                            $("#span" + monthNames[i]).css("background-color", "#6c757d");
                            $("#span" + monthNames[i]).css("color", "white");
                            $("#span" + monthNames[i]).css("font-size", "8.5px");
                        }
                        else {
                       

                            if (parseFloat(totalanio) >= 80)
                            { 
                                $("#span" + monthNames[i]).css("color", "black");
                                $("#span" + monthNames[i]).css("background-color", "#77dd77");
                                $("#span" + monthNames[i]).html("Aceptable");
                                $("#span" + monthNames[i]).css("font-size", "13px");

                            }
                            else if (parseFloat(totalanio) > 50 && parseFloat(totalMesRep) < 80) { 
                                $("#span" + monthNames[i]).css("color", "black");
                                $("#span" + monthNames[i]).css("background-color", "#fdfd96");
                                $("#span" + monthNames[i]).html("En progreso");
                                $("#span" + monthNames[i]).css("font-size", "12px");

                            }
                            else if (parseFloat(totalMesRep) <= 50) { 
                                $("#span" + monthNames[i]).css("color", "black");
                                $("#span" + monthNames[i]).css("background-color", "#ff6961");
                                $("#span" + monthNames[i]).html("En riesgo");
                                $("#span" + monthNames[i]).css("font-size", "12px");

                            }
                            else {
                                $("#span" + monthNames[i]).removeClass("btn btn-secondary");
                                $("#span" + monthNames[i]).css("color", "white");
                                $("#span" + monthNames[i]).css("background-color", "white");
                            }
                        }
                        $("." + anio).val(totalanio.toFixed(2) + "%");
                    }
                    else
                    {
                        if (dat.Porcentaje == true) {
                            totalanio = parseFloat(totalMesRep * 100) / dat.Meta;
                            $("." + anio).val(totalanio.toFixed(2) + "%");
                        }
                        else {
                            totalanio = parseFloat(calav1r / dat.Meta) * 100; 
                            $("." + anio).val(totalanio.toFixed(2) + "%");
                        }
                    }
                }

                $("#" + hid).val(dat.iddetcalen);
                $("#aniohide").val(dat.anio);
            });
        },
        error: function (ex) {
            alert(ex.message);
        }
    });
    $('#myModal').modal('show');
}

function carga()
{
    $("#idsecretaria").html("");
    $.ajax({
        type: 'POST',
        url: pathserver + "/Ficha/GetSecretarias",
        dataType: 'json',
        data: {
            idsecretaria: $("#idsecretaria2").val()
        },
        success: function (states) {
            $("#idsecretaria").append('<option  value="0" selected disabled="disabled">Secretaría</option>');
            $.each(states, function (i, state) {
                $("#idsecretaria").append('<option value="' + state.Value + '">' +
                   state.Text + '</option>');
            });

            $("#idsecretaria").val($("#idsecretaria2").val());
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });

    //$.ajax({
    //    type: 'POST',
    //    url: pathserver + "/Direcciones/GetDirecciones",
    //    dataType: 'json',
    //    data: {
    //        id: $("#idsecretaria2").val()
    //    },
    //    success: function (data) {
    //        $("#iddireccion").append('<option value="0" selected disabled="disabled">Dirección</option>');
    //        $.each(data, function (i, state) {
    //            $("#iddireccion").append('<option value="' + state.Value + '">    ' + state.Text + '</option>');
    //        });

    //        $("#iddireccion").val($("#iddireccion2").val());
    //    },
    //    error: function (ex) {
    //    }
    //});

    $("#Eje").html("");
    $.ajax({
        type: 'POST',
        url: pathserver + "/Ficha/GetEje",
        dataType: 'json',
        success: function (states) {
            $("#Eje").append('<option selected disabled="disabled">Eje estratégico</option>');
            $.each(states, function (i, state) {
                $("#Eje").append('<option value="' + state.Value + '">    ' + state.Text + '</option>');
            });

            $("#Eje").val($("#Eje2").val());
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });

    $("#idobjetiv").html("");
    $("#descobjetivo").html("");
    $.ajax({
        type: 'POST',
        url: pathserver + "/Ficha/GetObjetivos",
        dataType: 'json',
        data: {
            id: $("#Eje2").val()
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
}
function Editar(a) {
    path = pathserver + "/Calendario/Editar?codigo=" + a;
    window.location = path;
}
function VerPdf(a) {
    path = pathserver + "/Home/pdf?codigo=" + a;
    window.location = path;
}
function Vista(a) {
    path = pathserver + "/Ficha/Vista?codigo=" + a;
    window.location = path;
}
function Ficha(a) {
    path = pathserver + "/Ficha/Editar?codigo=" + a;
    window.location = path;
}
function VerPlnatilla(a) {
    path = pathserver + "/Calendario/EditaPlantilla?codigo=" + a;
    window.location = path;
}
function VerPlantilla(a) {
    path = pathserver + "/Calendario/PlantillaPorcentaje?codigo=" + a;
    window.location = path;
}

function EditArbol(a, b) {
    $.ajax({
        type: 'POST',
        url: pathserver + "/Home/EncriptArbol",
        dataType: 'json',
        data: {
            idcategoria: b,
            idarbol: a,
        },
        success: function (data) {
            path = pathserver + "/Arbol/EditarArbol?idarbol=" + data.Var2 + "&idcategoria=" + data.Var1 + "";
            window.location = path;
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}

function Arbol(a, b)
{ 
    $.ajax({
        type: 'POST',
        url: pathserver + "/Home/EncriptArbol",
        dataType: 'json',
        data: {
            idcategoria: b,
            idarbol: a,
        },
        success: function (data) {
            path = pathserver + "/Arbol/ArbolFicha?idarbol=" + data.Var2 + "&idcategoria=" + data.Var1 + "";
            window.location = path;
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });   
}

function Nuevo(a)
{ 
    var id = a;
    if (id == 2)
    { 
        path = pathserver + "/Arbol/Problemas?idcategoria=" + id;
        window.location = path;
    }
    else
    {
        $.ajax({
            type: 'POST',
            url: pathserver + "/Arbol/Encript",
            dataType: 'json',
            data: {
                idcategoria: id,
            },
            success: function (data) {
                path = pathserver + "/Ficha/Completa?idcategoria=" + data.Var1;
                window.location = path;
            },
            error: function (ex) {
                alert('Sin Datos.');
            }
        }); 
    }
}

function descobj() {
    $("#descobjetivo").html("");
    $("#descobjetivo").html($("#idobjetiv option:selected").text());
}

function CargaCategoria()
{
    $.ajax({
        type: 'POST',
        url: pathserver + "/Ficha/GetCategoria",
        dataType: 'json',
        success: function (states) {
            $("#idcategoria").append('<option  value="0" selected disabled="disabled">Categoría</option>');
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


//function GetProgramaPres() {
//    $.ajax({
//        type: 'POST',
//        url: pathserver + "/Ficha/GetProgramaPres",
//        dataType: 'json',
//        success: function (states) {
//            $("#idcategoria").append('<option  value="0" selected disabled="disabled">Programa</option>');
//            $.each(states, function (i, state) {
//                $("#idcategoria").append('<option value="' + state.Value + '">' +
//                    state.Text + '</option>');
//            });

//        },
//        error: function (ex) {
//            alert('Sin Datos.');
//        }
//    });
//}

function CargaSecretarias(a)
{
    $("#idsecretaria").html("");
    $("#loadsecretaria").html("");
    $.ajax({
        type: 'POST',
        url: pathserver + "/Ficha/GetSecretarias",
        dataType: 'json',
        data: {
            idsecretaria: $("#secre").val()
        },
        success: function (states)
        {
            $("#idsecretaria").append('<option selected disabled="disabled">Secretaría</option>');
            if (a == 1)
            {
                $("#loadsecretaria").append('<option value="0" selected >Todas las secretarías</option>');
            }
      
            $.each(states, function (i, state)
            {
                $("#idsecretaria").append('<option value="' + state.Value + '">' +state.Text + '</option>');
                $("#loadsecretaria").append('<option value="' + state.Value + '">' +state.Text + '</option>');
            });

            if (a != 1)
            {
                $("#idsecretaria").val($("#secre").val());
                $("#loadsecretaria").val($("#secre").val());
            }
      
            //GetDireccion2();  
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}
 

function GetDireccion2()
{
    $.ajax({
        type: 'POST',
        url: pathserver + "/Calendario/GetDirecciones",
        dataType: 'json',
        data: {
            id: $("#loadsecretaria").val()
        },
        success: function (data) {
            $("#dropdireccion").html("");
            $("#dropdireccion").append('<option selected value="0">Direcciones</option>');
            $.each(data, function (i, state) {
                $("#dropdireccion").append('<option value="' + state.Value + '">' +
                    state.Text + '</option>');
            });

        },
        error: function (ex) {
        }
    });
}
function GetEjes() {
    $("#Eje").html("");
    $.ajax({
        type: 'POST',
        url: pathserver + "/Ficha/GetEje",
        dataType: 'json',
        success: function (states) {
            $("#Eje").append('<option selected disabled="disabled">Eje estratégico</option>');
            $.each(states, function (i, state) {
                $("#Eje").append('<option value="' + state.Value + '">' +
                   state.Text + '</option>');
            });

        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}
function GetObjetivo() {
    $("#idobjetiv").html("");
    $("#descobjetivo").html("");
    $.ajax({
        type: 'POST',
        url: pathserver + "/Ficha/GetObjetivos",
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


function Valida(a) {
    $(".msj").html("");
    var list = "<ul>";

    $("#list").html("");
    var ok = "";


    var idsecretaria = $("#idsecretaria").val();
    if (idsecretaria == null) { list = list + "<li>" + "Campo idsecretaria está vacío" + "</li>"; ok = "false"; $("#idsecretaria").css('border-color', '#ff9688'); } else { $("#idsecretaria").css('border-color', '#ced4da'); }
    var iddireccion = $("#iddireccion").val();
    if (iddireccion == null) { list = list + "<li>" + "Campo iddireccion estratégico está vacío" + "</li>"; ok = "false"; $("#iddireccion").css('border-color', '#ff9688'); } else { $("#iddireccion").css('border-color', '#ced4da'); }

    var Objetivo = $("#idobjetiv").val();
    if (Objetivo == null) { list = list + "<li>" + "Campo objetivo estratégico está vacío" + "</li>"; ok = "false"; $("#idobjetiv").css('border-color', '#ff9688'); } else { $("#idobjetiv").css('border-color', '#ced4da'); }

    var Eje = $("#Eje").val();
    if (Eje == null) { list = list + "<li>" + "Campo eje estratégico está vacío" + "</li>"; ok = "false"; $("#Eje").css('border-color', '#ff9688'); } else { $("#Eje").css('border-color', '#ced4da'); }

    var actividad = $("#actividad").val();
    if (actividad.length <= 0) { list = list + "<li>" + "Campo actividad está vacío" + "</li>"; ok = "false"; $("#actividad").css('border-color', '#ff9688'); } else { $("#actividad").css('border-color', '#ced4da'); }

    var programapresu = $("#programapresu").val();
    if (programapresu.length <= 0) { list = list + "<li>" + "Campo programa presupuestario  está vacío" + "</li>"; ok = "false"; $("#programapresu").css('border-color', '#ff9688'); } else { $("#programapresu").css('border-color', '#ced4da'); }

    var unidadmedida = $("#unidadmedida").val();
    if (unidadmedida.length <= 0) { list = list + "<li>" + "Campo unidad de medida está vacío" + "</li>"; ok = "false"; $("#unidadmedida").css('border-color', '#ff9688'); } else { $("#unidadmedida").css('border-color', '#ced4da'); }

    var metainstitucinal = $("#metainstitucinal").val();
    if (metainstitucinal.length <= 0) { list = list + "<li>" + "Campo meta institucinal está vacío" + "</li>"; ok = "false"; $("#metainstitucinal").css('border-color', '#ff9688'); } else { $("#metainstitucinal").css('border-color', '#ced4da'); }

    var unidadmedidameta = $("#unidadmedidameta").val();
    if (unidadmedidameta.length <= 0) { list = list + "<li>" + "Campo unidad de medida (meta)  está vacío" + "</li>"; ok = "false"; $("#unidadmedidameta").css('border-color', '#ff9688'); } else { $("#unidadmedidameta").css('border-color', '#ced4da'); }

    var meta = $("#meta").val();
    if (meta.length <= 0) { list = list + "<li>" + "Campo meta está vacío" + "</li>"; ok = "false"; $("#meta").css('border-color', '#ff9688'); } else { $("#meta").css('border-color', '#ced4da'); }

    var medioverificacion = $("#medioverificacion").val();
    if (medioverificacion.length <= 0) { list = list + "<li>" + "Campo medio de verificacion está vacío" + "</li>"; ok = "false"; $("#medioverificacion").css('border-color', '#ff9688'); } else { $("#medioverificacion").css('border-color', '#ced4da'); }

    var montosolicitado = $("#montosolicitado").val();
    if (montosolicitado.length <= 0) { list = list + "<li>" + "Campo montos olicitado está vacío" + "</li>"; ok = "false"; $("#montosolicitado").css('border-color', '#ff9688'); } else { $("#montosolicitado").css('border-color', '#ced4da'); }


    list = list + "</ul>";

    var Enero = $("#Enero").val().replace(/,/g, "");
    if (Number.isNaN(Enero)) { $("#Enero").val(""); Enero = 0; } else if (total == "NaN") { $("#Enero").val(""); Enero = 0 }
    var Febrero = $("#Febrero").val().replace(/,/g, "");
    if (Number.isNaN(Febrero)) { $("#Febrero").val(""); Febrero = 0; } else if (total == "NaN") { $("#Febrero").val(""); Febrero = 0; }
    var Marzo = $("#Marzo").val().replace(/,/g, "");
    if (Number.isNaN(Marzo)) { $("#Marzo").val(""); Marzo = 0; } else if (total == "NaN") { $("#Marzo").val(""); Marzo = 0; }
    var Abril = $("#Abril").val().replace(/,/g, "");
    if (Number.isNaN(Abril)) { $("#Abril").val(""); Abril = 0; } else if (total == "NaN") { $("#Abril").val(""); Abril = 0; }
    var Mayo = $("#Mayo").val().replace(/,/g, "");
    if (Number.isNaN(Mayo)) { $("#Mayo").val(""); Mayo = 0; } else if (total == "NaN") { $("#Mayo").val(""); Mayo = 0; }
    var Junio = $("#Junio").val().replace(/,/g, "");
    if (Number.isNaN(Junio)) { $("#Junio").val(""); Junio = 0; } else if (total == "NaN") { $("#Junio").val(""); Junio = 0; }
    var Julio = $("#Julio").val().replace(/,/g, "");
    if (Number.isNaN(Julio)) { $("#Julio").val(""); Julio = 0; } else if (total == "NaN") { $("#Julio").val(""); Julio = 0; }
    var Agosto = $("#Agosto").val().replace(/,/g, "");
    if (Number.isNaN(Agosto)) { $("#Agosto").val(""); Agosto = 0; } else if (total == "NaN") { $("#Agosto").val(""); Agosto = 0; }
    var Septiembre = $("#Septiembre").val().replace(/,/g, "");
    if (Number.isNaN(Septiembre)) { $("#Septiembre").val(""); Septiembre = 0; } else if (total == "NaN") { $("#Septiembre").val(""); Septiembre = 0; }
    var Octubre = $("#Octubre").val().replace(/,/g, "");
    if (Number.isNaN(Octubre)) { $("#Octubre").val(""); Octubre = 0; } else if (total == "NaN") { $("#Octubre").val(""); Octubre = 0; }
    var Noviembre = $("#Noviembre").val().replace(/,/g, "");
    if (Number.isNaN(Noviembre)) { $("#Noviembre").val(""); Noviembre = 0; } else if (total == "NaN") { $("#Noviembre").val(""); Noviembre = 0; }
    var Diciembre = $("#Diciembre").val().replace(/,/g, "");
    if (Number.isNaN(Diciembre)) { $("#Diciembre").val(""); Diciembre = 0; } else if (total == "NaN") { $("#Diciembre").val(""); Diciembre = 0; }
    var total = parseFloat(Enero) + parseFloat(Febrero) + parseFloat(Marzo) + parseFloat(Abril) + parseFloat(Mayo) + parseFloat(Junio) +
    parseFloat(Julio) + parseFloat(Agosto) + parseFloat(Septiembre) + parseFloat(Octubre) + parseFloat(Noviembre) + parseFloat(Diciembre);
 

    var meta = $("#meta").val().replace(/,/g, "");
    var check = $('#porcentaje').is(":checked");
     
    if (check)
    {
        meta = "1";
        total = "1";
    } 
    if (meta != total) {
        ok = "false2";
    }


    if (ok == "false") {
        $(".msj").html("Hay campos pendientes por llenar.");

    }

    else if (ok == "false2") {
        $(".msj").html("");
        var list = "<ul>";

        $("#list").html("");
        var ok = "false";
        list = list + "</ul>";
        $(".msj").html("El valor de meta no coincide con la suma de los meses.");
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

function Guarda(a) {
    $('#spiner').modal('show');
    var formData = new FormData();



    formData.append("idestaus", a);
    var check = $('#porcentaje').is(":checked");
    formData.append("porcentaje", check);
    formData.append("idcategoria", $("#idcategoria").val());
    formData.append("iddireccion", $("#iddireccion").val());
    formData.append("idsecretaria", $("#idsecretaria").val());
    formData.append("actividad", $("#actividad").val());
    formData.append("idobjetiv", $("#idobjetiv").val());
    formData.append("progmpresup", $("#programapresu").val());

    formData.append("unidadmedida", $("#unidadmedida").val());
    formData.append("metainstitu", $("#metainstitucinal").val());
    formData.append("unidadmedidavalor", $("#unidadmedidameta").val());
    formData.append("metavalor", $("#meta").val().replace(/,/g, "").replace("%", ""));

    formData.append("montosolicitado", $("#montosolicitado").val());
    formData.append("medioverificacion", $("#medioverificacion").val());


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
                $('#formmodal').modal('hide');
                $("#btncerrar").click();
                path = pathserver + "/Calendario/Lista";
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


function Valida2(a) {
    $(".msj").html("");
    var list = "<ul>";

    $("#list").html("");
    var ok = "";
    var idsecretaria = $("#idsecretaria").val();
    if (idsecretaria == null) { list = list + "<li>" + "Campo idsecretaria está vacío" + "</li>"; ok = "false"; $("#idsecretaria").css('border-color', '#ff9688'); } else { $("#idsecretaria").css('border-color', '#ced4da'); }
    var iddireccion = $("#iddireccion").val();
    if (iddireccion == null) { list = list + "<li>" + "Campo iddireccion estratégico está vacío" + "</li>"; ok = "false"; $("#iddireccion").css('border-color', '#ff9688'); } else { $("#iddireccion").css('border-color', '#ced4da'); }


    var Objetivo = $("#idobjetiv").val();
    if (Objetivo == null) { list = list + "<li>" + "Campo objetivo estratégico está vacío" + "</li>"; ok = "false"; $("#idobjetiv").css('border-color', '#ff9688'); } else { $("#idobjetiv").css('border-color', '#ced4da'); }

    var Eje = $("#Eje").val();
    if (Eje == null) { list = list + "<li>" + "Campo eje estratégico está vacío" + "</li>"; ok = "false"; $("#Eje").css('border-color', '#ff9688'); } else { $("#Eje").css('border-color', '#ced4da'); }

    var actividad = $("#actividad").val();
    if (actividad.length <= 0) { list = list + "<li>" + "Campo actividad está vacío" + "</li>"; ok = "false"; $("#actividad").css('border-color', '#ff9688'); } else { $("#actividad").css('border-color', '#ced4da'); }

    var programapresu = $("#programapresu").val();
    if (programapresu.length <= 0) { list = list + "<li>" + "Campo programa presupuestario  está vacío" + "</li>"; ok = "false"; $("#programapresu").css('border-color', '#ff9688'); } else { $("#programapresu").css('border-color', '#ced4da'); }

    var unidadmedida = $("#unidadmedida").val();
    if (unidadmedida.length <= 0) { list = list + "<li>" + "Campo unidad de medida está vacío" + "</li>"; ok = "false"; $("#unidadmedida").css('border-color', '#ff9688'); } else { $("#unidadmedida").css('border-color', '#ced4da'); }

    var metainstitucinal = $("#metainstitucinal").val();
    if (metainstitucinal.length <= 0) { list = list + "<li>" + "Campo meta institucinal está vacío" + "</li>"; ok = "false"; $("#metainstitucinal").css('border-color', '#ff9688'); } else { $("#metainstitucinal").css('border-color', '#ced4da'); }

    var unidadmedidameta = $("#unidadmedidameta").val();
    if (unidadmedidameta.length <= 0) { list = list + "<li>" + "Campo unidad de medida (meta)  está vacío" + "</li>"; ok = "false"; $("#unidadmedidameta").css('border-color', '#ff9688'); } else { $("#unidadmedidameta").css('border-color', '#ced4da'); }

    var meta = $("#meta").val();
    if (meta.length <= 0) { list = list + "<li>" + "Campo meta está vacío" + "</li>"; ok = "false"; $("#meta").css('border-color', '#ff9688'); } else { $("#meta").css('border-color', '#ced4da'); }

    var medioverificacion = $("#medioverificacion").val();
    if (medioverificacion.length <= 0) { list = list + "<li>" + "Campo medio de verificacion está vacío" + "</li>"; ok = "false"; $("#medioverificacion").css('border-color', '#ff9688'); } else { $("#medioverificacion").css('border-color', '#ced4da'); }

    var montosolicitado = $("#montosolicitado").val();
    if (montosolicitado.length <= 0) { list = list + "<li>" + "Campo montos olicitado está vacío" + "</li>"; ok = "false"; $("#montosolicitado").css('border-color', '#ff9688'); } else { $("#montosolicitado").css('border-color', '#ced4da'); }


    list = list + "</ul>";
    if (ok == "false") {
        //$("#list").append(list);
        //$("#exampleModal").modal("show");
        $(".msj").html("Hay campos pendientes por llenar.");

    }
    else {
        if (a == 1) {
            var opcion = confirm("¿Estas seguro de enviar la información?");
            if (opcion == true) {
                Update(1);
            }
            else {

            }
        }
        else {
            Update(0);
        }
    }
}
function Update(a) {
    $('#spiner').modal('show');
    var formData = new FormData();

    formData.append("idestaus", a);
    formData.append("iddireccion", $("#iddireccion").val());
    formData.append("idsecretaria", $("#idsecretaria").val());
    formData.append("idcalendario", $("#idcalendario").val());
    formData.append("actividad", $("#actividad").val());
    formData.append("idobjetiv", $("#idobjetiv").val());
    formData.append("progmpresup", $("#programapresu").val());

    formData.append("unidadmedida", $("#unidadmedida").val());
    formData.append("metainstitu", $("#metainstitucinal").val());
    formData.append("unidadmedidavalor", $("#unidadmedidameta").val());
    formData.append("metavalor", $("#meta").val().replace(/,/g, ""));

    formData.append("montosolicitado", $("#montosolicitado").val());
    formData.append("medioverificacion", $("#medioverificacion").val());


    formData.append("Enero", $("#Enero").val().replace(/,/g, ""));
    formData.append("Febrero", $("#Febrero").val().replace(/,/g, ""));
    formData.append("Marzo", $("#Marzo").val().replace(/,/g, ""));
    formData.append("Abril", $("#Abril").val().replace(/,/g, ""));
    formData.append("Mayo", $("#Mayo").val().replace(/,/g, ""));
    formData.append("Junio", $("#Junio").val().replace(/,/g, ""));
    formData.append("Julio", $("#Julio").val().replace(/,/g, ""));
    formData.append("Agosto", $("#Agosto").val().replace(/,/g, ""));
    formData.append("Septiembre", $("#Septiembre").val().replace(/,/g, ""));
    formData.append("Octubre", $("#Octubre").val().replace(/,/g, ""));
    formData.append("Noviembre", $("#Noviembre").val().replace(/,/g, ""));
    formData.append("Diciembre", $("#Diciembre").val().replace(/,/g, ""));

    $.ajax(
    {
        type: 'POST',
        url: "UpdateCalendario",
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.activo == true || data.activo == "true") {
                setTimeout(function () { $('#spiner').modal('hide'); }, 500);
                $("#list").append('<p style="text-align:center;">Se guardo la información correctamente </p>');
                $("#exampleModal").modal("show");
                $('#formmodal').modal('hide');
                $("#btncerrar").click();


                path = pathserver + "/Calendario/Lista";

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


function CancelaDelet() {
    $("#idcalendario").val("");
}
function GetId(a) {
    $("#idcalendario").val(a);  

}
function Delete() {
    $('#spiner').modal('show');

    var opcion = true;
    if (opcion == true) {
        $("#list").html("");
        $.ajax({
            type: 'POST',

            url: "BorraRegistro",

            dataType: 'json',

            data: {
                id: parseInt($("#idcalendario").val())
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

function VerPdf(a) {
    path = pathserver + "/Home/pdf?codigo=" + a;
    window.location = path;
}


function VerDetalle(a)
{
    const d = new Date();
    let year = d.getFullYear();
    $("#tablebody").html("");
    $.ajax({
        type: 'POST',
        url: pathserver + "/Calendario/Detalle",
        dataType: 'json',
        data: {
            idcalendario: a
        },
        success: function (data)
        { 
            $("#table").modal("show");
            $("#tablebody").append(data);
            $(".year").html(year);
        },
        error: function (ex) {
        }
    });
}