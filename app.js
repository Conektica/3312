class Insured {
    constructor(age,sex,city){
        this.age = age;
        this.sex = sex;
        this.rate = rate;
        this.city = city;
    };
}

class Policy {
    constructor(insured,city){
        this.insured = insured;
        this.city = city;
        this.total = 0;
    };
}

class Rate {
    constructor(city,age,sex){
        this.city = city;
        this.sex = sex;
        this.age = age;
        this.total = 0;
        this.numberRate = 0;
    };
}

class Ui {
    addInsured() {
        
    }

    deleteInsured() {

    }
}



const hijo = new Insured(10,'hombre')
const poliza = new Policy(3,'Oaxaca')
console.log(hijo.sex);
console.log(poliza);