class Ui {
    constructor(containerTotal) {
        this.containerTotal = containerTotal;
    }

    hideElement(element){
        element.classList.add("d-none");
    }

    showElement(element){
        element.classList.remove("d-none");
    }

    addInsured(containerAddInsurenced, itemAge, itemGenre) {
        containerAddInsurenced.innerHTML += `
        <div class="bg-light p-3">
        <div class="form-row">
            <div class="col-md-4 mb-3">
                <label for="">Edad</label>
                <input class="form-control" type="text" placeholder="${itemAge}" disabled ></input>
            </div>
            <div class="col-md-4 mb-3">
                <label for="">Sexo</label>
                <input  class="form-control" type="text" placeholder="" disabled value="${itemGenre}"></input>
            </div>
            <div class="col-md-2 mb-3 ml-auto d-none">
                <label for="">Eliminar</label>
                <button class="btn btn-squared-default btn-danger"><span>-</span></button>
            </div>
        </div>
        </div>
        `
    }

    deleteInsured() {

    }
    
    renderPolicy(total){
    this.containerTotal.innerHTML = `
    <div class="card text-center">
        <div class="card-header">Precio</div>
        <div class="card-body">
            <h1 class="card-title pricing-card-title">$${total} <small class="text-muted"> / mes</small></h1>
                <ul class="list-unstyled mt-3 mb-4">
                    <li>Suma Asegurada de 1 millón de pesos</li>
                    <li>Deducible de $1,500</li>
                    <li>Deducible de $3,000 Fuera de Red Médica</li>
                    <li>Coaseguro del 50% Fuera de la Red Médica</li>
                    <li>Help center access</li>
                </ul>
                <div id="button-send-lead"></div>
        </div>
    </div>`;
    }

    renderFamiliar(containerInsureds){
        containerInsureds.innerHTML = `
        <div class="form-row p-3 bg-light">
            <div class="col-md-6 form-group">
                <label for="">Edad</label>
                <input type="number" class="form-control" placeholder="Edad" min="0" max="65">
                <small id="emailHelp" class="form-text text-muted">De 0 a 65 años.</small>
            </div>
                
            <div class="col-md-6 form-group">
                <label for="">Género</label>
                <select name="state" id="estado" class="form-control placeholder">
                    <option value="" selected disabled>Seleciona una opción</option>
                    <option name="gender" id="masculino" value="hombre">Masculino</option>
                    <option name="gender" id="femenino" value="mujer">Femenino</option>
                </select>
            </div>   
            <div class="form-group ml-auto">
                <button type="button" class="btn btn-primary" id="button-add-insured">Agregar</button>
            </div>                             
        </div>
        `;
    }
}
export {Ui};