    //Event listeners
    document.addEventListener("DOMContentLoaded", formFamiliar);
    document.addEventListener("DOMContentLoaded", obtenInfo);
    
    //Arreglo tarifas ala azul
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
    
    //Funcion mostrar formulario de parentesco 
    function formFamiliar(){
    var poliza="";
    var polizaFamiliar= document.getElementById("familiar");
    var polizaIndividual= document.getElementById("individual");
           
        //Funciones para mostrar o quitar el campo numero de familiares
        polizaFamiliar.addEventListener("change", mostrarCampoFam)
        function mostrarCampoFam(){
    
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

                    parentesco.addEventListener("change",function(){
                        dato1=parseInt(parentesco.value);
                    })
                    return dato1;
            }

            parentesco.addEventListener("change",function(){
            const infoAdicional=document.getElementById("containerCamposExtras")
            getPrecioFam(dato1,infoAdicional);
            // console.log(typeof  (infoAdicional))

            })
             
            function getPrecioFam(dato,div){

                div.innerHTML="";
                while (dato>0) 
                {
                    div.innerHTML+=`<div class="form-group">
                        <label for="">
                            <p><strong>¿Qué edad tiene tu familiar?</strong></p>
                            <select name="age" id="edad" class="custom-select my-1 mr-sm-2">
                                <option value="NaN">Selecciona tu edad...</option>
                                <option value="0">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                                <option value="32">32</option>
                                <option value="33">33</option>
                                <option value="34">34</option>
                                <option value="35">35</option>
                                <option value="36">36</option>
                                <option value="37">37</option>
                                <option value="38">38</option>
                                <option value="39">39</option>
                                <option value="40">40</option>
                                <option value="41">41</option>
                                <option value="42">42</option>
                                <option value="43">43</option>
                                <option value="44">44</option>
                                <option value="45">45</option>
                                <option value="46">46</option>
                                <option value="47">47</option>
                                <option value="48">48</option>
                                <option value="49">49</option>
                                <option value="50">50</option>
                                <option value="51">51</option>
                                <option value="52">52</option>
                                <option value="53">53</option>
                                <option value="54">54</option>
                                <option value="55">55</option>
                                <option value="56">56</option>
                                <option value="57">57</option>
                                <option value="58">58</option>
                                <option value="59">59</option>
                                <option value="60">60</option>
                                <option value="61">61</option>
                                <option value="62">62</option>
                                <option value="63">63</option>
                                <option value="64">64</option>
                                <option value="65">65</option>
                            </select>
                        </label>
                    </div><br>
            
                    <!-- Campo de "genero" -->
                    <div class="form-group">
                        <p><strong>¿Cuál es su genero?</strong></p>
                        <div class="form-check form-check-inline">
                            <label class="orm-check-label">Masculino
                                <input class="form-check-input" type="radio"  name="gender" id="masculino" value="hombre">
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <label class="orm-check-label">Femenino
                                <input class="form-check-input" type="radio" name="gender" id="femenino" value="mujer">
                             </label>
                        </div>
                    </div><br>`
                  console.log(dato)
                    dato--;
                    }
                }         
        }//Funciones para mostrar o quitar el campo numero de familiares

        //Quitar campo numero de familiares
        polizaIndividual.addEventListener("change", quitarCampoFam)
        function quitarCampoFam(){
                polizaFamiliar.checked ? poliza=polizaFamiliar.value : poliza=polizaIndividual.value;
                if(poliza==="individual"){
                    var containerParentesco= document.getElementById('containerParentesco');
                    containerParentesco.innerHTML="";
            }
        }//Quitar campo numero de familiares
        
    }//Termina funcion mostrar formulario de parentesco 
    
    //Funcion obtener info cuando oprimen boton
    function obtenInfo(event){
    
    var polizaIndividual= document.getElementById("individual");
    var enviar=document.getElementById("enviar");
        enviar.addEventListener("click", function(e){

            e.preventDefault()
        
        //Obtener edad
        let edad= document.getElementById("edad").value;
        // console.log(typeof(edad))
        
        //Obtener genero
        let genero="";
        let masculino= document.getElementById("masculino");
        let femenino=document.getElementById("femenino");
        masculino.checked ? genero=masculino.value : genero=femenino.value;
        // console.log("Genero: "+ genero);

         //Obtener estado
        let estado= document.getElementById("estado").value;
        // console.log("Estado: "+ estado)

        //Datos: edad, numfamiliares, genero, estado, 
        

        //Precio si es individual
        if (polizaIndividual.checked) {
            let toñovar= getTarifa(estado,estados);
            let toñovar2=getPrecio(genero,edad,toñovar,objeto)
            console.log(toñovar2)
        }
        /* else if (polizaFamiliar.checked)
        }    */   
        })
    }

    //Funcion obtener numero de tarifa segun estado
    const getTarifa = (nombreEstado, arregloEstados) =>{ 
	    let tarifa = arregloEstados.filter(estado => estado.nombre === nombreEstado);
        return tarifa[0]['tarifa'];
    }

    //Funcion obtener precio
    const getPrecio = (genero,edad,taf,objeto)=>{
        let edadArray = objeto.filter(e =>  e.edad==edad)
        return edadArray[0]["tarifa"][taf][genero];
    
    }
    