const fs = require('fs');

// To convert Array to accessible objects
const convertArrayToObject = (array, key) => {
  const initialValue = {};
  return array.reduce((obj, item) => {
    return {
      ...obj,
      [item[key]]: item,
    };
  }, initialValue);
}


module.exports = {
  convertArrayToObject,
}
