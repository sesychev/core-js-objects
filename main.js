function group(array, keySelector, valueSelector) {
  const filtered = array.filter((obj) =>
    Object.entries(obj).filter((k, v) => k === keySelector)
  );

  return filtered;
}

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

console.log(
  mergeObjects([
    { a: 1, b: 2 },
    { b: 3, c: 5 },
  ])
);
