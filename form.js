
    //Mostrar formulario de parentesco 
    document.addEventListener("DOMContentLoaded", function(){

            var poliza="";
            var polizaFamiliar= document.getElementById("familiar");
            var polizaIndividual= document.getElementById("individual");
           
    
            polizaFamiliar.addEventListener("change", function(){
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
            })

            polizaIndividual.addEventListener("change", function(){
                polizaFamiliar.checked ? poliza=polizaFamiliar.value : poliza=polizaIndividual.value;
                if(poliza==="individual"){
                    var containerParentesco= document.getElementById('containerParentesco');
                    containerParentesco.innerHTML="";
            }
        })
    })

    //Obtener datos al enviar
    document.addEventListener("DOMContentLoaded", function(event){

    var enviar=document.getElementById("enviar");
        enviar.addEventListener("click", function(e){

            e.preventDefault()
        
        //Obtener edad
        var edad= document.getElementById("edad").value;
        console.log("Edad: "+ edad)
        
        //Obtener genero
        var genero;
        var masculino= document.getElementById("masculino");
        var femenino=document.getElementById("femenino");
        masculino.checked ? genero=masculino.value : genero=femenino.value;
        console.log("Genero: "+ genero);

         //Obtener estado
        var estado= document.getElementById("estado").value;
        console.log("Estado: "+ estado)
                   
        // Campo numero de familiares
        var polizaFamiliar= document.getElementById("familiar");
        if(polizaFamiliar.checked){
            var numfamiliares=document.getElementById("parentesco").value;
            console.log("Número de familiares: "+ numfamiliares);
        }


        //Datos: edad, numFamiliares, genero, estado
    })
})