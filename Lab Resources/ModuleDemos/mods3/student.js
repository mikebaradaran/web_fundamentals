class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getDetails() {
        return `Name:${this.name} Age:${this.age}`;
    }
}
export const VAT = 0.2;
function sayHi(name) {
    console.log(`Hello ${name}`);
}

function sayBye(name) {
    console.log(`Bye ${name}`);
}

export { sayHi, sayBye, Student };
