function shallowCopy(obj) {
  const arr = Object.create(null);
  /*
  Object.entries(obj).forEach((o) => {
    const key = o[0];
    const value = o[1];
    arr[key] = value;
  });
*/
  return Object.assign(arr, obj);
}

//console.log(shallowCopy({ a: 2, b: 5 }));

function removeProperties(obj, keys) {
  const newObj = {};

  keys.forEach((key) => {
    const k = Object.keys(obj);

    if (k.indexOf(key) !== -1) {
      newObj[key] = obj[key];
    }
  });

  return newObj;
}

console.log(removeProperties({ a: 1, b: 2, c: 3 }, ['b', 'c']));
