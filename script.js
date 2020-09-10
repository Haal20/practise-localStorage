//Hämtar mina object från DOM
let inpName = document.getElementById("inpName");
let btnInport = document.getElementById("btnInport");
let oupDiv = document.getElementById("oupDiv");

//manipulerar delete-knapp i DOM
let btnDelete = document.createElement("button");
btnDelete.innerHTML = "Delete Information";
btnDelete.setAttribute("id", "btnDelete");

if (localStorage.length >= 1) {
  //Skriv ut objekt i ett eget <div>element
  oupDiv.insertAdjacentHTML(
    "afterbegin",
    `<div>${localStorage.getItem("name")}</div><br>`
  );
}

btnInport.addEventListener("click", function () {
  //add to local storage
  let inpValue = inpName.value;
  localStorage.setItem("name", inpValue);

  //Skriv ut objekt i ett eget <div>element
  oupDiv.insertAdjacentHTML("afterbegin", `<div>${inpValue}</div><br>`);
  oupDiv.appendChild(btnDelete);
});

btnDelete.addEventListener("click", function () {
  //raderar sparat namn från lokalStorage
  localStorage.clear();
  location.reload();
});
