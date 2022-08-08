function validar () { 

var nuser=document.getElementById("usuario").value

if (nuser=="") {

    $("#usuario").after(" Campo obligatorio ");
}
}