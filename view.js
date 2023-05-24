export const clientsList = (clients)=>{
   

  if (!clients) return;
  //const clients = JSON.parse(localStorage.getItem("allClients"))

console.log(clients)
   for(var i = 0; i < clients.length; i++){

     const liEl = document.createElement('li')
     const divEl = document.createElement('div')
      
      liEl.innerText = clients[i].name
      liEl.appendChild(divEl)

     divEl.innerHTML = 
       `<img class="profile" src="https://i.pinimg.com/originals/b9/e3/8c/b9e38cb331502265ced6a64c414dff3f.jpg">
       <ul>
       <li>${clients[i].age}</li>
       <li>${clients[i].phone}</li>
       <li>${clients[i].email}</li>
       </ul>`

     const ulEl = document.getElementById('list')
     ulEl.appendChild(liEl)
    }
}
