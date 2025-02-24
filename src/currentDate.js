export const currentDate = () => {
  let now = new Date();
  let year = now.getFullYear();
  let month = String(now.getMonth() + 1).padStart(2, "0");
  let day = String(now.getDate()).padStart(2, "0");
  let formatted = `${month}-${day}-${year}`;
  return formatted;
};
