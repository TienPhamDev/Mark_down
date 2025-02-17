export const convertDate = (dateStr) => {
  // Step 1: Split the original string into month, day, and year
  let originalDate = dateStr;
  let parts = originalDate.split("-"); // ["04", "01", "2022"]

  // Step 2: Create a new Date object (months are 0-indexed, so subtract 1 from the month)
  let date = new Date(parts[2], parts[0] - 1, parts[1]); // Date(2022, 3, 1) (April 1st, 2022)

  // Step 3: Create an array of month names for formatting
  let monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // Step 4: Format the date as "01 April 2022"
  let formattedDate = `${String(date.getDate()).padStart(2, "0")} ${
    monthNames[date.getMonth()]
  } ${date.getFullYear()}`;

  return formattedDate;
};
