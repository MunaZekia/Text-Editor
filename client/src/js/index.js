 // import { Workbox } from "../../nodemodules/workbox-window/Workbox.mjs";
import Editor from "./editor.js";
import "./database.js";
//  import "../css/style.css";

const main = document.querySelector("#main");
main.innerHTML = "";

const app = async () => {
  const editor = new Editor();
  const db = await initdb();
  const content = await getDb();
  editor.setValue(content);
};

const loadSpinner = () => {
  const spinner = document.createElement("div");
  spinner.classList.add("spinner");
  spinner.innerHTML = `
  <div class="loading-container">
    <div class="loading-spinner" />
    </div>
  </div>
  `;
  main.appendChild(spinner);
};

const editor = new Editor();

if (typeof editor === "undefined") {
  loadSpinner();
  //loadSpinner is a function that creates a div element with a class of spinner and a div element with a class of loading-container and a div element with a class of loading-spinner
}

// // Check if service workers are supported
// if ("serviceWorker" in navigator) {
//   // register workbox service worker
//   const workboxSW = new Workbox("/src-sw.js");
//   workboxSW.register();
// } else {
//   console.error("Service workers are not supported in this browser.");
// }
