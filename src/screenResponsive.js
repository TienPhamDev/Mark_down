import { markDownToHTML } from "./markDownToHTML";
export const screenResponsive = (markDownSection, markDownEditor) => {
  window.addEventListener("resize", function () {
    const width = window.innerWidth;
    console.log(width);
    const markDownInput = markDownEditor.firstElementChild;
    const markDownOutput = markDownEditor.lastElementChild;
    const markDownHead = markDownSection.firstElementChild;
    const markDownTablet = markDownSection.querySelector(
      ".markDownPreviewTablet"
    );

    if (width >= 577 && width <= 768) {
      // markDownHead.style.display = "none";
      // markDownEditor.lastElementChild.classList.remove("hidden");
      // // markDownTablet.style.display = "flex";

      // markDownEditor.style.display = "flex";
      markDownInput.addEventListener("input", (event) => {
        markDownOutput.innerHTML = markDownToHTML(event.target.value);
      });
    }
  });
};
