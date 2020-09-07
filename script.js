//console.log för att se så att script-fil är kopplat med index-fil
console.log("Hej världen!");

//Hämtar mina object från DOM
let inpName = document.getElementById("inpName");
let btnInport = document.getElementById("btnInport");
let oupDiv = document.getElementById("oupDiv");

btnInport.addEventListener("click", function (params) {
  //add to local storage
  let inpValue = inpName.value;
  localStorage.setItem("name", inpValue);

  //Skriv ut objekt i ett eget <div>element
  oupDiv.insertAdjacentHTML("afterbegin", `<div>${inpValue}</div><br>`);
});

btnDelete.addEventListener("click", function () {
  //raderar sparat namn från lokalStorage
  localStorage.clear();
  location.reload();
});
