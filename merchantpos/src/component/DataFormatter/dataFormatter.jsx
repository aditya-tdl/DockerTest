import React from "react";

const dataFormatter = (data, config) => {
  return data.map((item, index) => {
    const formattedItem = {};

    // Add static keys with calculated values
    Object.keys(config.staticKeys).forEach((key) => {
      formattedItem[key] = config.staticKeys[key](item, index);
    });

    // Add dynamic keys from the data object
    Object.keys(item).forEach((key) => {
      formattedItem[key] =
        item[key] === undefined || item[key] === null ? "N/A" : item[key];
    });
    return formattedItem;
  });
};

export default dataFormatter;
