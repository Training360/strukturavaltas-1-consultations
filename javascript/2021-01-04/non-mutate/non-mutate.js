import store from '../state/people.js';

// Automatikus ID generáltatáshoz szükséges
const gererateID = () => Math.max(...store.people.map((person) => person.id)) + 1;

// Az összes elem visszaadására használjuk, csak a tömböt magát adja vissza jelenleg
const getAll = () => store.people;

// CRUD: create, read, update, delete

// READ
const findById = (id) => store.people.find((person) => person.id === id);

// CREATE, non mutate
const create = (name) => {
  const person = {
    id: gererateID(),
    name,
  };
    // A people az eredeti tartalma, plusz az j elem legyen.
    // LEcseréljük a people objectet egy újra nem pedig módsosítjuk
  store.people = [...store.people, person];
  // a visszatérési érték az adott személy
  return person;
};

// UPDATE, non mutate
const update = ({ id, name }) => {
  const updatedPerson = { id, name };
  // Itt is lecseréljük a teljes people objectet
  store.people = store.people.map(
    (person) => (person.id === id ? updatedPerson : person),
  );
  // a visszatérési érték a frissített személy
  return updatedPerson;
};

// DELETE
const remove = (id) => {
  // Szintén lecseréljük az objectet
  store.people = store.people.filter((person) => person.id !== id);
};

export {
  getAll,
  findById,
  create,
  update,
  remove,
};
