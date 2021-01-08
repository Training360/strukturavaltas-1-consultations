//  ASNYC 3
//  Írj egy olyan async függvényt, ami paraméterként promiseokat (akármennyi lehet, számuk nem ismert)
// kap. A visszatérési érték egy Promise legyen, abban az esetben, ha mindegyik Promise fullfilled lett,
// egyébként egy Error object, az üzenet pedig: “Promise Error in functionName”.
// A functionName a függvény neve.

const async3 = async (...promises) => {
  try {
    const result = await Promise.all(promises);
    return result;
  } catch (err) {
    return new Error('Promise Error in functionName');
  }
};

export default async3;
