class Employee {
    constructor(name, age){
        this.name = name
        this.age = age
    }

    getName(){
        return this.name
    }

    getAge(){
        return this.age
    }
}

class Engineer extends Employee{
    constructor(name, age, tech){
        super(name, age); // Now 'this' is initialized by calling the parent constructor.
        this.tech = tech
    }

    getTech(){
        return this.tech;
    }
}