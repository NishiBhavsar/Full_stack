class Person {
    readonly birthDate: Date;

    constructor(birthDate: Date) {
        this.birthDate = birthDate;
    }
}

let person = new Person(new Date(2000, 10, 29));
console.log("Person Date: "+person.birthDate);