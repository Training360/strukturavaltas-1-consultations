function sample({ firstName = 'John', lastName = 'Doe' } = {}) {
  console.log(lastName, firstName);
}

const person = {
  firstName: 'Jane',
};

sample(person);
