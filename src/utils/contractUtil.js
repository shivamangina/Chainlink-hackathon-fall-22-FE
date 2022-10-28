/** This file will have all functions related to contract */

export const getName = async (Contract) => {
  const name = await Contract.name();
  return name;
};
