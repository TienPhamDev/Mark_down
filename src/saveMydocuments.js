import { currentDate } from "./currentDate";
export const saveMydocuments = (element) => {
  // get data from local storage
  const localStorageData =
    JSON.parse(localStorage.getItem("documentsData")) || [];

  // set click event for button save
  element.addEventListener("click", () => {
    const nameDocument = document.querySelector(".nameDocument");
    const markDownInput = document.querySelector(".markDownInput");

    const findCurrentDocument = localStorageData.find(
      (e) => e.name === nameDocument.value
    );

    if (findCurrentDocument !== undefined) {
      //loop through local storage data array find match name in object and update new input
      localStorageData.forEach((e) => {
        if (e.name === nameDocument.value) {
          e.createdAt = currentDate();
          e.content = markDownInput.value;
        }
      });
      //update new input to local storage
      localStorage.setItem("documentsData", JSON.stringify(localStorageData));
    } else {
      // if change name of the document -> create new document -> add new content to local storage
      let newDocument = {
        createdAt: currentDate(),
        name: nameDocument.value,
        content: markDownInput.value,
      };
      const updateNewDocument = [...localStorageData, newDocument];

      localStorage.setItem("documentsData", JSON.stringify(updateNewDocument));
    }
  });
};
