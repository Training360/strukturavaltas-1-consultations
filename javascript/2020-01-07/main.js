import async3 from './modules/async-3.js';
import objectConverter from './modules/other-3.js';
import multipleRequest from './modules/async-1.js';

// ********** OTHER 3 **********

const arr = [1, 2, 3];
const set = new Set(arr);
const map = new Map();
map.set(1, 'egy');
map.set(2, 'kettő');

console.log('set to array', objectConverter.setToArray(set));
console.log('map to array', objectConverter.mapToArray(map));
console.log('array to map', objectConverter.arrayToMap(arr));
console.log('array to set', objectConverter.arrayToSet(arr));
console.log('set to map', objectConverter.setToMap(set));
console.log('ma to set', objectConverter.mapToSet(map));

// ********** ASYNC 1 **********

const userPaths = [
  './data/user1.json',
  './data/user2.json',
  './data/user3.json',
];

multipleRequest(userPaths);

// ********** ASYNC 3 **********

const resolveInTwoSeconds = new Promise((resolve) => {
  setTimeout(() => resolve(2), 2000);
});

const resolveInThreeSeconds = new Promise((resolve) => {
  setTimeout(() => resolve(3), 3000);
});

const resolveInFiveSeconds = new Promise((resolve) => {
  setTimeout(() => resolve(5), 5000);
});

const rejectInFiveSeconds = new Promise((resolve, reject) => {
  setTimeout(() => reject(), 5000);
});

// SUCCESS
async3(
  resolveInTwoSeconds, resolveInThreeSeconds, resolveInFiveSeconds,
).then(console.log);

// FAILURE
async3(
  resolveInTwoSeconds, resolveInThreeSeconds, rejectInFiveSeconds,
).then(console.log);
