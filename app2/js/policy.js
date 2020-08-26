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
        return this.total.toFixed(2);
    }
}
export {Policy};;