import { markDownToHTML } from "./markDownToHTML";
export const screenResponsive = (markDownSection, markDownEditor) => {
  const phoneSreen = window.matchMedia("(max-width: 426px)");
  const tabletSreen = window.matchMedia(
    "(min-width: 427px) and (max-width: 768px)"
  );
  const desktopScreen = window.matchMedia("(min-width: 769px)");

  const handleScreenSize = () => {
    const markDownInput = markDownEditor.firstElementChild;
    const markDownOutput = markDownEditor.lastElementChild;
    const markDownHead = markDownSection.firstElementChild;
    const markDownTablet = markDownSection.querySelector(
      ".markDownPreviewTablet"
    );

    if (phoneSreen.matches) {
      markDownTablet.style.display = "none";
    } else if (tabletSreen.matches) {
      markDownTablet.style.display = "flex";
      markDownInput.addEventListener("input", (event) => {
        markDownOutput.innerHTML = markDownToHTML(event.target.value);
      });
    }
  };

  phoneSreen.addEventListener("change", handleScreenSize);
  tabletSreen.addEventListener("change", handleScreenSize);

  handleScreenSize();
};
