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
import { showDropdown } from "./helpers/dropDownHelper.js";
import { searchData } from "./helpers/searchHelper.js";
/*
        You can remove the following console.log() lines.
        They are here to verify that we have access to the data
        The data script files are located in the scripts/data directory
    */

//log the locationsArray to the console (scripts/data/locationData.js)
// locatoin or type radio btn logic
const search = document.querySelector("#radioBtn");

let state = search.childNodes[1].childNodes[3].value;

// search function
function findByState(locationsArray, nationalParksArray) {
  const byLocation = document.querySelector("#byLocation");

  let display = true;
  // template logic for dropdown
  if (locationsArray.length > 0 && nationalParksArray.length > 0) {
    showDropdown(byLocation, display, locationsArray);
    const selected = document.querySelector("select");

    selected.addEventListener("change", (event) => {
      const targetedValue = event.target.value;
      const results = searchData(nationalParksArray, targetedValue);
      console.log(results);
    });
  } else {
    ("");
  }
}
// empty first
if (state === "location") {
  state = "";
  findByState(locationsArray, nationalParksArray);
} else if (state === "parkType") {
  state = "";
  findByType(parkTypesArray, nationalParksArray);
} else {
  console.log("error");
}
// populate
search.addEventListener("change", (event) => {
  if (state === "location") {
    state = "";
    findByState(locationsArray, nationalParksArray);
  } else if (state === "parkType") {
    state = "";
    findByType(parkTypesArray, nationalParksArray);
  } else {
    console.log("error");
  }
});

// =============================

function findByType(parkTypesArray, nationalParksArray) {
  const byType = document.querySelector("#byParkType");
  let display = true;
  const selected2 = document.querySelector("select");

  selected2.addEventListener("change", (event) => {
    console.log("find by type");
    const targetedValue = event.target.value;
    // const results = searchData(nationalParksArray, targetedValue);
    // console.log(results);
  });
}

//log the parkTypesArray to the console (scripts/data/parkTypeData.js)
// console.log(parkTypesArray);

//log the nationalParksArray to the console (scripts/data/nationalParkData.js)
// console.log(nationalParksArray);
