//const clients = []

import {clientsList} from './view.js'

 const saveData = (clients) => {
  localStorage.setItem("allClients", JSON.stringify(clients))
}


export const newClient = (clients) => {
  const inputName = document.getElementById("name").value;
  const inputPhone = document.getElementById("phone").value;
  const inputEmail = document.getElementById("email").value;
  const inputAge = document.getElementById("age").value;
  const form = document.getElementById("form")

  const client = {name:inputName, age:inputAge, phone: inputPhone, email:inputEmail}


  console.log(clients)
  clients.push(client)
  saveData(clients)
  form.reset()
  console.log(clients) 
  clientsList(clients)
  
}


