import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import iconMenu from "/icon-menu.svg";
import { setupCounter } from "./counter.js";
import logo from "/logo.svg";
document.querySelector("#app").innerHTML = `
  <header>
    <nav>
      <button class="menuMyDoc">
        <svg width="30" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h30v2H0zM0 8h30v2H0zM0 16h30v2H0z"/></g></svg>
      </button>
    </nav>
  </header>
`;

setupCounter(document.querySelector("#counter"));
