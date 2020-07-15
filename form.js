function getInfo(){
   
    // Valores netos
    let poliza="";
    let edad= document.getElementById("edad").value;
    let genero="";
    let estado= document.getElementById("estado").value;
    let parentesco=document.getElementById("parentesco").value;

    // Obtener datos del form
    let polizaFamiliar= document.getElementById("familiar");
    let polizaIndividual= document.getElementById("individual");
    let masculino= document.getElementById("masculino");
    let femenino= document.getElementById("femenino");
    
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

