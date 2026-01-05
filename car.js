class Car {
    #id
    constructor(id, brand, maxSpeed, isElectric) {
        this.#id = id
        this.brand = brand
        this.maxSpeed = maxSpeed
        this.isElectric = isElectric
    }
    setNewMaxSpeed(speed) {
        this.maxSpeed = speed
    }
    printDetails() {
        console.log(this.#id, this.brand, this.maxSpeed, this.isElectric);
    }
}
const car1 = new Car(1,`Suzuki`,150,`on`)
car1.setNewMaxSpeed(200)
car1.printDetails()