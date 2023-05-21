import {newClient} from "./capture.js"
import {clientsList} from "./view.js"


const buttonEl = document.getElementById("submit") 

buttonEl.addEventListener('click', (e) => {
  e.preventDefault();
    newClient();

});

clientsList();
