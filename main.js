function group(array, k, v) {
  const multimap = new Map();
  /*
  array.map((obj) =>
    multimap.set(
      k(obj),
      (multimap.get(k(obj)) === undefined ? [] : multimap.get(k(obj))).concat([v(obj)])
    )
  );
*/

  array.reduce((a, c) => {
    if (!multimap.get(k(c))) multimap.set(k(c), []);
    multimap.get(k(c)).push(v(c));
    return a;
  }, new Map());

  return multimap;
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
