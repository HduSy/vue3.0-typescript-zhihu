class Animal {
    readonly name: string

    constructor(name) {
        this.name = name
    }

    //private仅类内可访问
    //protected子类可访问
    //public(default)公有
    protected run() {
        console.log(`${this.name} is running`)
        return `${this.name} is running`
    }
}

let snake = new Animal('lily')
// console.log(snake.run())

class Dog extends Animal {
    bark() {
        console.log(`${this.name} is barking`)
        return `${this.name} is barking`
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name);
        console.log(`${this.name} is a cat`)
    }

    run(): string {
        return 'Meow, ' + super.run();
    }
}

let cat = new Cat('Tom')
cat.run()