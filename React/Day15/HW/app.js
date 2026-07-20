class Parent
{
    name = "XYZ"

    // constructor(d)
    // {
    //     this.something = d
    // }

    sayHi()
    {
        console.log("Hello")
    }


}


class Child extends Parent{
    age = 10;

    // constructor(d)
    // {
    //     super(d)
    // }

    random()
    {
        super.sayHi()
    }
}


const p = new Parent()
const c = new Child()
p.sayHi()
c.random()