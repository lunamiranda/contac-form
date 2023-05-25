export const View = (data) => {
  const ulEl = document.getElementById("list");

  ulEl.innerHTML = "";

  data.forEach((element) => {
    const liEl = document.createElement("li");

    liEl.innerText = element.name;
    ulEl.append(liEl);
  });
};
