"use strict";

// data files for national parks page
import { locationsArray } from "./data/locationData.js";
import { parkTypesArray } from "./data/parkTypeData.js";
import { nationalParksArray } from "./data/nationalParkData.js";

import { searchData, findByState, findByType } from "./helpers/searchHelper.js";

// locatoin or type radio btn logic
const location = document.querySelector("#dropdownByLocation");
const parkType = document.querySelector("#dropdownByParkType");
const parkTypeInput = document.querySelector("#parkType");
const locationInput = document.querySelector("#location");
const table = document.querySelector("#resultsTitle");
const tableBody = document.querySelector("#resultsBody");
//insatiate

let headerRow = table.insertRow(-1);
const headerCell1 = headerRow.insertCell(0);
const headerCell2 = headerRow.insertCell(1);
const headerCell3 = headerRow.insertCell(2);
const headerCell4 = headerRow.insertCell(3);
headerCell1.textContent = "Location Id";
headerCell2.textContent = "Name";
headerCell3.textContent = "Address";
headerCell4.textContent = "URL";
table.classList.add("d-none");
findByState(locationsArray, nationalParksArray, location, tableBody, table);

// toggle between radio btns from location ===> type
parkTypeInput.addEventListener("change", (e) => {
  table.classList.add("d-none");
  table.classList.remove("d-show");
  const value = e.target.value;
  tableBody.innerHTML = "";

  parkType.classList.remove("d-none");
  parkType.classList.add("d-block");
  location.classList.add("d-none");
  location.classList.remove("d-block");

  findByType(parkTypesArray, nationalParksArray, parkType, tableBody, table);
});
// toggle between radio btns from type==>location
locationInput.addEventListener("change", (e) => {
  table.classList.add("d-none");
  table.classList.remove("d-show");
  const value = e.target.value;
  tableBody.innerHTML = "";
  // Show location dropdown and hide parkType dropdown

  location.classList.remove("d-none");
  location.classList.add("d-block");
  parkType.classList.add("d-none");
  parkType.classList.remove("d-block");

  findByState(locationsArray, nationalParksArray, location, tableBody, table);
});
