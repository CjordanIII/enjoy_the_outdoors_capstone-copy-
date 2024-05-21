"use strict";
/* 
!Search by priority page
    -requirements:
        user can search for national parks inside nationalParkData.js file
        two ways to search for national parks radio btn:
            -By Location
                -select dropdown (locationData file):
                    -state
                    -territory
            -By park type
 */
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
let row = table.insertRow(-1);
let headerRow = table.insertRow(-1);
const headerCell1 = headerRow.insertCell(0);
const headerCell2 = headerRow.insertCell(1);
const headerCell3 = headerRow.insertCell(2);
const headerCell4 = headerRow.insertCell(3);
headerCell1.textContent = "Location Id";
headerCell2.textContent = "Name";
headerCell3.textContent = "Address";
headerCell4.textContent = "URL";
const stateDataOne = findByState(
  locationsArray,
  nationalParksArray,
  location,
  headerRow,
  tableBody
);

// toggle between radio btns from location ===> type
parkTypeInput.addEventListener("change", (e) => {
  const value = e.target.value;
  parkType.classList.remove("d-none");
  parkType.classList.add("d-block");
  location.classList.add("d-none");
  location.classList.remove("d-block");
  let row = table.insertRow(-1);
  const cell1 = row.insertCell();
  const cell2 = row.insertCell();
  const cell3 = row.insertCell();
  const cell4 = row.insertCell();
  cell1.textContent = "Location Id";
  cell2.textContent = "Name";
  cell3.textContent = "Address";
  cell4.textContent = "URL";

  findByType(parkTypesArray, nationalParksArray, parkType, row);
});
// toggle between radio btns from type==>location
locationInput.addEventListener("change", (e) => {
  const value = e.target.value;

  // Show location dropdown and hide parkType dropdown
  location.classList.remove("d-none");
  location.classList.add("d-block");
  parkType.classList.add("d-none");
  parkType.classList.remove("d-block");
  findByState(locationsArray, nationalParksArray, location);

  //   let row = table.insertRow(-1);
  //   const cell1 = row.insertCell();
  //   const cell2 = row.insertCell();
  //   const cell3 = row.insertCell();
  //   const cell4 = row.insertCell();
  //   cell1.textContent = "Location Id";
  //   cell2.textContent = "Name";
  //   cell3.textContent = "Address";
  //   cell4.textContent = "URL";

  //   data.forEach((row, cell) => {
  //     console.log(row, cell);
  //     // row = tableBody.insertRow();
  //     // let cell = row.insertCell();
  //     //     cell.textContent = "place";
  //   });
});
