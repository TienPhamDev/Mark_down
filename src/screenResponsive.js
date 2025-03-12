import { markDownToHTML } from "./markDownToHTML";
export const screenResponsive = (markDownSection, markDownEditor) => {
  const width = window.innerWidth;

  const markDownInput = markDownEditor.firstElementChild;
  const markDownOutput = markDownEditor.lastElementChild;
  const markDownHead = markDownSection.firstElementChild;
  const markDownTablet = markDownSection.querySelector(
    ".markDownPreviewTablet"
  );
  const mediaQuery = window.matchMedia("(max-width: 768px)");

  if (mediaQuery.matches) {
    console.log("Screen size is less than or equal to 768px (Mobile view)");
  }

  mediaQuery.addEventListener("change", (event) => {
    if (event.matches) {
      console.log("Switched to Mobile view");
    } else {
      console.log("Switched to Desktop view");
    }
  });
  if(width < 577){
    markDownTablet.classList.add("hidden")
  }
  if (width >= 577 && width <= 768) {
    markDownTablet.classList.remove('hidden')
    markDownInput.addEventListener("input", (event) => {
      markDownOutput.innerHTML = markDownToHTML(event.target.value);
    });
  }
};
