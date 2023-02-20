var pathserver = window.location.pathname;
 
if (pathserver.includes("Indicadores")) {

    pathserver = "/Indicadores";
}
else {
    pathserver = "";
}

function Reportar(a) {
    path = pathserver + "/PlanMunicipal/ReporteAnace?cf_d4k_f4=" + a;
    window.location = path;
} 

function Nuevo() {
    path = pathserver + "/PlanMunicipal/Indicador";
    window.location = path;
}

function VerPdf(a) {
    path = pathserver + "/Home/pdfpmd?codigo=" + a;
    window.location = path;
}
 
function Avances(a)
{
    $("#tableavances").html("");
    $.ajax({
        type: 'POST',
        url: pathserver + "/PlanMunicipal/GetData",
        dataType: 'json',
        data: {
            idindicador: a
        },
        success: function (list)
        { 
            for (var i = 0; i < list.length; i++)
            {
                var hide = "disabled  title='No se reporta avance'";

                if (list[i].captura == true)
                {
                    hide = "";
                }

                if (list[i].idgrupo==1)
                {
                    hide = "";
                }


                var Upload = '<a data-target="#SubeFile" data-toggle="modal" onclick="SubeFile(\'' + list[i].code + '\' )"  class="btnactivo" title="Subir archivo" style="cursor: pointer;font-size: 16px;"><i class="fa fa-upload"></i></a>&nbsp; ';
                var VerArchivo = '';
                if (list[i].path != null) {
                    VerArchivo = '<a onclick="VerArchivo(\'' + list[i].code + '\' )"  class="btnactivo" title="Ver archivo" style="cursor: pointer;font-size: 16px;"><i class="fa fa-download"></i></a>&nbsp; ';
                }

                $("#nameindicador").html(list[i].indicador);
                $("#lineab").html(list[i].lineabase+"%");
                $("#metaanio").html(list[i].meta);

                var tr = "<tr>";
                tr = tr + "<td>" + list[i].mescurso + "</td><td><input type='text' id='" + list[i].desmes + "' onkeyup='GetId(event)' class='form-control' style='cursor:text;text-align:center;' value='" + list[i].resultado+"'></td><td><span id='variacion" + list[i].desmes + "'>" + list[i].resulvariacion + "</span></td><td>" + Upload + VerArchivo + "</td><td> <textarea class='form-control' id='observ" + list[i].desmes + "' rows='2' maxlength='1000' style='font-size:10px;'>" + list[i].observaciones + "</textarea></td><td  hidden='hidden'><input type='text' id='linea" + list[i].desmes + "' value='" + list[i].lineabase + "'  class='form-control' style='cursor:text;' > </td><td><button type='button' onclick='btnguardar(event)' style='width:100%;' id='" + list[i].desmes + "' class='btn btn-secondary' " + hide + " >Guardar</button></td><td hidden='hidden'><input type='text' id='iddetindic" + list[i].desmes + "' value='" + list[i].iddetindic + "'></td>";
                tr = tr + "</tr>";
                $("#tableavances").append(tr);
              
            } 
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}

function SubeFile(a)
{
    $("#indicadorid").val(a);
}

function SubirFile()
{
    var formData = new FormData();

    var archivo = $("#archivo").get(0).files;
    formData.append("archivo", archivo[0]);
    formData.append("idindicador", $('#indicadorid').val());
    formData.append("remplazo", false);

    $.ajax({
        type: 'POST',
        url: pathserver +'/PlanMunicipal/UploadFile',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data)
        {
            if (data.IdError == "0")
            {
                alert(data.Desc);
            }
            else if (data.IdError == "1")
            {
                alert(data.Desc);
                //var URL = pathserver + "/PlanMunicipal/Inicio";
                //location.reload();
            }
            else if (data.IdError == "2")
            {
                var result = confirm(data.Desc);
                if (result == true)
                {
                    var formData = new FormData();

                    var archivo = $("#archivo").get(0).files;
                    formData.append("archivo", archivo[0]);
                    formData.append("idindicador", $('#indicadorid').val());
                    formData.append("idindicador", $('#indicadorid').val());
                    formData.append("idindicador", $('#indicadorid').val());
                    formData.append("idindicador", $('#indicadorid').val());
                    formData.append("idindicador", $('#indicadorid').val());
                    formData.append("remplazo", true);
                    $.ajax({
                        type: 'POST',
                        url: pathserver + '/PlanMunicipal/UploadFile',
                        data: formData,
                        cache: false,
                        contentType: false,
                        processData: false,
                        success: function (data)
                        {
                            if (data.IdError == "0")
                            {
                                alert(data.Desc);
                            }
                            else if (data.IdError == "1")
                            {
                                alert(data.Desc);
                                //var URL = pathserver + "/PlanMunicipal/Inicio";
                                //location.reload();
                            }
                        }
                    });
                }
            }
        }
    }); 
}

function VerArchivo(a) {

    var idindicador = a;
    

    if (idindicador.length <= 0 || idindicador == "") {

    }
    else
    {
        var URL = pathserver + "/PlanMunicipal/getDocument?Name=" + idindicador;
      
        window.open(URL, "_blank");
    }
}

function evento() {
    $("#SubeFile").modal("hide");
}

function btnguardar(evtobj)
{
    var target = evtobj.target || evtobj.srcElement;

    var formData = new FormData();

    var archivo = $("#archivo").get(0).files;
    formData.append("archivo", archivo[0]);
    formData.append("idindicador", $('#indicadorid').val());
    formData.append("resultado", $("#" + target.id).val());
    formData.append("comentario", $("#observ" + target.id).val());
    formData.append("variacion", $("#variacion" + target.id).html());
    formData.append("remplazo", false); 
    $.ajax({
        type: 'POST',
        url: pathserver + '/PlanMunicipal/UploadFile',
        data: formData,
        cache: false,
        contentType: false,
        processData: false,
        success: function (data) {
            if (data.IdError == "0") {
                alert(data.Desc);
            }
            else if (data.IdError == "1") {
                alert(data.Desc);
                //var URL = pathserver + "/PlanMunicipal/Inicio";
                //location.reload();
            }
            else if (data.IdError == "2") {
                var result = confirm(data.Desc);
                if (result == true) {
                    var formData = new FormData();

                    var archivo = $("#archivo").get(0).files;
                    formData.append("archivo", archivo[0]);
                    formData.append("idindicador", $('#indicadorid').val());
                    formData.append("resultado", $("#" + target.id).val());
                    formData.append("comentario", $("#observ" + target.id).val());
                    formData.append("variacion", $("#variacion" + target.id).html());
                    formData.append("remplazo", true);
                    $.ajax({
                        type: 'POST',
                        url: pathserver + '/PlanMunicipal/UploadFile',
                        data: formData,
                        cache: false,
                        contentType: false,
                        processData: false,
                        success: function (data) {
                            if (data.IdError == "0") {
                                alert(data.Desc);
                            }
                            else if (data.IdError == "1") {
                                alert(data.Desc);
                                //var URL = pathserver + "/PlanMunicipal/Inicio";
                                //location.reload();
                            }
                        }
                    });
                }
            }
        }
    });





    $.ajax({
        type: 'POST',
        url: pathserver + "/PlanMunicipal/GuardaAvance",
        dataType: 'json',
        data: {
            id: $("#iddetindic" + target.id).val(),
            resultado: $("#" + target.id).val(),
            comentario: $("#observ" + target.id).val(),
            variacion: $("#variacion" + target.id).html()
            },
        success: function (data)
            { 
            if (data == "1")
            {
                path = pathserver + "/PlanMunicipal/Inicio";
                setTimeout(function () { window.location = path; }, 1500);
            }
            else
            {
                alert("error");
            }
        },
        error: function (ex) {
            alert('Sin Datos.');
        }
    });
}

function GetId(evtobj)
{ 
    var target = evtobj.target || evtobj.srcElement;
    var mes = target.id

    var lineabase = $("#linea" + mes).val(); 
    var resultado = $("#"+mes).val();
    var total = "0";

    if (Number.isNaN(lineabase) || lineabase == "NaN" || lineabase == "" || lineabase == "0" || lineabase == "Infinity") {
        lineabase = parseFloat("0");
    }

    if (Number.isNaN(resultado) || resultado == "NaN" || resultado == "" || resultado == "0" || resultado == "Infinity") {
        resultado = parseFloat("0");
    }
    if (lineabase > 0 && resultado > 0)
    { 
        total = (resultado - lineabase) / lineabase * 100;
        var mySubString = total.toString().indexOf(".") + 1;
        $("#variacion" + mes).html(total.toString().substring(0, mySubString) + total.toString().substring(mySubString, mySubString + 2)+"%");
    }
    else {
        $("#variacion" + mes).html("");
    } 
}