const currentDate = () => {
  let now = new Date();
  let year = now.getFullYear();
  let month = String(now.getMonth() + 1).padStart(2, "0");
  let day = String(now.getDate()).padStart(2, "0");
  let formatted = `${month}-${day}-${year}`;
  return formatted;
};
export const saveMydocuments = (element) => {
  const localStorageData =
    JSON.parse(localStorage.getItem("documentsData")) || [];
  element.addEventListener("click", () => {
    const nameDocument = document.querySelector(".nameDocument");
    const markDownInput = document.querySelector(".markDownInput");

    localStorageData.forEach((e) => {
      if (e.name === nameDocument.value) {
        e.content = markDownInput.value;
      }
    });
    localStorage.setItem("documentsData", JSON.stringify(localStorageData));
  });
};
