// format date to return Sep 10, 2020 format
export const formatToShort = (dateString) => {
  let date = new Date(dateString);
  let stringDate = date.toDateString();
  let dateArray = stringDate.split(" ");
  return `${dateArray[1]} ${dateArray[2]}, ${dateArray[3]}`;
};

export const getCurrentYear = () => {
  let date = new Date();
  return date.getFullYear();
};

export const getAgeRestriction = (ageRestriction = 18) => {
  var restrictedYears = new Date();
  return restrictedYears.setTime(
    restrictedYears.valueOf() - ageRestriction * 365 * 24 * 60 * 60 * 1000
  );
};
