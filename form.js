//Arrelgos
const objeto= [
    {
    'id': 0,
    'edad': 0,
    'tarifa':{
        '1': {
            'hombre': 1303.79, 
            'mujer': 790.38 
        },
        '2':{
            'hombre': 1108.22, 
            'mujer': 671.82 
        },
        '3':{
            'hombre': 839.77, 
            'mujer': 644.84 
        }
    }
},

{
    'id': 1,
    'edad': 1,
    'tarifa':{
        '1': {
            'hombre':  1001.37, 
            'mujer':  559.24 
        },
        '2':{
            'hombre':  851.16, 
            'mujer':  475.35  
        },
        '3':{
            'hombre':  644.98, 
            'mujer':  456.26 
        }
    }
}
]

//Estados
const estados= [
    {
        'nombre': 'Oaxaca',
        'tarifa': 1
    },
    {
        'nombre': 'Puebla',
        'tarifa': 2
    }
]


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
        let edad= document.getElementById("edad").value;
        // console.log(edad)
        
        //Obtener genero
        let genero="";
        let masculino= document.getElementById("masculino");
        let femenino=document.getElementById("femenino");
        masculino.checked ? genero=masculino.value : genero=femenino.value;
        // console.log("Genero: "+ genero);

         //Obtener estado
        let estado= document.getElementById("estado").value;
        // console.log("Estado: "+ estado)
                   
        // Campo numero de familiares
        let polizaFamiliar= document.getElementById("familiar");
        if(polizaFamiliar.checked){
            let numfamiliares=document.getElementById("parentesco").value;
            // console.log("Número de familiares: "+ numfamiliares);
        }

        //Datos: edad, numfamiliares, genero, estado, 
        
        let toñovar= getTarifa(estado,estados);
        let toñovar2=getPrecio(genero,edad,toñovar,objeto)

        console.log(toñovar2)
        })
    })

    //Funcion obtener numero de tarifa segun estado
    const getTarifa = (nombreEstado, arregloEstados) =>{ 
	    let tarifa = arregloEstados.filter(estado => estado.nombre === nombreEstado);
        return tarifa[0]['tarifa'];
    }

    //Funcion obtener precio
    const getPrecio = (genero,edad,taf,objeto)=>{
        let edadArray = objeto.filter(e => e.edad==edad)

        return edadArray[0]["tarifa"][taf][genero];
    }



    