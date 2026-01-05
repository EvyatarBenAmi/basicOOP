class Phone {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
    }
    detalis() {
        console.log(`Phone: ${this.brand} ${this.model}`)
    }
}
// const phone = new Phone(`Samsung`,`S22`)
// phone.detalis()

class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }
    area() {
        return (this.width * this.height)
    }
}
// const rectangle = new Rectangle(5,4)
// console.log(rectangle.area())

class BankAccount {
    constructor(owner, balance) {
        this.owner = owner
        this.balance = balance
    }
    deposit(amount) {
        this.balance += amount
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount
        }
    }
    checkBalance() {
        console.log(` Balance: ${this.balance}`)
    }
}
// const bank = new BankAccount(`name`, 1000)
// bank.deposit(500)
// bank.withdraw(200)
// bank.checkBalance()

class Book {
    constructor(titel, author) {
        this.titel = titel
        this.author = author
    }
    info() {
        console.log(`${this.titel} by ${this.author}`);
    }
}
// const book = new Book(`The Hobbit`,`Tolkien`) 
// book.info()

// class Person {
//     constructor(name) {
//         this.name = name
//     }
//     greet() {
//         console.log(`Hello, i'm ${this.name}`);
//     }
// }
class Student extends Person {
    constructor(name, school) {
        super(name)
        this.school = school
    }
    study() {
        console.log(`${this.name} is studying at ${this.school}`);
    }
}
// const person = new Person(`Alice`)
// const student = new Student(`Alice`,`Oxford`)
// person.greet()
// student.study()

class Alice {
    #salary
    constructor(salary) {
        this.#salary = salary
    }
    getSalary() {
        return this.#salary
    }
    work() {
        return `Employee is working`
    }
}
class Manager extends Alice {

}