function getInfo(){
   
    // Valores netos
    var poliza="";
    var edad= document.getElementById("edad").value;
    var genero="";
    var estado= document.getElementById("estado").value;
    var parentesco=document.getElementById("parentesco").value;

    // Obtener datos del form
    var polizaFamiliar= document.getElementById("familiar");
    var polizaIndividual= document.getElementById("individual");
    var masculino= document.getElementById("masculino");
    var femenino= document.getElementById("femenino");
    
    // Obtener datos de poliza
    if (polizaFamiliar.checked) {
        poliza=polizaFamiliar.value;
    }
    else if(polizaIndividual.checked){
        poliza=polizaIndividual.value;
    }

    // Obtener datos de genero
    if (masculino.checked){
        genero=masculino.value;
    }
    else if (femenino.checked) {
        genero=femenino.value;        
    }





    console.log(poliza);
    console.log(edad);
    console.log(genero);
    console.log(estado);
    console.log(parentesco);
}

