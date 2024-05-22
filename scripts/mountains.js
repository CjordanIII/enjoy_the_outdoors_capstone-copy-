"use strict";
import { mountainsArray } from "./data/mountainData.js";
import { showDropdown } from "./helpers/dropDownHelper.js";
const dropDown = document.querySelector("#moutainDropDwon");

const card = document.querySelector("#card");

mountainsArray.forEach((data) => {
  const option = document.createElement("option");
  option.innerText = data.name;
  option.value = data.name;
  dropDown.appendChild(option);
});

dropDown.addEventListener("change", (e) => {
  const data = e.target.value;
  console.log(data);
  const result = mountainsArray.filter((moredata) => moredata.name === data);
  card.innerHTML = `
  <div class="card " style="width: 18rem">
    <img src="${"../images/" + result[0].img}" class="card-img-top" alt="${
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
      
    </div>`;
});
