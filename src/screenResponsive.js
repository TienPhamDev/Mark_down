import { markDownToHTML } from "./markDownToHTML";
export const screenResponsive = (markDownSection, markDownEditor) => {
  const width = window.innerWidth;

  const markDownInput = markDownEditor.firstElementChild;
  const markDownOutput = markDownEditor.lastElementChild;
  const markDownHead = markDownSection.firstElementChild;
  const markDownTablet = markDownSection.querySelector(
    ".markDownPreviewTablet"
  );

  if (width >= 577 && width <= 768) {
    markDownInput.addEventListener("input", (event) => {
      markDownOutput.innerHTML = markDownToHTML(event.target.value);
    });
  }
};
