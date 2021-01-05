import * as People from './non-mutate.js';

console.log(People.getAll());
console.log(People.findById(1));
console.log(People.create('John Doe'));
console.log(People.update({ id: 1, name: 'Jane Doe' }));
console.log(People.remove(3));
console.log(People.getAll());
