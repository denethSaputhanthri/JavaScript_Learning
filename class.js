class Animal {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    getDetails() {
        return console.log(`Name: ${this.name}, Age: ${this.age}, Type: ${this.type}`);
    }
}

class Dog extends Animal {
    constructor(name, age, type, breed) {
        super(name, age, type);
        this.breed = breed;
    }

    dogDetails() {
        return console.log(`Name: ${this.name}, Age: ${this.age}, Type: ${this.type}, Breed: ${this.breed}`);
    }
}


const animal1 = new Animal("Leo", 5, "Lion");
animal1.getDetails(); // Output: Name: Leo, Age: 5, Type: Lion

const dog1 = new Dog("Buddy", 3, "Dog", "Golden Retriever");
dog1.dogDetails(); // Output: Name: Buddy, Age: 3, Type: Dog, Breed: Golden Retriever