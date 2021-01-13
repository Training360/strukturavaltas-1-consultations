import store from '../state/people.js';

// Automatikus ID generáltatáshoz szükséges
const gererateID = () => Math.max(...store.people.map((person) => person.id)) + 1;

// Az összes elem visszaadására használjuk, csak a tömböt magát adja vissza jelenleg
const getAll = () => store.people;

// Az adott object id alapján a tömbindex lekérdezése
const getIndexById = (id) => store.people.findIndex((person) => person.id === id);

// CRUD: create, read, update, delete

// READ
const findById = (id) => store.people.find((person) => person.id === id);

// CREATE
const create = (name) => {
  const person = {
    id: gererateID(),
    name,
  };
  store.people.push(person);
  // a visszatérési érték az adott személy
  return person;
};

// UPDATE
const update = ({ id, name }) => {
  const index = getIndexById(id);
  store.people[index].name = name;
  // a visszatérési érték a frissített személy
  return store.people[index];
};

// DELETE
const remove = (id) => {
  const index = getIndexById(id);
  store.people.splice(index, 1);
  //  visszatérési érték NINCS
};

export {
  getAll,
  findById,
  create,
  update,
  remove,
};
