const clients = []

 const saveData = () => {
  localStorage.setItem("allClients", JSON.stringify(clients))
}


export const newClient = () => {
  const inputName = document.getElementById("name").value;
  const inputPhone = document.getElementById("phone").value;
  const inputEmail = document.getElementById("email").value;
  const inputAge = document.getElementById("age").value;
  const form = document.getElementById("form")

  const client = {name:inputName, age:inputAge, phone: inputPhone, email:inputEmail}

  clients.push(client)
  saveData()
  form.reset()
  console.log(clients) 
  
}


