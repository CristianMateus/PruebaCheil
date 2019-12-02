// Methods that helper uses
const doesObjectHaveString = (object, objectKeys, filterValue) => {
  let validKeys = [];
  objectKeys.forEach(key => {
    //   Obtains value that matches using the match method
    // watch video:
    // https://www.youtube.com/watch?v=W7S_Vmq0GSs
    const matchedValue = object[key]
      .toLowerCase()
      .match(filterValue.toLowerCase());
    //   If value does not match or matches but does not have the rigth index
    // if (!matchedValue || matchedValue.index !== 0) return;
    if (!matchedValue) return;
    validKeys.push(object[key]);
  });
  if (validKeys.length === 0) {
    //   If no keys where valid
    return false;
  } else {
    //   If key was valid
    return true;
  }
};

// Data that needs to be sent
// 1.objectArray
// 2.filtersArray
export const filterObjectsMethod = (objectArray, filtersArray, filterValue) => {
  if (!objectArray) return;
  if (objectArray.length === 0 || !filterValue) return objectArray;
  //   1. Filters the list
  const filteredArray = objectArray.filter(object => {
    if (!doesObjectHaveString(object, filtersArray, filterValue)) return null;
    return object;
  });
  //   2. Returns filtered list
  return filteredArray;
};
