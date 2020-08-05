class Insured {
    constructor(age,sex,city){
        this.age = age;
        this.sex = sex;
        this.city = city;
        this.rate = 0;
        this.priceRate = 0;
    };

    getRate(arregloEstados){
        let tarifa = arregloEstados.filter(estado => estado.nombre === this.city);
        this.rate = tarifa[0]['tarifa'];
    }
    
    generateRate(objeto) {
        let edadArray = objeto.filter(e =>  e.edad===this.age)
        this.priceRate = edadArray[0]["tarifa"][this.rate][this.sex]; 
    }
}

class Policy {
    constructor(insured,city){
        this.insured = insured;
        this.city = city;
        this.total = 0;
    };

    addInsured(person){
        this.insured.push(person);
    }

    generateTotal() {
        this.total = this.insured
                .map(function(obj) { return obj.priceRate; })
                .reduce(function(a, b) { return a + b; });
    }

    getTotal() {
        this.generateTotal();
        return this.total;
    }
}

class Ui {
    constructor(containerTotal) {
        this.containerTotal = containerTotal;
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

    renderFamiliar(){
        this.containerInsureds.innerHTML = `
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
        'tarifa': 2
    },
    {
        'nombre': 'Puebla',
        'tarifa': 2
    }
    ]

    

    document.addEventListener("DOMContentLoaded", () => {
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
    });




// let dos = new Insured(1,'mujer','Oaxaca');
// dos.getRate(estados);
// dos.generateRate(objeto);
// poliza.addInsured(dos);
// let tres = new Insured(1,'hombre','Puebla');
// tres.getRate(estados);
// tres.generateRate(objeto);
// poliza.addInsured(tres);
// console.log(poliza.getTotal());
// // console.log(poliza.insured);
