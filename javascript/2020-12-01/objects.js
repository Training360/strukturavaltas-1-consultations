const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    logName: function () {
        console.log(`I'm ${this.firstName} ${this.lastName}.`);
    }
}

console.log(person.firstName);
console.log(person['firstName']);

//Modify
person.firstName = 'Jane';
console.log(person.firstName);

// Add
person.hobbies = ['reading', 'walking'];
console.log(person);

// Delete
delete person.age;
console.log(person);

person.logName();


const user = {
    firstName: 'John',
    lastName: 'Doe',
    hobbies: ['reading', 'learning', 'runing'],
    getHobby: function (index) {
        // const { hobbies } = this;
        const hobby = this.hobbies[index];
        return `${hobby[0].toLocaleUpperCase()}${hobby.slice(1)}`;
    }
}

console.log(user.hobbies[0]);
console.log(user.getHobby(0));