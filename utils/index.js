export const shortAddress = (address) =>
  `${address.slice(0, 6)}...${address.slice(address.length - 4)}`;

export const parseErrorMsg = (error) => {
  const json = JSON.parse(JSON.stringify(error));
  return json.reason || json?.error?.message;
};
