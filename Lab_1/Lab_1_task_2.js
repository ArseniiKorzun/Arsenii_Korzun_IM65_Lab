const arr = [
  true, 'hello', 5, 12, -200, false, false, 'word',
  3.14, 'text', true, null, undefined, { a: 1 },
  [1, 2, 3], 42n, Symbol('s'), () => {}, 'end', 0,
];

const counters = {
  number: 0,
  string: 0,
  boolean: 0,
};

for (const item of arr) {
  const type = typeof item;

  if (type === 'number') counters.number++;
  if (type === 'string') counters.string++;
  if (type === 'boolean') counters.boolean++;
}
console.dir(counters);
const dynamicCounters = {};

for (const item of arr) {
  const type = typeof item;

  if (dynamicCounters[type] === undefined) {
    dynamicCounters[type] = 0;
  }
  dynamicCounters[type]++;
}
console.dir(dynamicCounters);