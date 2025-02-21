export const darkLightModeBtn = (element) => {
  element.addEventListener("click", () => {
    const bodyNode = document.body;
    const spanElement = element.querySelector("span");
    if (bodyNode.classList.contains("darkMode")) {
      bodyNode.classList.remove("darkMode");
      spanElement.style.transform = "translate(0%,-50%)";
    } else {
      bodyNode.classList.add("darkMode");
      spanElement.style.transform = "translate(-100%,-50%)";
    }
  });
};
