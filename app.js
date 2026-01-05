class Airplane {
    constructor(brand, namber) {
        this.brand = brand
        this.namber = namber
        this.kmFlown = 0
    }
    fly() {
        console.log(`im flying!!!`);
    }
    printBrand() {
        console.log(this.brand);
    }
};
const plane = new Airplane(`Booing`, 707)


function Person(name, age) {
    this.name = name
    this.age = age
    this.print = function () {
        console.log(this.name, this.age);
    }
}
// const p = new Person(`Pinchas`, 23)
// p.print()

function Car(brand) {
    this.brand = brand
    this.drive = function () {
        console.log(`vrrroooomm`);
    }
    this.fuel = function () {
        console.log(`putting gas`)
    }
}
function Tesla() {
    this.brand = `Tesla`
    this.fuel = function () {
        console.log(`charging`)
    }
}
// const t = new Tesla()
// Object.setPrototypeOf(t, Car.prototype)
// Car.call(t, `Tesla`)
// t.fuel()