function group(array, keySelector, valueSelector) {
  const filtered = array.filter((obj) =>
    Object.entries(obj).filter((k, v) => k === keySelector)
  );

  return filtered;
}
/*
console.log(
  group(
    [
      { country: 'Belarus', city: 'Brest' },
      { country: 'Russia', city: 'Omsk' },
      { country: 'Russia', city: 'Samara' },
      { country: 'Belarus', city: 'Grodno' },
      { country: 'Belarus', city: 'Minsk' },
      { country: 'Poland', city: 'Lodz' },
    ],
    (item) => item.country,
    (item) => item.city
  )
);
*/
function mergeObjects(objects) {
  const o = {};

  objects.forEach((obj) => {
    Object.entries(obj).forEach((x) => {
      const key = x[0];
      const value = x[1];

      if (!o[key]) {
        o[key] = 0;
      }

      o[key] += value;
    });
  });

  return o;
}
/*
console.log(
  mergeObjects([
    { a: 1, b: 2 },
    { b: 3, c: 5 },
  ])
);
*/
function removeProperties(obj, keys) {
  /*
  const o = {};
  keys.forEach((key) => {
    Object.keys(obj).forEach((k) => {
      if (key === k) {
        //console.log(key);
        delete obj[k];
      }
    });
  });
*/
  return Object.keys(obj)
    .filter((key) => !keys.includes(key))
    .reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});
}

console.log(removeProperties({ a: 1, b: 2, c: 3 }, ['b', 'c']));
