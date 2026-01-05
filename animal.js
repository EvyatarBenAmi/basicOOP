class Animal {
    constructor(name, breed, numOfLegs, isVegan) {
        this.name = name
        this.breed = breed
        this.numOfLegs = numOfLegs
        this.isVegan = isVegan
    }
}
class Dog extends Animal {
    bark() {
        return (`Dog is bark`);
    }
}
class Cat extends Animal {
    scratch() {
        return (`Cat is scratch`);
    }
}

// const papi = new Dog(`papi`,`pudel`,4,false)
// console.log(`name: ${papi.name}`,papi.bark());