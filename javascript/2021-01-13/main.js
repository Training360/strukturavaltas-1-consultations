class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayMyName() {
    console.log(`My name is ${this.name}`);
  }
}

const user1 = new User('John', 30);
const user2 = new User('Jane', 20);
user1.sayMyName();
user2.sayMyName();

function UserC(name, age) {
  this.name = name;
  this.age = age;
}

UserC.prototype.sayMyName = function () {
  console.log(`My name is ${this.name}`);
};

const userC1 = new UserC('John', 30);
const userC2 = new UserC('Jane', 20);
userC1.sayMyName();
userC2.sayMyName();

function UserC2(name, age) {
  this.name = name;
  this.age = age;
  this.sayMyName = function () {
    console.log(`My name is ${this.name}`);
  };
}

const userC3 = new UserC2('John', 30);
const userC4 = new UserC2('Jane', 20);
userC3.sayMyName();
userC4.sayMyName();

function userFactory(name, age) {
  return {
    name,
    age,
    sayMyName() {
      // lehet this nélkül is paraméterként kapja:
      // console.log(`My name is ${name}`);
      console.log(`My name is ${this.name}`);
    },
  };
}

const userC5 = userFactory('John', 30);
const userC6 = userFactory('Jane', 20);
userC5.sayMyName();
userC6.sayMyName();
