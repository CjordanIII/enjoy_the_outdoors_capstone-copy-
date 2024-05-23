import { showDropdown } from "./dropDownHelper.js";
import { displayState } from "./displayHelper.js";
// radio btns filter
function searchData(nationalParksArray, targetedValue, searchType) {
  const parkList = nationalParksArray.filter(
    (item) => item.State === targetedValue
  );
  const parkListType = nationalParksArray.filter((item) => {
    if (item.LocationName.includes(targetedValue)) {
      return true;
    }
  });
  if (searchType === "location") {
    return parkList;
  } else if (searchType === "byType") {
    return parkListType;
  } else {
    return "no park found";
  }
}
// search by state filter
function findByState(
  locationsArray,
  nationalParksArray,
  location,
  headerRow,
  table
) {
  locationsArray.unshift("select by state");
  // create and shows dropdown
  showDropdown(location, locationsArray);
  // resets html
  headerRow.innerHTML = "";
  // change table data based on event
  location.addEventListener("change", (event) => {
    table.classList.remove("d-none");
    table.classList.add("d-show");
    const targetedValue = event.target.value;
    const result = searchData(nationalParksArray, targetedValue, "location");
    // create and show table
    displayState(result, headerRow);
  });
}
// find by park type
function findByType(
  parkTypesArray,
  nationalParksArray,
  parkType,
  tableBody,
  table
) {
  // adds default value
  parkTypesArray.unshift("select by park type");
  // create and shows drop down
  showDropdown(parkType, parkTypesArray);
  // change table data based on event
  parkType.addEventListener("change", (event) => {
    table.classList.remove("d-none");
    table.classList.add("d-show");
    const targetedValue = event.target.value;
    const result = searchData(nationalParksArray, targetedValue, "byType");
    // displays result on html
    displayState(result, tableBody);
  });
}

export { searchData, findByState, findByType };
