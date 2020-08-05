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

    addInsured() {
        
    }

    deleteInsured() {

    }

    renderPolicy(total){
    this.containerTotal.innerHTML = `
    <div class="card">
        <div class="card-header">Precio</div>
        <div class="card-body">
            <p>Total de Poliza $ ${total}</p>
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
                <button type="button" class="btn btn-primary">Agregar</button>
            </div>                             
        </div>
        `;
    }
}