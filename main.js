import { newClient } from "./capture.js";
import { View } from "./view.js";

const clients = JSON.parse(localStorage.getItem("allClients")) || [];

const buttonEl = document.getElementById("submit");

buttonEl.addEventListener("click", (e) => {
  e.preventDefault();
  newClient(clients);
});

View(clients);
