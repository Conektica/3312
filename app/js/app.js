
import {objeto} from './db/precios.js';
import {estados} from './db/estados.js';
import {Insured} from './insured.js';
import {Policy} from './policy.js';
import {Ui} from './ui.js';
// import objeto from 'app/js/db/precios.js';

   // document.addEventListener("DOMContentLoaded", () => {
    let polizaFamiliar= document.querySelector("#familiar");
    let polizaIndividual= document.querySelector("#individual");
    let containerInputAsegurado= document.querySelector("#container-input-asegurado");
    let buttonIndividual= document.querySelector("#button-submit-individual");
    let containerFamiliares= document.querySelector("#Cont-familiares");
    let buttonSubmitFamiliar= document.querySelector("#button-submit-familiar");
    const ventana = new Ui(document.querySelector("#container-total"));

    polizaFamiliar.addEventListener("change", (evt) => {
        ventana.renderFamiliar(containerInputAsegurado);
        ventana.hideElement(buttonIndividual);
        ventana.showElement(containerFamiliares);
        ventana.showElement(buttonSubmitFamiliar);
        let titEdad = parseInt(document.querySelector("#titu-edad").value);
        let titSexo = document.querySelector("#titu-sexo").value;
        ventana.addInsured(containerFamiliares, titEdad, titSexo );
        // evt.stopPropagation();
        let buttonAddInsured = document.querySelector("#button-add-insured");
        buttonAddInsured.addEventListener('submit', (e) => {
            e.preventDefault();        
            console.log("si sirve");
        })
    });

    polizaIndividual.addEventListener("change", () => {
        ventana.hideElement(containerInputAsegurado);
        ventana.showElement(buttonIndividual);
        ventana.hideElement(containerFamiliares);
        ventana.hideElement(buttonSubmitFamiliar);
    });

    document.querySelector("#form-individual").addEventListener('submit', (e) => {
    e.preventDefault();
    // ventana.addInsured(containerFamiliares, titEdad, titSexo );
    let titNombre = document.querySelector("#titu-nombre").value;
    let titApellido = document.querySelector("#titu-apellido").value;
    let titEdad = parseInt(document.querySelector("#titu-edad").value);
    let titSexo = document.querySelector("#titu-sexo").value;
    // let titEmail = document.querySelector("#titu-email").value;
    let polizaEstado = document.querySelector("#poliza-estado").value;
    // console.log(titNombre);
    // console.log(typeof titNombre);
    // console.log(titApellido);
    // console.log(typeof titApellido);
    // console.log(titEdad);
    // console.log(typeof titEdad);
    // console.log(titSexo);
    // console.log(typeof titSexo);
    // console.log(polizaEstado);
    // console.log(typeof polizaEstado);
    // console.log(objeto);
    let asegurados = [];
    const poliza = new Policy(asegurados,polizaEstado)
    let uno = new Insured(titEdad,titSexo,polizaEstado);
    uno.getRate(estados);
    uno.generateRate(objeto);
    poliza.addInsured(uno);
    // console.log(objeto);
    const ventana = new Ui(document.querySelector("#container-total"));
    let containerFamiliares= document.querySelector("#Cont-familiares");
    ventana.addInsured(containerFamiliares, titEdad, titSexo );
    ventana.showElement(containerFamiliares);
    ventana.renderPolicy(poliza.getTotal())
    let buttonSendLead = document.querySelector("#button-send-lead");
    buttonSendLead.innerHTML = `<a href="https://onerisk.com.mx/solicitud-care/?firstname=${titNombre}&lastname=${titApellido}&mensaje=2&selecciona_un_seguro=5&state=${polizaEstado}&sexo=${titSexo}&mensaje1=Quiero%20solicitar%20una%20poliza">
    <button type="button" class="btn btn-lg btn-block btn-primary" id="button-send-lead">Solicitar</button>
    </a> `
    console.log(titNombre);
    console.log(poliza.getTotal());
    console.log(titNombre);
    let buttonDesahabilitar = document.querySelector("#button-deshabilitar");
    buttonDesahabilitar.setAttribute("disabled", "disabled");
    let contTitNombre = document.querySelector("#titu-nombre");
    contTitNombre.setAttribute("disabled", "disabled");
    let contTitApellido = document.querySelector("#titu-apellido");
    contTitApellido.setAttribute("disabled", "disabled");
    let contTitEdad = document.querySelector("#titu-edad");
    contTitEdad.setAttribute("disabled", "disabled");
    let contTitSexo = document.querySelector("#titu-sexo");
    contTitSexo.setAttribute("disabled", "disabled");
    let contPolizaEstado = document.querySelector("#poliza-estado");
    contPolizaEstado.setAttribute("disabled", "disabled");
    
    // titApellido.setAttribute("disabled", "disabled");
    // titEdad.setAttribute("disabled", "disabled");
    // titSexo.setAttribute("disabled", "disabled");
    // polizaEstado.setAttribute("disabled", "disabled");
})  
// });
