

document.addEventListener("change",
function obtenEdad(){
    var edad= document.getElementById("edad").value;
    console.log(edad)
});




function getInfo(){
   
    // Valores netos
    var genero="";
    var estado= document.getElementById("estado").value;
    var parentesco=document.getElementById("containerParentesco").value;

    // Obtener datos del form
    var masculino= document.getElementById("masculino");
    var femenino= document.getElementById("femenino");
    

    // Obtener datos de genero
    masculino.checked ? genero=masculino.value :genero=femenino.value;
       
    console.log(poliza);
    console.log(edad);
    console.log(genero);
    console.log(estado);
    
}

    //Mostrar formulario de parentesco 
document.addEventListener("change", function genParentesco(){

    var poliza="";
    var polizaFamiliar= document.getElementById("familiar");
    var polizaIndividual= document.getElementById("individual");
    polizaFamiliar.checked ? poliza=polizaFamiliar.value : poliza=polizaIndividual.value;

    if (poliza==="familiar") {
        var containerParentesco= document.getElementById('containerParentesco');
        containerParentesco.innerHTML=`<p><strong>¿Para cuántos familiares es la poliza?</strong></p>
        <label for="" class="familia">
            <select name="parent" id="parentesco" class="custom-select my-1 mr-sm-2">
                <option value="">Selecciona el numero de personas...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
            </select>
        </label>`
    }
    else if(poliza==="individual"){
        var containerParentesco= document.getElementById('containerParentesco');
        containerParentesco.innerHTML="";
    }
    
})
