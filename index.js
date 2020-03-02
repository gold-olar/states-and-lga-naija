const {convertArrayToObject,} = require('./helper');
const  allStates = require ('./rawData/states');

const allStatesObj = convertArrayToObject(allStates, "state")


const getAllStates = () => {
  return Object.keys(allStatesObj).sort();
}

const getLgas = (state) => {
  return allStatesObj[state].lgas.sort();
}

module.exports = {
  getAllStates,
  getLgas,
};
