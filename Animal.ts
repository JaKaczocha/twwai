class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Cat extends Animal {
    constructor(name: string) {
        super(name);
    }

    makeSound(): string {
        return "miau";
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    makeSound(): string {
        return "hał"
    }
}