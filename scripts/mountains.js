"use strict";
import { mountainsArray } from "./data/mountainData.js";
import { showDropdown } from "./helpers/dropDownHelper.js";
import { getSunsetForMountain } from "./services/getSunSetData.js";
// grabbing dom elements
const dropDown = document.querySelector("#moutainDropDwon");
const card = document.querySelector("#card");
// adding default values
mountainsArray.unshift({ name: "Select a mountain" });
// create dropdown
mountainsArray.forEach((data) => {
  const option = document.createElement("option");
  option.innerText = data.name;
  option.value = data.name;
  dropDown.appendChild(option);
});
// select drop down
dropDown.addEventListener("change", (e) => {
  const data = e.target.value;
  const result = mountainsArray.filter((moredata) => moredata.name === data);
  // gets sunset html
  fetchData(result);
});

// create sunset html
async function fetchData(result, lat, lng) {
  try {
    const data = await getSunsetForMountain(
      result[0].coords.lat,
      result[0].coords.lng
    );

    card.innerHTML = `
  <div class="card mt-3" style="width: 18rem">
    <img src="${`../images/${result[0].img}`}" class="card-img-top" alt="${
      result[0].name
    }" />
    <div class="card-body">
      <h5 class="card-title">${result[0].name}</h5>
      <p class="card-text">
        ${result[0].desc} </p>
      </p>

      <p class="card-text">Elevation:${result[0].elevation}</p>
      <p class="card-text">Effort: ${result[0].effort}</p>
      <p class="card-text">coords (est): lat ${result[0].coords.lat.toFixed(
        2
      )} lng: ${result[0].coords.lng.toFixed(2)}</p>
      <p>sunset: ${data ? data : "waiting for data"}</p>

    </div>`;
  } catch (e) {
    card.innerHTML = `
  <div >
    <h1 class="text-danger">${e}</h1>
    </div>`;
  }
}
