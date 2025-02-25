export const menuBtn = (element) => {
  element.addEventListener("click", () => {
    const app = document.querySelector("#app");
    const open = element.firstElementChild;
    const close = element.lastElementChild;

    open.classList.toggle("hidden");
    if (open.classList.contains("hidden")) {
      app.firstElementChild.style.transform = "translateX(250px)";
      
      app.lastElementChild.style.transform = "translateX(0px)";
    }
    close.classList.toggle("hidden");
    if (close.classList.contains("hidden")) {
      app.firstElementChild.style.transform = "translateX(0px)";

      app.lastElementChild.style.transform = "translateX(-250px)";
    }
  });
};
