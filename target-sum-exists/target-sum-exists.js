const targetSumExistsInTwoNumbers = (list, target) => {
  for (let i in list) {
    for (let j in list) {
      //see if list[i] + list[j] === target
      if (list[i] + list[j] === target) {
        return true;
      }
    }
  }
};

const targetSumExistsInThreeNumbers = (list, target) => {
  // return false;
  for (let i in list) {
    for (let j in list) {
      //see if list[i] + list[j] === target
      if (list[i] + list[j] === target) {
        return true;
      } else {
        return false;
      }
    }
  }
};

module.exports = {
  targetSumExistsInTwoNumbers,
  targetSumExistsInThreeNumbers,
};
