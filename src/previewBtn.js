import { markDownToHTML } from "./markDownToHTML";
export const previewBtn = (element) => {
  const h1Node = document.querySelector(".markDownPreview h1");
  const open = element.firstElementChild;
  const close = element.lastElementChild;
  const markDown = document.querySelector(".markDownTextArea");
  const convertedMarkDown = document.querySelector(".convertedMarkDown");
  element.addEventListener("click", (e) => {
    open.classList.toggle("hidden");
    close.classList.toggle("hidden");
    if (open.classList.contains("hidden")) {
      h1Node.textContent = "PREVIEW";
      markDown.classList.toggle("hidden");
      convertedMarkDown.classList.toggle("hidden");
      convertedMarkDown.innerHTML = markDownToHTML(markDown.value);
    } else {
      h1Node.textContent = "MARKDOWN";
      markDown.classList.toggle("hidden");
      convertedMarkDown.classList.toggle("hidden");
    }
  });
};
