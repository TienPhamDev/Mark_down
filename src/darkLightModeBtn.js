export const darkLightModeBtn = (element) => {
  element.addEventListener("click", () => {
    const bodyNode = document.body;
    const darkLightDiv = document.querySelector(".darkLightModeDiv");

    const spanElement = element.querySelector("span");
    if (bodyNode.classList.contains("darkMode")) {
      bodyNode.classList.remove("darkMode");
      darkLightDiv.lastElementChild.firstElementChild.style.fill =
        "var(--slate-200)";
      darkLightDiv.firstElementChild.firstElementChild.style.fill =
        "var(--slate-500)";
      spanElement.style.transform = "translate(0%,-50%)";
    } else {
      bodyNode.classList.add("darkMode");
      darkLightDiv.firstElementChild.firstElementChild.style.fill =
        "var(--slate-200)";
      darkLightDiv.lastElementChild.firstElementChild.style.fill =
        "var(--slate-500)";
      spanElement.style.transform = "translate(-100%,-50%)";
    }
  });
};
