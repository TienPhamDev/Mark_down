import { markDownToHTML } from "./markDownToHTML";
export const screenResponsive = (markDownSection, markDownEditor) => {
  const width = screen.width;
  console.log(width);
  const markDownInput = markDownEditor.firstElementChild;
  const markDownOutput = markDownEditor.lastElementChild;
  const markDownHead = markDownSection.firstElementChild;

  if (width >= 577 && width <= 768) {
    markDownHead.style.display = "none";
    markDownEditor.lastElementChild.classList.remove("hidden");

    markDownEditor.style.display = "flex";
  }
  markDownInput.addEventListener("input", (event) => {
    markDownOutput.innerHTML = markDownToHTML(event.target.value);
    // if (event.key === "Enter") {
    //   markDownOutput.innerHTML = markDownToHTML(event.target.value);
    // }
  });
};
