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

export {Insured};