export const yearVehicles = () => {
  let data = [];
  for (let year = 2024; year >= 1990; year--) {
    data.push(year);
  }
  return data;
};
