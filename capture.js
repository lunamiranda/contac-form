import { View } from "./view.js";

export const newClient = (data) => {
  const inputName = document.getElementById("name").value;
  const inputPhone = document.getElementById("phone").value;
  const inputEmail = document.getElementById("email").value;
  const inputAge = document.getElementById("age").value;
  const form = document.getElementById("form");

  const newClient = {
    name: inputName,
    age: inputAge,
    phone: inputPhone,
    email: inputEmail,
  };

  data.push(newClient);
  saveData(data);
  form.reset();
  View(data);
};

const saveData = (customer) => {
  localStorage.setItem("allClients", JSON.stringify(customer));
};
