// OTHER 3
// Készíts egy objectConverter nevű objektumot, ami az alábbi metódusokkal rendelkezik:
// arrayToMap(array)
// arrayToSet(array)
// setToMap(set)
// setToArray(set)
// mapToArray(map)
// mapToSet(map)
// A fenti metódusok értelemszerűen nem másra szolgálnak, mint az egyik összetett adattípusból
// konvertálják át az adatokat egy másikba. Mindegyik metódus visszatérési értéke egy új
// Array, Map, vagy Set object.
const objectConverter = {
  setToArray(set) {
    return Array.from(set);
  },
  mapToArray(map) {
    return [...map.values()];
  },
  arrayToMap(arr) {
    return new Map(arr.map((item, index) => [index, item]));
  },
  arrayToSet(arr) {
    return new Set(arr);
  },
  setToMap(set) {
    return new Map(Array.from(set).map((item, index) => [index, item]));
  },
  mapToSet(map) {
    return new Set(...map);
  },
};

export default objectConverter;
