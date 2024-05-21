import { showDropdown } from "./dropDownHelper.js";
import { displayState } from "./displayHelper.js";
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

function findByState(locationsArray, nationalParksArray, location, headerRow) {
  // template logic for dropdown
  locationsArray.unshift("select by state");
  showDropdown(location, locationsArray);
  headerRow.innerHTML = "";
  location.addEventListener("change", (event) => {
    const targetedValue = event.target.value;
    const result = searchData(nationalParksArray, targetedValue, "location");
    displayState(result, headerRow);
  });
}
function findByType(
  parkTypesArray,
  nationalParksArray,
  parkType,

  tableBody
) {
  parkTypesArray.unshift("select by park type");

  showDropdown(parkType, parkTypesArray);

  parkType.addEventListener("change", (event) => {
    const targetedValue = event.target.value;
    const result = searchData(nationalParksArray, targetedValue, "byType");
    displayState(result, tableBody);
  });
}

export { searchData, findByState, findByType };
