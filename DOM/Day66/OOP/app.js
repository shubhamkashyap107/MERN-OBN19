// class Parent{
//     constructor(nm)
//     {
//         this.name = nm
//     }
//     greet()
//     {
//         console.log("Namaste")
//     }
// }
// class Child extends Parent{
//     constructor(nm, ag)
//     {
//         super(nm)
//         this.age = ag
//     }

//     greet()
//     {
//         console.log("Hello")
//     }
// }
// const p = new Parent("Qwerty")
// const c = new Child("Xyz", 12)
// console.log(p)
// console.log(c)

// p.greet()
// c.greet()



// Encapsulation


class BankAccount{

    #balance;
    #pin;
    constructor(n, bal, p)
    {
        this.name = n
        this.#balance = bal
        this.#pin = p
    }

    // getter
    getBalance()
    {
        console.log(this.#balance)
    }

    //setter
    addBalance(pin, amount)
    {
        if(this.#pin != pin)
        {
            console.log("Invalid pin, please try again.")
            return
        }
        this.#balance = this.#balance + amount
        console.log("Amount deposited, balance :", this.#balance)
    }


    withdraw(pin, amount)
    {
        if(this.#pin != pin)
        {
            console.log("Invalid pin, please try again.")
            return
        }

        if(this.#balance < amount)
        {
            console.log("Invalid Amount, total balance :", this.#balance)
            return
        }

        this.#balance = this.#balance - amount
        console.log("Amount withdrawn, balance :", this.#balance)
    }



}

// const acc1 = new BankAccount("Shubham", 100, 1234)
// acc1.getBalance()
// acc1.addBalance(1234, 1000)
// acc1.withdraw(1234, 400)



// abstraction


class Car{
    constructor(n){
        this.name = n
    }


    startCar()
    {
        this.#injectFuel()
        this.#igniteEngine()
    }   

    #injectFuel()
    {
        console.log("Fuel Injected")
    }


    #igniteEngine()
    {
        console.log("Engined Ignited")
    }
}

const car = new Car("BMW")
car.startCar()