const constants = require("./constants");

module.exports = (noOfItems, itemType) => {
  switch (itemType) {
    case "users":
      return constants.userDetails.slice(0, noOfItems);

    default:
      break;
  }
};
