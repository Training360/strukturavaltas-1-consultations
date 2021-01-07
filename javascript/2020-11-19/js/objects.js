const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['reading', 'learning', 'walking'],
    speak(message = 'hi') {
        console.log(this.firstName + ' ' + this.lastName + ' says: ' + message);
    }
};

console.log(person.firstName);
console.log(person.age);
person.age = 33;
console.log(person.age);
console.log(person.speak());
person.firstName = 'Jane';
console.log(person.speak('Mizu'));
console.log(person.hobbies[0]);
// console.log(person['firstName']);

const algebra = {
    init(arr1, arr2) {
        this.arr1 = arr1;
        this.arr2 = arr2;
    },
    unio() {
        return
    },
    intersection() {
        return
    },
    descartes() {
        return
    },
    subtraction() {
        return
    }
}

algebra.init([1, 2, 3, 4], [3, 4, 5, 6]);
console.log(algebra.arr1);
algebra.what = 'This is new';
console.log(algebra.what);
delete algebra.what;
console.log(algebra.what);

// console.log(algebra.arrays[0][0]);