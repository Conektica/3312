
import {objeto} from './db/precios.js';
import {estados} from './db/estados.js';
import {Insured} from './insured.js';
import {Policy} from './policy.js';
import {Ui} from './ui.js';
// import objeto from 'app/js/db/precios.js';

   // document.addEventListener("DOMContentLoaded", () => {
    let polizaFamiliar= document.querySelector("#familiar");
    let polizaIndividual= document.querySelector("#individual");
    let containerInputAsegurado= document.querySelector("#conntainer-input-asegurado");
    let buttonIndividual= document.querySelector("#button-submit-individual");
    let containerFamiliares= document.querySelector("#Cont-familiares");
    let buttonSubmitFamiliar= document.querySelector("#button-submit-familiar");
    const ventana = new Ui(document.querySelector("#container-total"));

    polizaFamiliar.addEventListener("change", () => {
        ventana.renderFamiliar(containerInputAsegurado);
        ventana.hideElement(buttonIndividual);
        ventana.showElement(containerFamiliares);
        ventana.showElement(buttonSubmitFamiliar);
    });

    polizaIndividual.addEventListener("change", () => {
        ventana.hideElement(containerInputAsegurado);
        ventana.showElement(buttonIndividual);
        ventana.hideElement(containerFamiliares);
        ventana.hideElement(buttonSubmitFamiliar);
    });

    document.querySelector("#form-individual").addEventListener('submit', (e) => {
    e.preventDefault();
    let titNombre = document.querySelector("#titu-nombre").value;
    let titApellido = document.querySelector("#titu-apellido").value;
    let titEdad = parseInt(document.querySelector("#titu-edad").value);
    let titSexo = document.querySelector("#titu-sexo").value;
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
    ventana.renderPolicy(poliza.getTotal());
    console.log(poliza.getTotal());
})
// });
