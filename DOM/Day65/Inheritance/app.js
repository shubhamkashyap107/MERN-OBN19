class Parent{
    constructor(name = "", age = "")
    {
        this.name = name
        this.age = age
    }

    sayHi()
    {
        console.log("Namaste")
    }
}


class Child extends Parent{
    constructor(n, a, m)
    {
        super(n, a)
        this.mobile = m
    }
    sayHi()
    {
        console.log("Hello")
    }
}

class GrandChild extends Child{
    constructor(n,a,m,c)
    {
        super(n,a,m)
        this.cycle = c
    }

    sayHi()
    {
        console.log("Aur Launde")
    }
}

const p1 = new Parent("Papa", 60)
console.log(p1)

const c1 = new Child("Sumit", 40, "Apple")
console.log(c1)

const gc1 = new GrandChild("Abhishek", 20, "Samsung", "Tricycle")
console.log(gc1)

p1.sayHi()
c1.sayHi()
gc1.sayHi()