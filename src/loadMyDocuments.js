import { convertDate } from "./convertDate";
export const loadMyDocuments = (divElement) => {
  const data = JSON.parse(localStorage.getItem("documentsData")) || []; // get data from local storage

  data.map((element) => {
    const divMain = document.createElement("div");
    const divLeft = document.createElement("div");
    const divRight = document.createElement("div");
    const divDate = document.createElement("div");
    const divName = document.createElement("div");

    divMain.classList.add("loadMyDocCssMainDiv");
    // create svg tag and set Attribute
    const svgTag = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );
    svgTag.setAttribute("width", "14");
    svgTag.setAttribute("height", "16");

    // create path and set Attribute
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      "M13.107 3.393c.167.167.31.393.429.678.119.286.178.548.178.786v10.286c0 .238-.083.44-.25.607a.827.827 0 0 1-.607.25h-12a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V.857C0 .62.083.417.25.25A.827.827 0 0 1 .857 0h8c.238 0 .5.06.786.179.286.119.512.261.678.428l2.786 2.786ZM9.143 1.214v3.357H12.5c-.06-.172-.125-.294-.196-.366L9.509 1.411c-.072-.072-.194-.137-.366-.197Zm3.428 13.643V5.714H8.857a.827.827 0 0 1-.607-.25.827.827 0 0 1-.25-.607V1.143H1.143v13.714H12.57Z"
    );
    path.setAttribute("fill", "#FFF");

    const date = convertDate(element.createdAt);
    divDate.textContent = `${date}`;
    divName.textContent = `${element.name}`;

    svgTag.appendChild(path);
    divLeft.appendChild(svgTag);
    divRight.appendChild(divDate);
    divRight.appendChild(divName);
    divMain.appendChild(divLeft);
    divMain.appendChild(divRight);
    divElement.appendChild(divMain);

    divMain.addEventListener("click", () => {
      const nameDocument = document.querySelector(".nameDocument");
      const markDownInput = document.querySelector(".markDownTextArea");
      nameDocument.value = element.name;
      markDownInput.value = element.content;
    });
  });
};
