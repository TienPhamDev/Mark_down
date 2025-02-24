export const newMyDocuments = (element) => {
  // Function implementation here
  element.addEventListener("click", () => {
    const nameDocument = document.querySelector(".nameDocument");
    const markDownInput = document.querySelector(".markDownInput");

    nameDocument.value = "untitled.md";
    markDownInput.value = "";
  });
};
